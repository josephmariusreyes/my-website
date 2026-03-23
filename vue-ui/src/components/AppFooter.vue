<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-name">Jeph Reyes - AI First FullStack Developer</p>

      <nav class="footer-links" aria-label="Footer navigation">
        <a href="https://www.linkedin.com/in/joseph-marius-reyes-4419131a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span class="footer-sep" aria-hidden="true">&bull;</span>
        <a href="https://github.com/josephmariusreyes" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span class="footer-sep" aria-hidden="true">&bull;</span>
        <a href="#" target="_blank" rel="noopener noreferrer">Upwork</a>
        <span class="footer-sep" aria-hidden="true">&bull;</span>
        <a href="#" target="_blank" rel="noopener noreferrer">OsDire</a>
        <span class="footer-sep" aria-hidden="true">&bull;</span>
      </nav>

      <p class="footer-copy">&copy; {{ year }} Jeph Reyes. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
  background: var(--bg);
  padding: 2rem 2.5rem;
  text-align: center;
  color: var(--text-body);
  font-size: 0.85rem;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}

.footer-name {
  font-weight: 600;
  color: var(--text-heading);
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links a {
  color: var(--primary);
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

.footer-sep {
  color: var(--border);
}

.footer-copy {
  opacity: 0.7;
}
</style>
