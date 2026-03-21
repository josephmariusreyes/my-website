<template>
  <section class="section-wrapper">

    <!-- ── Row 1: Qualifications ──────────────────────────── -->
    <div class="row-header">
      <h2 class="section-title">Qualifications</h2>
      <p class="row-subtitle">What sets Jeph apart from the rest of the pack?</p>
    </div>

    <div class="qual-grid">

      <div class="qual-card">
        <div class="qual-card__icon">🧩</div>
        <h3 class="qual-card__title">Ambiguity &amp; Business Understanding</h3>
        <p class="qual-card__desc">I ask the right questions and turn vague business goals into clear, actionable solutions.</p>
      </div>

      <div class="qual-card">
        <div class="qual-card__icon">🤝</div>
        <h3 class="qual-card__title">Problem Solving &amp; Collaboration</h3>
        <p class="qual-card__desc">I break down complex problems and work closely with teams to deliver practical, well-considered solutions.</p>
      </div>

      <div class="qual-card">
        <div class="qual-card__icon">🏗️</div>
        <h3 class="qual-card__title">Application Design &amp; Deployment</h3>
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
        <div class="top-card__logos single">
          <div class="logo-circle">
            <img :src="devicon('laravel')" alt="Laravel" />
          </div>
        </div>
        <h3 class="top-card__name">PHP + Laravel</h3>
        <p class="top-card__desc">My go-to for building backends. Laravel keeps things clean and moves fast.</p>
      </div>

      <!-- Frontend -->
      <div class="top-card">
        <p class="top-card__category">Frontend</p>
        <div class="top-card__logos single">
          <div class="logo-circle">
            <img :src="devicon('vuejs')" alt="Vue.js" />
          </div>
        </div>
        <h3 class="top-card__name">Vue.js</h3>
        <p class="top-card__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
      </div>

      <!-- DevOps -->
      <div class="top-card">
        <p class="top-card__category">DevOps / Infrastructure</p>
        <div class="top-card__logos multi">
          <div class="logo-circle">
            <img :src="devicon('docker')" alt="Docker" />
          </div>
          <div class="logo-circle">
            <img :src="devicon('digitalocean')" alt="DigitalOcean" />
          </div>
        </div>
        <h3 class="top-card__name">Docker &amp; DigitalOcean</h3>
        <p class="top-card__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
      </div>

    </div>

    <!-- ── Row 3: Other skills ────────────────────────────── -->
    <div class="row-header" style="margin-top: 3rem;">
      <h2 class="section-title">My Skills</h2>
      <p class="row-subtitle">Through out my years in IT I have worked with different techlogies</p>
    </div>

    <div class="other-skills-list">
      <div v-for="skill in otherSkills" :key="skill.name" class="skill-bar-item">
        <div class="skill-bar-header">
          <div class="skill-bar-name">
            <img :src="skill.logo" :alt="skill.name" class="skill-bar-icon" />
            <span>{{ skill.name }}</span>
          </div>
          <span class="skill-bar-score">{{ skill.score }}/10</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" :style="{ width: (skill.score / 10 * 100) + '%' }" />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const devicon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

const otherSkills = [
  { name: 'SCSS',       logo: devicon('sass'),        score: 7 },
  { name: 'PostgreSQL', logo: devicon('postgresql'),  score: 7 },
  { name: 'Supabase',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', score: 7 },
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.qual-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.75rem 1.5rem;
  box-shadow: var(--card-shadow);
  text-align: center;
}

.qual-card__icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.qual-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 0.75rem;
}

.qual-card__desc {
  font-size: 0.875rem;
  color: var(--text-body);
  line-height: 1.65;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.top-card {
  text-align: center;
  padding: 1.75rem 1.25rem;
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
  margin-bottom: 1rem;
}

.top-card__logos {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.logo-circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.logo-circle img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.top-card__name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 0.6rem;
}

.top-card__desc {
  font-size: 0.85rem;
  color: var(--text-body);
  line-height: 1.6;
  text-align: center;
}

/* ── Other skills bars ────────────────────────────── */
.other-skills-list {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.skill-bar-item {
  flex: 1 1 220px;
}

.skill-bar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.skill-bar-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-heading);
}

.skill-bar-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.skill-bar-score {
  font-size: 0.8rem;
  color: var(--text-body);
}

.skill-bar-track {
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

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .qual-grid,
  .top-skills-grid {
    grid-template-columns: 1fr;
  }

  .other-skills-list {
    flex-direction: column;
  }

  .skill-bar-item {
    flex: unset;
  }

  .logo-circle {
    width: 72px;
    height: 72px;
  }
}
</style>
