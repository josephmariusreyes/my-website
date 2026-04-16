<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCvStore } from '../stores/cvStore'
import resumePic from '../assets/resume-pic.png'
import ContactDialog from './ContactDialog.vue'

const { cvDetails } = storeToRefs(useCvStore())

const showContact = ref(false)
</script>

<template>
  <section class="section-wrapper hero-section">
    <div class="hero-inner">
      <!-- Replace background-image with your photo URL when ready -->
      <div class="profile-picture" role="img" aria-label="Profile photo" :style="{ backgroundImage: `url(${resumePic})` }" />

      <div class="hero-text">
        <h1 class="hero-name">
          Jeph Reyes
          <br>
          AI First - FullStack Software Developer
        </h1>
        <p>📍 based in the Philippines.</p>
        <p class="hero-tagline">
          Thanks for visiting my Portfolio website! I've been in the IT industry for 10 years building and maintaining enterprise applications in the auto finance sector. Throughout my career, I've focused on creating reliable apps that support real-world business operations.
          <br/><br/>
          For the foreseeable future, my goal is to work with <b>startups</b> and <b>mid-size enterprises</b>, as well as taking on <b>freelance</b>, <b>contractual</b>, or <b>part-time jobs</b>. I enjoy contributing to meaningful projects. Feel free to keep reading to learn more about my skills, experience, and qualifications.
        </p>
        
        <div class="hero-actions">
          <button class="btn btn-primary" @click="showContact = true">Contact Me</button>

          <a
            href="https://www.linkedin.com/in/joseph-marius-reyes-4419131a7/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link social-link--linkedin"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          <a
            href="https://github.com/josephmariusreyes"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link social-link--github"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          <a
            href="#"
            class="social-link social-link--upwork"
            aria-label="Upwork"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
            </svg>
          </a>

          <a
            href="#"
            class="social-link osdire-link"
            aria-label="OsDire"
          >
            <span class="osdire-label">OsDire</span>
          </a>
        </div>
      </div>
    </div>

    <ContactDialog v-model="showContact" />
  </section>
</template>

<style scoped>
.hero-inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 2.5rem;
}

/* Fallback for browsers without gap support */
@supports not (gap: 2.5rem) {
  .hero-inner > * + * {
    margin-left: 2.5rem;
  }
}

.profile-picture {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #d1d5db;
  background-size: cover;
  background-position: 1px 2px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  border: 5px solid #6366f1;
}

.hero-text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 0.45rem;
}

/* Fallback for browsers without gap support */
@supports not (gap: 0.45rem) {
  .hero-text > * + * {
    margin-top: 0.45rem;
  }
}

.hero-name {
  font-size: 1.65rem;
  color: #111827; /* Explicit color to prevent browser dark mode interference */
}

.hero-tagline {
  color: #4b5563; /* Explicit color to prevent browser dark mode interference */
  font-size: 0.95rem;
}

.hero-bio {
  color: #4b5563; /* Explicit color to prevent browser dark mode interference */
  font-size: 0.95rem;
}

.hero-actions {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.35rem;
}

/* Fallback for browsers without gap support */
@supports not (gap: 0.75rem) {
  .hero-actions > * + * {
    margin-left: 0.75rem;
  }
}

.social-link {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #111827; /* Explicit color to prevent browser dark mode interference */
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

.social-link:hover {
  opacity: 0.65;
}

.social-link--linkedin { color: #0A66C2; }
.social-link--github   { color: #181717; }
.social-link--upwork   { color: #14a800; }
.osdire-link           { color: #e8550a; }

.osdire-label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.03em;
}

@media (max-width: 500px) {
  .hero-inner {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
  }

  /* Reset horizontal gap fallback for column layout */
  @supports not (gap: 2.5rem) {
    .hero-inner > * + * {
      margin-left: 0;
      margin-top: 1.5rem;
    }
  }

  .hero-actions {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-inner {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  /* Reset horizontal gap fallback for column layout */
  @supports not (gap: 1.5rem) {
    .hero-inner > * + * {
      margin-left: 0;
      margin-top: 1.5rem;
    }
  }

  .profile-picture {
    width: 140px;
    height: 140px;
  }

  .hero-name {
    font-size: 1.35rem;
  }

  .hero-tagline {
    font-size: 0.9rem;
  }

  .hero-actions {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}
</style>
