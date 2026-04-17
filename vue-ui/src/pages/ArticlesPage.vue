<template>
  <div class="articles-page">
    <div class="articles-container">
      <h1>Articles</h1>
      <p class="articles-intro">Thoughts and tutorials on web development, DevOps, and software engineering.</p>
      
      <ul class="articles-list">
        <li v-for="article in articles" :key="article.id" class="article-item">
          <a :href="article.url" target="_blank" rel="noopener noreferrer">
            <h2 class="article-title">{{ article.title }}</h2>
            <p class="article-description">{{ article.description }}</p>
            <span class="article-date">{{ article.date }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const articles = [
  {
    id: 1,
    title: 'How I Deployed my containerized Laravel + Vue.js to DigitalOcean',
    description: 'A step-by-step guide on deploying a Docker containerized Laravel and Vue.js application to DigitalOcean droplets.',
    date: 'April 2026',
    url: 'https://www.notion.so/How-I-Deployed-my-containerized-Laravel-Vue-js-to-DigitalOcean-32d538e6884a808eba46c4ae23399a03'
  },
  {
    id: 2,
    title: 'Getting Started with Docker for PHP Developers',
    description: 'Learn the basics of containerization and how to set up a development environment using Docker for your PHP projects.',
    date: 'March 2026',
    url: 'https://www.notion.so/How-I-Deployed-my-containerized-Laravel-Vue-js-to-DigitalOcean-32d538e6884a808eba46c4ae23399a03'
  },
  {
    id: 3,
    title: 'Vue 3 Composition API Best Practices',
    description: 'Tips and patterns for writing clean, maintainable code with Vue 3 Composition API.',
    date: 'February 2026',
    url: 'https://www.notion.so/How-I-Deployed-my-containerized-Laravel-Vue-js-to-DigitalOcean-32d538e6884a808eba46c4ae23399a03'
  }
]
</script>

<style scoped>
.articles-page {
  min-height: 100vh;
  /* background: #f9fafb; */
  padding: 2rem 1rem;
}

.articles-container {
  max-width: 800px;
  margin: 0 auto;
}

.articles-container h1 {
  font-size: 2rem;
  color: #111827;
  margin-bottom: 0.5rem;
}

.articles-intro {
  color: #6b7280;
  margin-bottom: 2rem;
}

.articles-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-item {
  margin-bottom: 1rem;
}

.article-item a {
  display: block;
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #e5e7eb;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.article-item a:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: var(--primary, #2563eb);
}

.article-title {
  font-size: 1.25rem;
  color: #111827;
  margin: 0 0 0.5rem;
}

.article-description {
  color: #4b5563;
  font-size: 0.95rem;
  margin: 0 0 0.75rem;
  line-height: 1.5;
}

.article-date {
  font-size: 0.8rem;
  color: #9ca3af;
}

@media (max-width: 600px) {
  .articles-page {
    padding: 1rem;
  }

  .article-item a {
    padding: 1rem;
  }

  .article-title {
    font-size: 1.1rem;
  }
}
</style>
