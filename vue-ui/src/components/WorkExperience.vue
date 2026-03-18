<script setup>
const experiences = [
  {
    id: 1,
    role: 'Web Developer',
    company: 'Tech Solutions Inc.',
    period: '2019 - 2022',
    bullets: [
      'Developed and maintained various client websites',
      'Improved site performance, increasing load speed by 40%.',
    ],
  },
  {
    id: 2,
    role: 'Front-End Developer',
    company: 'Creative Agency',
    period: '2016 - 2019',
    bullets: [
      'Built interactive UI components and responsive designs',
      'Led a project that boosted user engagement by 30%.',
    ],
  },
]
</script>

<template>
  <section class="section-wrapper">
    <h2 class="section-title">Work Experience</h2>

    <div class="experience-list">
      <div v-for="exp in experiences" :key="exp.id" class="experience-item">
        <div class="experience-header">
          <span class="experience-role">{{ exp.role }}</span>
          <span class="experience-separator"> | </span>
          <span class="experience-company">{{ exp.company }}</span>
          <span class="experience-period">{{ exp.period }}</span>
        </div>
        <ul class="experience-bullets">
          <li v-for="(bullet, i) in exp.bullets" :key="i">{{ bullet }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.experience-header {
  margin-bottom: 0.55rem;
}

.experience-role,
.experience-company {
  font-weight: 700;
  color: var(--text-heading);
  font-size: 0.95rem;
}

.experience-separator {
  color: var(--text-body);
  margin: 0 0.15rem;
}

.experience-period {
  color: var(--text-body);
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

.experience-bullets {
  padding-left: 1.25rem;
}

.experience-bullets li {
  font-size: 0.92rem;
  color: var(--text-body);
  margin-bottom: 0.3rem;
}
</style>
