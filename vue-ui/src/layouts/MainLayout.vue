<template>
  <div class="main-layout">
    <AppHeader />
    <slot />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<style scoped>
.main-layout {
  min-height: 100vh; /* Fallback */
  min-height: 100dvh;
}
</style>
