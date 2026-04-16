<script setup>
import ProjectCard from './ProjectCard.vue'
import pocLogo from '../assets/poc-logo.png'

const projects = [
  // { id: 1, title: 'MyCrm', image: '', description: '', url: '' },
  { id: 2, title: 'POC & Samples', image: pocLogo, description: 'Collection of mini projects I work on to test, practice and learn different techniques to improve the quality of my work.', url: '' },
]
</script>

<template>
  <section class="section-wrapper">
    <div class="row-header">
      <h2 class="section-title">Personal Projects</h2>
      <p class="row-subtitle">In my spare time, I build personal projects to explore new ideas, experiment with technologies, and further sharpen my development skills.</p>
    </div>

    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="card-slot"
      >
        <ProjectCard :title="project.title" :image="project.image" :description="project.description" :url="project.url" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.row-header {
  margin-bottom: 1.75rem;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 0.4rem;
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
  text-align: center;
}

.projects-grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 1.25rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

/* Fallback for browsers without gap support */
@supports not (gap: 1.25rem) {
  .projects-grid {
    margin: -0.625rem;
  }
  .projects-grid > * {
    margin: 0.625rem;
  }
}

.card-slot {
  width: calc((100% - 2 * 1.25rem) / 3);
  max-width: 270px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.card-slot :deep(.card-image) {
  background-size: cover;
}
</style>
