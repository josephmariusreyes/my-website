<template>
  <section class="section-wrapper">

    <!-- ── Row 1: Qualifications ──────────────────────────── -->
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

    <!-- ── Row 2: Top skill set ───────────────────────────── -->
    <div class="row-header" style="margin-top: 3rem;">
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
              <img :src="devicon('digitalocean')" alt="DigitalOcean" />
            </div>
          </div>
          <h3 class="top-card__name">Docker &amp; DigitalOcean</h3>
        </div>
        <p class="top-card__desc">
            Docker - lets me package applications and their dependencies into consistent portable containers. 
            <br/><br/>
            DigitalOcean - Offers cost effective droplets wherein I can deploy and host my containarized frontend app, backend APIs and database.
        </p>
      </div>

    </div>

    <!-- ── Row 3: Other skills ────────────────────────────── -->
    <div class="row-header" style="margin-top: 3rem;">
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

  </section>
</template>

<script setup>
const devicon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

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
/* ── Section headers ──────────────────────────────── */
.row-header {
  text-align: center;
  margin-bottom: 1.75rem;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 0.4rem;
}

/* ── Qualifications grid ──────────────────────────── */
.qual-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.qual-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
}

.qual-card__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.qual-card__icon {
  font-size: 1.75rem;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  cursor: default;
  display: inline-block;
}

.qual-card__icon:hover {
  transform: scale(1.18);
}

.qual-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-heading);
  margin: 0;
}

.qual-card__desc {
  font-size: 0.875rem;
  color: var(--text-body);
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
  color: var(--text-body);
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

/* ── Top skill cards ──────────────────────────────── */
.top-skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.top-card {
  padding: 1.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.85rem;
}

.top-card__logos {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.logo-circle {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  cursor: default;
}

.logo-circle:hover {
  transform: scale(1.18);
}

.logo-circle img {
  width: 100%;
  height: 100%;
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
  color: var(--text-heading);
  margin: 0;
}

.top-card__desc {
  font-size: 0.85rem;
  color: var(--text-body);
  line-height: 1.6;
}

/* ── Other skills bars ────────────────────────────── */
.other-skills-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem 2rem;
}

.skill-bar-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.skill-bar-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  flex-shrink: 0;
}

.skill-bar-name {
  width: 110px;
  flex-shrink: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-heading);
}

.skill-bar-track {
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
  transition: width 0.6s ease;
}

.skill-bar-score {
  width: 36px;
  flex-shrink: 0;
  font-size: 0.8rem;
  color: var(--text-body);
  text-align: right;
}

/* ── Responsive ───────────────────────────────────── */

/* Mobile: single column everything */
@media (max-width: 600px) {
  .qual-grid {
    grid-template-columns: 1fr;
  }

  .top-skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-bar-name {
    width: 90px;
  }
}
</style>
