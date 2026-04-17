<template>
  <section class="section-wrapper">

    <!-- ── Row 1: Top skill set ───────────────────────────── -->
    <div class="row-header">
      <h2 class="section-title">My Top Skill Set</h2>
      <p class="row-subtitle">My favorites technologies chosen for their ability to deliver simple, effective, and production-ready solutions.</p>
    </div>

    <div class="top-skills-grid">

      <!-- Backend -->
      <div class="top-card">
        <p class="top-card__category">Backend</p>
        <div class="top-card__header">
          <div class="top-card__logos">
            <div class="logo-circle">
              <img :src="devicon('laravel')" alt="Laravel" />
            </div>
          </div>
          <h3 class="top-card__name">PHP Laravel</h3>
        </div>
        <p class="top-card__desc">I prefer Laravel because it provides a clean and structured way to build web applications. Its built-in tools help speed up development while keeping the code organized and maintainable.</p>
      </div>

      <!-- Frontend -->
      <div class="top-card">
        <p class="top-card__category">Frontend</p>
        <div class="top-card__header">
          <div class="top-card__logos">
            <div class="logo-circle">
              <img :src="devicon('vuejs')" alt="Vue.js" />
            </div>
            <div class="logo-circle">
              <img :src="devicon('nuxtjs')" alt="Nuxt.js" />
            </div>
            <div class="logo-circle logo-circle--ts">
              <span class="ts-badge">TS</span>
            </div>
          </div>
          <h3 class="top-card__name">Vue.js, Nuxt.js & TypeScript</h3>
        </div>
        <p class="top-card__desc">
            Vue.js & Nuxt.js - For modern frontend development. I like how their component-based approach keeps UI logic organized and easy to maintain as applications grow.
            <br/><br/>
            Typescript - If needed only, I use TypeScript when a project benefits from stronger type safety and clearer structure. It helps improve code reliability and maintainability.</p>
      </div>

      <!-- AI Tools -->
      <div class="top-card">
        <p class="top-card__category">AI Tools</p>
        <div class="top-card__header">
          <div class="top-card__logos">
            <div class="logo-circle">
              <img src="https://cdn-icons-png.flaticon.com/512/11865/11865326.png" alt="ChatGPT" />
            </div>
            <div class="logo-circle">
              <img src="https://images.seeklogo.com/logo-png/42/2/github-copilot-logo-png_seeklogo-428029.png" alt="GitHub Copilot" />
            </div>
          </div>
          <h3 class="top-card__name">Chat GPT &amp; Github Copilot</h3>
        </div>
        <p class="top-card__desc">I maintain an active subscription for both. I use them in combination, ChatGPT for architecture and consultation, Copilot to generate code and boost productivity.</p>
      </div>

      <!-- DevOps -->
      <div class="top-card">
        <p class="top-card__category">DevOps / Infrastructure</p>
        <div class="top-card__header">
          <div class="top-card__logos">
            <div class="logo-circle">
              <img :src="devicon('docker')" alt="Docker" />
            </div>
            <div class="logo-circle">
              <img :src="devicon('linux')" alt="Linux" />
            </div>
          </div>
          <h3 class="top-card__name">Docker &amp; Cloud Linux Server</h3>
        </div>
        <p class="top-card__desc">
            Docker - lets me package applications and their dependencies into consistent portable containers. 
            <br/><br/>
            Cloud Linux Server - I deploy and host my containerized frontend apps, backend APIs, and databases on cloud-based Linux servers, giving me full control over the environment and infrastructure.
        </p>
      </div>

    </div>

    <!-- ── Row 2: Other skills ────────────────────────────── -->
    <div class="row-header">
      <h2 class="section-title">My Other Skills</h2>
      <p class="row-subtitle">Throughout my years in IT, I've had the opportunity to work with many different technologies. Below are the top 10 I have used within my profesional years.</p>
    </div>

    <div class="other-skills-list">
      <div v-for="skill in otherSkills" :key="skill.name" class="skill-bar-item">
        <img :src="skill.logo" :alt="skill.name" class="skill-bar-icon" />
        <span class="skill-bar-name">{{ skill.name }}</span>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" :style="{ width: (skill.score / 10 * 100) + '%' }" />
        </div>
        <span class="skill-bar-score">{{ skill.score }}/10</span>
      </div>
    </div>

    <!-- ── Row 3: Qualifications ──────────────────────────── -->
    <div class="row-header">
      <h2 class="section-title">My Qualifications</h2>
      <p class="row-subtitle">What sets Jeph apart from the rest of the pack?</p>
    </div>

    <div class="qual-grid">

      <div class="qual-card">
        <div class="qual-card__header">
          <div class="qual-card__icon">🤖</div>
          <h3 class="qual-card__title">AI First Development</h3>
        </div>
        <p class="qual-card__desc">I leverage AI tools to it's full potential to boost my productivity and deliverables.</p>
      </div>

      <div class="qual-card">
        <div class="qual-card__header">
          <div class="qual-card__icon">🧩</div>
          <h3 class="qual-card__title">Ambiguity &amp; Business Understanding</h3>
        </div>
        <p class="qual-card__desc">I ask the right questions and turn vague business goals into clear, actionable solutions.</p>
      </div>

      <div class="qual-card">
        <div class="qual-card__header">
          <div class="qual-card__icon">🤝</div>
          <h3 class="qual-card__title">Problem Solving &amp; Collaboration</h3>
        </div>
        <p class="qual-card__desc">I break down complex problems and work closely with teams to deliver practical, well-considered solutions.</p>
      </div>

      <div class="qual-card">
        <div class="qual-card__header">
          <div class="qual-card__icon">🏗️</div>
          <h3 class="qual-card__title">Application Design &amp; Deployment</h3>
        </div>
        <p class="qual-card__desc">I design and build full applications from database to UI and take them all the way to production.</p>
      </div>

    </div>

  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { initScrollAnimation } from '@/services/uiAnimationUtil'

const devicon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

// Scroll animation cleanup function
let cleanupAnimation = null

onMounted(() => {
  cleanupAnimation = initScrollAnimation('.qual-card, .top-card, .other-skills-list')
})

onUnmounted(() => {
  if (cleanupAnimation) {
    cleanupAnimation()
  }
})

const otherSkills = [
  { name: 'Github',     logo: devicon('github'),                                                                          score: 9 },
  { name: 'PostgreSQL', logo: devicon('postgresql'),                                                                      score: 8 },
  { name: 'MySQL',      logo: devicon('mysql'),                                                                           score: 8 },
  { name: 'Supabase',   logo: devicon('supabase'),                                                                        score: 7 },
  { name: 'SCSS',       logo: devicon('sass'),                                                                            score: 7 },
  { name: 'Figma',      logo: devicon('figma'),                                                                           score: 7 },
  { name: 'Canva',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg',       score: 7 },
  { name: 'CloudFlare', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg', score: 6 },
  { name: 'jQuery',     logo: devicon('jquery'),                                                                          score: 6 },
  { name: 'Angular',    logo: devicon('angular'),                                                                         score: 7 },
]
</script>

<style scoped>
/* ── Scroll animations ────────────────────────────── */
.qual-card,
.top-card,
.other-skills-list {
  opacity: 0;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  -webkit-transition: opacity 0.6s ease-out, -webkit-transform 0.6s ease-out;
  transition: opacity 0.6s ease-out, -webkit-transform 0.6s ease-out;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out;
}

.qual-card.visible,
.top-card.visible,
.other-skills-list.visible {
  opacity: 1;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

/* Stagger animation for qual-cards */
.qual-card:nth-child(1) { -webkit-transition-delay: 0s; transition-delay: 0s; }
.qual-card:nth-child(2) { -webkit-transition-delay: 0.1s; transition-delay: 0.1s; }
.qual-card:nth-child(3) { -webkit-transition-delay: 0.2s; transition-delay: 0.2s; }
.qual-card:nth-child(4) { -webkit-transition-delay: 0.3s; transition-delay: 0.3s; }

/* Stagger animation for top-cards */
.top-card:nth-child(1) { -webkit-transition-delay: 0s; transition-delay: 0s; }
.top-card:nth-child(2) { -webkit-transition-delay: 0.1s; transition-delay: 0.1s; }
.top-card:nth-child(3) { -webkit-transition-delay: 0.2s; transition-delay: 0.2s; }
.top-card:nth-child(4) { -webkit-transition-delay: 0.3s; transition-delay: 0.3s; }

/* ── Section headers ──────────────────────────────── */
.row-header {
  text-align: center;
  margin-bottom: 1.75rem;
  margin-top: 3rem;
}

.row-header:first-child {
  margin-top: 0;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #111827; /* Explicit color to prevent browser dark mode interference */
  margin-bottom: 0.4rem;
}

/* ── Qualifications grid ──────────────────────────── */
.qual-grid {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1.5rem 1fr;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.qual-card {
  background: #ffffff; /* Explicit white background to prevent browser dark mode interference */
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  -webkit-box-shadow: var(--card-shadow);
  box-shadow: var(--card-shadow);
}

.qual-card__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

/* Fallback for browsers without gap support */
@supports not (gap: 0.75rem) {
  .qual-card__header > * + * {
    margin-left: 0.75rem;
  }
}

.qual-card__icon {
  font-size: 1.75rem;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-transition: -webkit-transform 0.2s ease;
  transition: -webkit-transform 0.2s ease;
  transition: transform 0.2s ease;
  transition: transform 0.2s ease, -webkit-transform 0.2s ease;
  cursor: default;
  display: inline-block;
}

.qual-card__icon:hover {
  -webkit-transform: scale(1.18);
  -ms-transform: scale(1.18);
  transform: scale(1.18);
}

.qual-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: #111827; /* Explicit color to prevent browser dark mode interference */
  margin: 0;
}

.qual-card__desc {
  font-size: 0.875rem;
  color: #4b5563; /* Explicit color to prevent browser dark mode interference */
  line-height: 1.65;
  margin: 0;
}

.section-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: var(--primary);
  margin: 0.4rem auto 0;
  border-radius: 2px;
}

.row-subtitle {
  color: #4b5563; /* Explicit color to prevent browser dark mode interference */
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

/* ── Top skill cards ──────────────────────────────── */
.top-skills-grid {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 1.5rem 1fr;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.top-card {
  padding: 1.5rem;
  background: #ffffff; /* Explicit white background to prevent browser dark mode interference */
  border: 1px solid var(--border);
  border-radius: var(--radius);
  -webkit-box-shadow: var(--card-shadow);
  box-shadow: var(--card-shadow);
}

.top-card__category {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--primary);
  margin-bottom: 0.85rem;
  text-align: center;
}

.top-card__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.85rem;
}

/* Fallback for browsers without gap support */
@supports not (gap: 1rem) {
  .top-card__header > * + * {
    margin-left: 1rem;
  }
}

.top-card__logos {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 0.5rem;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

/* Fallback for browsers without gap support */
@supports not (gap: 0.5rem) {
  .top-card__logos > * + * {
    margin-left: 0.5rem;
  }
}

.logo-circle {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: #e5e7eb;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 10px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-transition: -webkit-transform 0.2s ease;
  transition: -webkit-transform 0.2s ease;
  transition: transform 0.2s ease;
  transition: transform 0.2s ease, -webkit-transform 0.2s ease;
  cursor: default;
}

.logo-circle:hover {
  -webkit-transform: scale(1.18);
  -ms-transform: scale(1.18);
  transform: scale(1.18);
}

.logo-circle img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}

.logo-circle--ts {
  background: #3178c6;
}

.ts-badge {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
}

.top-card__name {
  font-size: 1.05rem;
  font-weight: 700;
  color: #111827; /* Explicit color to prevent browser dark mode interference */
  margin: 0;
}

.top-card__desc {
  font-size: 0.85rem;
  color: #4b5563; /* Explicit color to prevent browser dark mode interference */
  line-height: 1.6;
}

/* ── Other skills bars ────────────────────────────── */
.other-skills-list {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 2rem 1fr;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 2rem;
}

.skill-bar-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 0.85rem;
}

/* Fallback for browsers without gap support */
@supports not (gap: 0.85rem) {
  .skill-bar-item > * + * {
    margin-left: 0.85rem;
  }
}

.skill-bar-icon {
  width: 22px;
  height: 22px;
  -o-object-fit: contain;
  object-fit: contain;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.skill-bar-name {
  width: 110px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: #111827; /* Explicit color to prevent browser dark mode interference */
}

.skill-bar-track {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 8px;
  background: var(--border);
  border-radius: 999px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: var(--primary);
  border-radius: 999px;
  -webkit-transition: width 0.6s ease;
  transition: width 0.6s ease;
}

.skill-bar-score {
  width: 36px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 0.8rem;
  color: #4b5563; /* Explicit color to prevent browser dark mode interference */
  text-align: right;
}

/* ── Responsive ───────────────────────────────────── */

/* Tablet: 2 columns still works but tighter spacing */
@media (max-width: 768px) {
  .qual-grid,
  .top-skills-grid,
  .other-skills-list {
    gap: 1rem;
  }

  .top-card__header {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 0.5rem;
  }

  /* Reset gap fallback for column layout */
  @supports not (gap: 0.5rem) {
    .top-card__header > * + * {
      margin-left: 0;
      margin-top: 0.5rem;
    }
  }

  .top-card__name {
    text-align: center;
    font-size: 0.95rem;
  }

  .logo-circle {
    width: 50px;
    height: 50px;
    padding: 8px;
  }
}

/* Mobile: single column everything */
@media (max-width: 600px) {
  .qual-grid {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }

  .top-skills-grid {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }

  .other-skills-list {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }

  .skill-bar-name {
    width: 80px;
    font-size: 0.85rem;
  }

  .skill-bar-icon {
    width: 18px;
    height: 18px;
  }

  .skill-bar-item {
    gap: 0.5rem;
  }

  .qual-card {
    padding: 1rem;
  }

  .qual-card__icon {
    font-size: 1.5rem;
  }

  .qual-card__title {
    font-size: 0.9rem;
  }

  .qual-card__desc {
    font-size: 0.8rem;
  }

  .top-card {
    padding: 1rem;
  }

  .top-card__desc {
    font-size: 0.8rem;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .row-subtitle {
    font-size: 0.85rem;
  }
}
</style>
