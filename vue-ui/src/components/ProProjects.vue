<script setup>
import { computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

const projects = [
  { id: 1, title: 'North Hollywood Toyota', image: '', description: '', url: 'https://www.toyotaofhollywood.com/' },
  { id: 2, title: 'Dealer Center', image: '', description: '', url: 'https://www.dealercenter.com/' },
  { id: 3, title: 'Dealer Website', image: '', description: '', url: 'https://www.dealercenter.com/dealer-websites/#dw-premium-pro' },
  { id: 4, title: 'Auction Center', image: '', description: '', url: 'https://www.dealercenter.com/inventory-management/#im-auction-center' },
  { id: 5, title: 'DC Chat', image: '', description: '', url: 'https://www.dealercenter.com/inventory-management/#im-auction-center' },
]

const chunkSize = 3
const slides = computed(() => {
  const result = []
  for (let i = 0; i < projects.length; i += chunkSize) {
    result.push(projects.slice(i, i + chunkSize))
  }
  return result
})
</script>

<template>
  <section class="section-wrapper">
    <div class="row-header">
      <h2 class="section-title">Professional Projects</h2>
      <p class="row-subtitle">Here are some of the applications and projects I've worked on, developing and maintaining them throughout my professional career.</p>
    </div>

    <v-carousel
      height="auto"
      hide-delimiter-background
      show-arrows="hover"
      class="pro-carousel"
    >
      <v-carousel-item
        v-for="(slide, slideIndex) in slides"
        :key="slideIndex"
      >
        <div class="carousel-slide">
          <ProjectCard
            v-for="project in slide"
            :key="project.id"
            :title="project.title"
            :image="project.image"
            class="slide-card"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
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

.pro-carousel {
  border-radius: 12px;
  overflow: hidden;
}

.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  padding: 1rem 3rem;
}

.slide-card {
  flex: 1;
  min-width: 0;
  max-width: 270px;
}
</style>
