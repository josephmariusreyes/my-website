/**
 * UI Animation Utility
 * Provides reusable scroll-based animations using IntersectionObserver
 */

/**
 * Initializes scroll animations for elements matching the given selectors.
 * Adds a 'visible' class when elements enter the viewport.
 * 
 * @param {string} selectors - CSS selector string for target elements (e.g., '.card, .section, .item')
 * @param {Object} options - Optional configuration
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 * @param {string} options.visibleClass - Class to add when visible, default 'visible'
 * @param {boolean} options.once - If true, stop observing after element becomes visible (default true)
 * @returns {Function} Cleanup function to disconnect the observer
 */
export function initScrollAnimation(selectors, options = {}) {
  const {
    threshold = 0.1,
    visibleClass = 'visible',
    once = true
  } = options

  let observer = null

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          entry.target.classList.remove(visibleClass)
        }
      })
    },
    { threshold }
  )

  // Observe all elements matching the selectors
  const animatedElements = document.querySelectorAll(selectors)
  animatedElements.forEach((el) => observer.observe(el))

  // Return cleanup function
  return () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }
}
