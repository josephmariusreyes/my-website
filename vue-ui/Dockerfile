# =============================================================================
# STAGE 1: DEPENDENCIES (shared base)
# Uses the official Node 20 image on Alpine Linux (a minimal OS) to keep the
# image size small. The 'deps' alias lets later stages copy node_modules from
# here without re-running npm install, saving time and ensuring all stages
# use the exact same dependency versions.
# =============================================================================
FROM node:20-alpine AS deps

# Set the working directory inside the container. All subsequent COPY and RUN
# instructions will be relative to this path.
WORKDIR /app

# Copy only the package manifest files first (package.json and package-lock.json).
# Doing this before copying the rest of the source code allows Docker to cache
# the npm install layer. If only source files change (not dependencies), Docker
# will reuse the cached layer and skip re-running npm install on the next build.
COPY package*.json ./

# Install all dependencies (both dependencies and devDependencies) as defined
# in package.json. node_modules will be available in /app/node_modules for
# downstream stages to copy from.
RUN npm install


# =============================================================================
# STAGE 2: DEVELOPMENT
# Inherits from the base Node image (not from 'deps') so it is a clean layer,
# but pulls node_modules from the 'deps' stage to avoid reinstalling packages.
# Runs the Vite development server with hot module replacement (HMR).
# Target this stage with: docker build --target development
# =============================================================================
FROM node:20-alpine AS development

WORKDIR /app

# Copy the pre-installed node_modules from the 'deps' stage instead of running
# npm install again. This keeps the development image build fast and consistent.
COPY --from=deps /app/node_modules ./node_modules

# Copy all application source files (src/, public/, index.html, vite.config.js,
# etc.) into the container so Vite can serve and watch them.
COPY . .

# Document that the Vite dev server listens on port 5173 (Vite's default port).
# The port is not published here — use -p 5173:5173 or docker-compose to expose it.
EXPOSE 5173

# Start the Vite development server with '--host' so it binds to 0.0.0.0
# (all network interfaces) instead of only localhost. Without this flag, the
# server would be unreachable from outside the container.
CMD ["npm", "run", "dev", "--", "--host"]


# =============================================================================
# STAGE 3: BUILD (production asset compilation)
# Inherits directly from 'deps' so node_modules are already present, then
# copies source files and runs the Vite production build. The output is a
# fully optimised, minified, and hashed static asset bundle in /app/dist.
# This stage is an intermediate step — its output is consumed by Stage 4.
# =============================================================================
FROM deps AS build

# Copy all application source files on top of the 'deps' layer which already
# has node_modules in place.
COPY . .

# Run the Vite production build (defined as "vite build" in package.json).
# Vite compiles, tree-shakes, minifies, and fingerprints all assets and outputs
# them to the /app/dist directory ready to be served as static files.
RUN npm run build


# =============================================================================
# STAGE 4: PRODUCTION
# Uses the official nginx image on Alpine Linux — a high-performance, lightweight
# web server ideal for serving static files in production. Only the compiled
# /app/dist output is copied in; no Node.js, source code, or node_modules are
# included, resulting in a very small and secure final image.
# Target this stage with: docker build --target production
# =============================================================================
FROM nginx:alpine AS production

# Copy the compiled static assets from the 'build' stage into nginx's default
# web root. nginx will serve these files directly without any server-side
# processing, making responses extremely fast.
COPY --from=build /app/dist /usr/share/nginx/html

# Document that nginx listens on port 80 (standard HTTP).
EXPOSE 80

# Start nginx in the foreground ('daemon off'). Docker requires the main process
# to stay in the foreground — if nginx daemonised (ran in the background), the
# container would immediately exit after startup.
CMD ["nginx", "-g", "daemon off;"]
