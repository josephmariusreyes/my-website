<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <article class="project-card">
    <div
      class="card-image"
      :style="image ? { backgroundImage: `url('${image}')` } : {}"
      role="img"
      :aria-label="title + ' preview'"
    />
    <div class="card-body">
      <p class="card-title">{{ title }}</p>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--card-shadow);
  background: var(--bg);
}

.card-image {
  height: 160px;
  background-color: #e5e7eb;
  background-size: cover;
  background-position: center;
}

.card-body {
  padding: 0.85rem 1rem;
  text-align: center;
}

.card-title {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-heading);
}
</style>
