<script setup>
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'

const currentIndex = ref(0)
const visibleCount = 3

const projects = [
  { id: 1, title: 'North Hollywood Toyota', image: '', description: '', url:'https://www.toyotaofhollywood.com/' },
  { id: 2, title: 'Dealer Center', image: '', description: '', url:'https://www.dealercenter.com/' },
  { id: 3, title: 'Dealer Website', image: '', description: '', url:'https://www.dealercenter.com/dealer-websites/#dw-premium-pro' },
  { id: 4, title: 'Auction Center', image: '', description: '', url:'https://www.dealercenter.com/inventory-management/#im-auction-center' },
  { id: 5, title: 'DC Chat', image: '', description: '', url:'https://www.dealercenter.com/inventory-management/#im-auction-center' },
]

// Track width = N/visibleCount * 100% of window.
// Each card = 100%/N of track = 100%/visibleCount of window.
// translateX step = 100%/N of track = exactly one card width.
const trackStyle = computed(() => ({
  width: `calc(100% * ${projects.length} / ${visibleCount})`,
  transform: `translateX(calc(-${currentIndex.value} * 100% / ${projects.length}))`,
}))

const cardStyle = { width: `calc(100% / ${projects.length})` }

function prev() {
  if (currentIndex.value > 0) currentIndex.value--
}

function next() {
  if (currentIndex.value + visibleCount < projects.length) currentIndex.value++
}</script>

<template>
  <section class="section-wrapper">
    <div class="row-header">
      <h2 class="section-title">Professional Projects</h2>
      <p class="row-subtitle">Here are some of the applications and projects I've worked on, developing and maintaining them throughout my professional career.</p>
    </div>

    <div class="carousel">
      <button class="carousel-btn" :disabled="currentIndex === 0" @click="prev" aria-label="Previous">
        &#8249;
      </button>

      <div class="carousel-window">
        <div class="carousel-track" :style="trackStyle">
          <div
            v-for="project in projects"
            :key="project.id"
            class="card-slot"
            :style="cardStyle"
          >
            <ProjectCard :title="project.title" :image="project.image" />
          </div>
        </div>
      </div>

      <button class="carousel-btn" :disabled="currentIndex + 3 >= projects.length" @click="next" aria-label="Next">
        &#8250;
      </button>
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

.carousel {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.carousel-btn {
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text-heading);
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s;
}

.carousel-btn:hover:not(:disabled) {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

.carousel-window {
  flex: 1;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card-slot {
  flex: none;
  box-sizing: border-box;
  padding-right: 1.25rem;
}

.card-slot:last-child {
  padding-right: 0;
}

@media (max-width: 600px) {
  .carousel {
    flex-direction: column;
  }
}
</style>
