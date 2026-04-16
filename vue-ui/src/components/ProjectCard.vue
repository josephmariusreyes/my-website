<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <a
    class="project-card"
    :href="url || undefined"
    :target="url ? '_blank' : undefined"
    rel="noopener noreferrer"
  >
    <div
      class="card-image"
      :style="image ? { backgroundImage: `url('${image}')` } : {}"
      role="img"
      :aria-label="title + ' preview'"
    />
    <div class="card-body">
      <p class="card-title">{{ title }}</p>
      <p v-if="description" class="card-description">{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>
.project-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  -webkit-box-shadow: var(--card-shadow);
  box-shadow: var(--card-shadow);
  background: var(--bg);
  display: block;
  text-decoration: none;
  color: inherit;
}

.project-card[href] {
  cursor: pointer;
}

.card-image {
  height: 160px;
  background-color: #e5e7eb;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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

.card-description {
  font-size: 0.75rem;
  color: var(--text-body);
  line-height: 1.4;
  text-align: left;
}

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .card-image {
    height: 140px;
  }

  .card-body {
    padding: 0.75rem;
  }

  .card-title {
    font-size: 0.85rem;
  }

  .card-description {
    font-size: 0.7rem;
  }
}
</style>
