<template>
  <div v-if="isReady">
    <HeroSection />
    <hr class="divider" />
    <SkillsAndQualification />
    <hr class="divider" />
    <WorkExperience />
    <hr class="divider" />
    <ProProjects />
    <!-- <hr class="divider" />
    <DemoProjects />
    <hr class="divider" /> -->
    <AppFooter />
  </div>
  <AppLoader v-else />
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import SkillsAndQualification from '../components/SkillsAndQualification.vue'
import WorkExperience from '../components/WorkExperience.vue'
import ProProjects from '../components/ProProjects.vue'
import DemoProjects from '../components/DemoProjects.vue'
import AppLoader from '../components/AppLoader.vue'
import AppFooter from '../components/AppFooter.vue'
import cvService from '../services/cvService'
import { useCvStore } from '../stores/cvStore'

const cvStore = useCvStore()
const isReady = ref(false)

onBeforeMount(async () => {
  const data = await cvService.getCvInfo()
  if (data) {
    cvStore.setCvDetails(data)
    isReady.value = true
  }
})
</script>
