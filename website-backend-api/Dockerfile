# =============================================================================
# DEVELOPMENT STAGE
# Uses the official PHP 8.3 CLI image. The 'dev' alias allows other stages
# or docker-compose to target this stage specifically via --target dev.
# =============================================================================
FROM php:8.3-cli AS dev

# Set the working directory inside the container. All subsequent COPY, RUN,
# and CMD instructions will be relative to this path.
WORKDIR /var/www

# Install OS-level packages needed to compile PHP extensions:
#   - unzip: required by Composer to extract packages
#   - libzip-dev: C library needed to compile the PHP 'zip' extension
# Then install PHP extensions:
#   - zip: allows PHP to read/write ZIP archives (used by Composer)
#   - pdo: PHP Data Objects, provides a database abstraction layer
# Finally, clean up the apt cache and temporary lists to keep the image small.
RUN apt-get update && apt-get install -y \
    unzip \
    libzip-dev \
    && docker-php-ext-install zip pdo \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy the Composer binary directly from the official Composer image rather
# than installing it via apt. This always pulls the latest stable Composer
# version and avoids adding extra package manager overhead.
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy all application source files from the host into the container's
# working directory. This includes Laravel's app/, config/, routes/,
# resources/, and all other project files.
COPY . .

# Install all Composer dependencies, including dev packages such as
# PHPUnit (testing), Faker (test data), and other dev-only tools.
# --optimize-autoloader generates an optimized class map for faster autoloading.
RUN composer install --optimize-autoloader

# Copy the development environment file to .env so Laravel can read it,
# then generate a unique APP_KEY used for encryption and session security.
# This must run after composer install so the artisan command is available.
RUN cp .env.development .env && php artisan key:generate

# Document that the container listens on port 8000. This does not publish
# the port — that is handled by docker-compose or the -p flag at runtime.
EXPOSE 8000

# Start Laravel's built-in development server, binding to all network
# interfaces (0.0.0.0) so it is reachable from outside the container.
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]


# =============================================================================
# PRODUCTION STAGE
# Separate stage targeting production. Excludes dev dependencies to produce
# a leaner, more secure image. Target with --target prod.
# =============================================================================
FROM php:8.3-cli AS prod

# Set the same working directory as the dev stage so file paths are consistent.
WORKDIR /var/www

# Same system dependency and PHP extension installation as the dev stage.
# Kept separate so each stage produces an independent, self-contained image
# that can be built and deployed without the other stage being present.
RUN apt-get update && apt-get install -y \
    unzip \
    libzip-dev \
    && docker-php-ext-install zip pdo \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Pull Composer from the official image, same as the dev stage.
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy all application source files into the container.
COPY . .

# Install only production Composer dependencies.
#   --no-dev: skips packages listed under 'require-dev' (testing tools, etc.)
#   --optimize-autoloader: generates a class map for faster class resolution,
#     which is important for performance in a live environment.
RUN composer install --no-dev --optimize-autoloader

# Copy the production environment file to .env and generate the APP_KEY.
# Using a separate .env.production file ensures production-specific values
# (e.g. APP_DEBUG=false, correct DB credentials) are used at runtime.
RUN cp .env.production .env && php artisan key:generate

# Document that the container listens on port 8000.
EXPOSE 8000

# Start Laravel's built-in server for production. For high-traffic workloads,
# consider replacing this with php-fpm behind an nginx reverse proxy instead.
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
