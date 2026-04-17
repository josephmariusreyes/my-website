<template>
  <div v-if="isReady">
    <HeroSection />
    <hr class="divider" />
    <section id="projects">
      <ProProjects />
    </section>
    <hr class="divider" />
    <section id="skills">
      <SkillsAndQualification />
    </section>
    <hr class="divider" />
    <section id="experience">
      <WorkExperience />
    </section>
    <!-- <hr class="divider" />
    <DemoProjects />
    <hr class="divider" /> -->
    <AppFooter />
  </div>
  <AppLoader v-else />
</template>

<script setup>
import { ref, onBeforeMount, onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import SkillsAndQualification from '../components/SkillsAndQualification.vue'
import WorkExperience from '../components/WorkExperience.vue'
import ProProjects from '../components/ProProjects.vue'
import DemoProjects from '../components/DemoProjects.vue'
import AppLoader from '../components/AppLoader.vue'
import AppFooter from '../components/AppFooter.vue'
import cvService from '../services/cvService'
import { useCvStore } from '../stores/cvStore'

const route = useRoute()
const cvStore = useCvStore()
const isReady = ref(false)

const scrollToHash = () => {
  const hash = route.hash
  if (hash) {
    const sectionId = hash.replace('#', '')
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

onBeforeMount(async () => {
  const data = await cvService.getCvInfo()
  if (data) {
    cvStore.setCvDetails(data)
    isReady.value = true
  }
})

// Scroll to hash after content is ready
watch(isReady, (ready) => {
  if (ready) {
    nextTick(() => {
      setTimeout(scrollToHash, 100)
    })
  }
})
</script>
