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
  background: #ffffff; /* Explicit white to prevent browser dark mode interference */
  padding: 2rem 2.5rem;
  text-align: center;
  color: #4b5563; /* Explicit color to prevent browser dark mode interference */
  font-size: 0.85rem;
}

.footer-inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 0.6rem;
}

/* Fallback for browsers without gap support */
@supports not (gap: 0.6rem) {
  .footer-inner > * + * {
    margin-top: 0.6rem;
  }
}

.footer-name {
  font-weight: 600;
  color: #111827; /* Explicit color to prevent browser dark mode interference */
}

.footer-links {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 0.5rem;
}

/* Fallback for browsers without gap support */
@supports not (gap: 0.5rem) {
  .footer-links > * + * {
    margin-left: 0.5rem;
  }
}

.footer-links a {
  color: var(--primary);
  -webkit-transition: color 0.2s ease;
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

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .site-footer {
    padding: 1.5rem 1rem;
  }

  .footer-links {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    gap: 0.4rem;
  }

  .footer-name {
    font-size: 0.9rem;
  }

  .footer-copy {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .footer-sep {
    display: none;
  }

  .footer-links {
    gap: 0.75rem;
  }

  .footer-links a {
    display: block;
  }
}
</style>
