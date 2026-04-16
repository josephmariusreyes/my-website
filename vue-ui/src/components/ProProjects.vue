<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { initScrollAnimation } from '@/services/uiAnimationUtil'
import ProjectCard from './ProjectCard.vue'
import dcDashboardImg from '@/assets/dc-dashboard.png'
import dwsImg from '@/assets/dws.png'
import auctionCenterImg from '@/assets/auction-center.png'
import dcChatImg from '@/assets/mobile-dc-chat-resize.png'
import nhtImg from '@/assets/nht.png'

let cleanupAnimation = null

onMounted(() => {
  cleanupAnimation = initScrollAnimation('.professional-projects')
})

onUnmounted(() => {
  if (cleanupAnimation) {
    cleanupAnimation()
  }
})

const projects = [
  { id: 1, title: 'North Hollywood Toyota', image: nhtImg, description: 'North Hollywood Toyota dealership website, supporting vehicle listings, customer inquiries, and service scheduling.', url: 'https://www.toyotaofhollywood.com/' },
  { id: 2, title: 'Dealer Center', image: dcDashboardImg, description: 'Dealership management platform used by automotive dealers to manage inventory, sales, financing, and customer records.', url: 'https://www.dealercenter.com/crm/#crm-dashboard' },
  { id: 3, title: 'Dealer Website', image: dwsImg, description: 'Is a platform that provides automotive dealerships with customizable websites designed to showcase vehicle inventory and capture customer leads.', url: 'https://www.dealercenter.com/dealer-websites/#dw-premium-pro' },
  { id: 4, title: 'Auction Center', image: auctionCenterImg, description: 'Is a platform within DealerCenter that allows automotive dealers to browse and purchase vehicles from multiple auction sources in one place', url: 'https://www.dealercenter.com/inventory-management/#im-auction-center' },
  { id: 5, title: 'DC Chat', image: dcChatImg, description: 'Is a messaging and communication tool built for automotive dealerships to interact with customers directly through their websites. It enables real-time conversations.', url: 'https://www.dealercenter.com/inventory-management/#im-auction-center' },
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
  <section class="section-wrapper professional-projects">
    <div class="row-header">
      <h2 class="section-title">Professional Projects</h2>
      <p class="row-subtitle">Here are some of the applications and projects I've worked on, developing and maintaining them throughout my professional career.</p>
    </div>

    <v-carousel
      height="auto"
      hide-delimiters
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
            :description="project.description"
            :url="project.url"
            class="slide-card"
          />
        </div>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<style scoped>
/* ── Scroll animations ────────────────────────────── */
.professional-projects {
  opacity: 0;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  -webkit-transition: opacity 0.6s ease-out, -webkit-transform 0.6s ease-out;
  transition: opacity 0.6s ease-out, -webkit-transform 0.6s ease-out;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out;
}

.professional-projects.visible {
  opacity: 1;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

.row-header {
  margin-bottom: 1.75rem;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #111827; /* Explicit color to prevent browser dark mode interference */
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
  color: #4b5563; /* Explicit color to prevent browser dark mode interference */
  font-size: 0.9rem;
  margin-top: 0.25rem;
  text-align: center;
}

.pro-carousel {
  border-radius: 12px;
  overflow: hidden;
}

.carousel-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  gap: 1rem;
  padding: 1rem 3rem;
}

/* Fallback for browsers without gap support */
@supports not (gap: 1rem) {
  .carousel-slide {
    margin: -0.5rem;
  }
  .carousel-slide > * {
    margin: 0.5rem;
  }
}

.slide-card {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 0;
  max-width: 270px;
}

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .carousel-slide {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }

  .slide-card {
    max-width: 100%;
    width: 100%;
  }

  .section-title {
    font-size: 1.3rem;
  }

  .row-subtitle {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .carousel-slide {
    padding: 0.75rem;
  }
}
</style>
