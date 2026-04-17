<template>
  <header class="app-header">
    <div class="header-content">
      <!-- Logo/Brand area (left side) -->
      <div class="header-brand"></div>

      <!-- Desktop Navigation (right side) -->
      <nav class="header-nav desktop-nav">
        <a 
          v-for="link in navLinks" 
          :key="link.id" 
          :href="link.href" 
          class="nav-link"
          @click="handleNavClick($event, link)"
        >
          {{ link.label }}
        </a>
      </nav>


    </div>
  </header>
  <header class="app-header-mobile">
    <!-- Mobile Hamburger Button -->
    <v-btn
    class="mobile-menu-btn"
    icon
    variant="text"
    @click="mobileMenuOpen = true"
    >
    <v-icon color="white">mdi-menu</v-icon>
    </v-btn>
  </header>
  <!-- Mobile Menu Dialog -->
    <v-dialog
      v-model="mobileMenuOpen"
      fullscreen
      transition="dialog-bottom-transition"
      class="mobile-menu-dialog"
    >
      <v-card class="mobile-menu-card">
        <!-- Close Button -->
        <v-btn
          icon
          variant="text"
          class="mobile-menu-close"
          @click="mobileMenuOpen = false"
        >
          <v-icon size="32">mdi-close</v-icon>
        </v-btn>

        <!-- Mobile Navigation Links -->
        <div class="mobile-nav-links">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="link.href"
            class="mobile-nav-link"
            @click="handleMobileNavClick($event, link)"
          >
            {{ link.label }}
          </a>
        </div>
      </v-card>
    </v-dialog>  
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const mobileMenuOpen = ref(false)

const navLinks = [
  { id: 'home', label: 'Home', href: '/', scrollTo: false },
  { id: 'projects', label: 'Applications and Projects', href: '#projects', scrollTo: true },
  { id: 'skills', label: 'Skills and Qualification', href: '#skills', scrollTo: true },
  { id: 'experience', label: 'Work Experience', href: '#experience', scrollTo: true },
  // { id: 'articles', label: 'Articles', href: '/articles', scrollTo: false },
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleNavClick = (event, link) => {
  if (link.scrollTo) {
    event.preventDefault()
    // If not on homepage, redirect to home with hash
    if (route.path !== '/') {
      router.push('/#' + link.id)
    } else {
      scrollToSection(link.id)
    }
  }
}

const handleMobileNavClick = (event, link) => {
  mobileMenuOpen.value = false
  if (link.scrollTo) {
    event.preventDefault()
    // If not on homepage, redirect to home with hash
    if (route.path !== '/') {
      router.push('/#' + link.id)
    } else {
      // Small delay to allow dialog to close before scrolling
      setTimeout(() => {
        scrollToSection(link.id)
      }, 100)
    }
  }
}
</script>

<style scoped>
.app-header {
  position: relative;
  z-index: 1000;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: var(--primary);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.25rem 0.50rem;
  background:none;
}

.header-brand {
  flex-shrink: 0;
}

.header-logo {
  height: 40px;
  width: auto;
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #fff;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary, #3b82f6);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Mobile Menu Button - Hidden on desktop by default */
.mobile-menu-btn {
  display: none !important;
}

/* Mobile Menu Card */
.mobile-menu-card {
    background: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.mobile-menu-close {
  position: absolute !important;
  top: 1rem;
  right: 1rem;
  color: white !important;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.mobile-nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  transition: color 0.2s ease, transform 0.2s ease;
}

.mobile-nav-link:hover {
  color: #fff;
  transform: scale(1.05);
}

/* Mobile Header - Hidden on desktop */
.app-header-mobile {
  display: none;
}

/* Responsive - Tablet and Mobile */
@media (max-width: 900px) {
  .app-header {
    display: none;
  }

  .app-header-mobile {
    display: block;
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    pointer-events: none;
    background: var(--primary);
  }

  .mobile-menu-btn {
    display: flex !important;
    position: absolute;
    top: 0.75rem;
    right: 1rem;
    background: var(--primary) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 8px !important;
    width: 44px !important;
    height: 44px !important;
    pointer-events: auto;
  }

  .mobile-menu-btn:hover {
    background: var(--primary-hover) !important;
  }
}

@media (max-width: 600px) {
  .mobile-menu-btn {
    top: 0.5rem;
    right: 0.75rem;
    width: 40px !important;
    height: 40px !important;
  }

  .mobile-nav-link {
    font-size: 1.1rem;
  }
}
</style>
