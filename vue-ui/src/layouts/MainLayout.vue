<template>
  <div class="main-layout">
    <slot />
  </div>
</template>

<script setup>
</script>

<style scoped>
.main-layout {
  min-height: 100vh; /* Fallback */
  min-height: 100dvh;
}
</style>
