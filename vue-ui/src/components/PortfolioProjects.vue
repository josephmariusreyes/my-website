<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  { id: 1, title: 'Portfolio Website', image: '' },
  { id: 2, title: 'E-Commerce App', image: '' },
  { id: 3, title: 'Task Manager', image: '' },
]
</script>

<template>
  <section class="section-wrapper">
    <h2 class="section-title">Portfolio Projects</h2>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :image="project.image"
      />
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 601px) and (max-width: 780px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
