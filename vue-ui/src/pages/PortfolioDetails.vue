<template>
  <div class="portfolio-details">
    <h1>Portfolio Details</h1>
    <p>ID: {{ id }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<style scoped>
.portfolio-details {
  padding: 2rem;
}
</style>
