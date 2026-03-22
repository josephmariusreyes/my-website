<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  { id: 1, title: 'MyCrm', image: '', description: '', url: '' },
  { id: 2, title: 'POC', image: '', description: '', url: '' },
]
</script>

<template>
  <section class="section-wrapper">
    <div class="row-header">
      <h2 class="section-title">Demo/Personal Projects</h2>
      <p class="row-subtitle">In my spare time, I build personal projects to explore new ideas, experiment with technologies, and further sharpen my development skills.</p>
    </div>

    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="card-slot"
      >
        <ProjectCard :title="project.title" :image="project.image" />
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
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
}

.card-slot {
  width: calc((100% - 2 * 1.25rem) / 3);
  max-width: 270px;
  box-sizing: border-box;
}
</style>
