import { useEffect, useState } from 'react'
import { getHeroContent, type HeroContent } from '../services/contentApi'

function HeroSection() {
  const [content, setContent] = useState<HeroContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    getHeroContent()
      .then((data) => {
        if (isMounted) {
          setContent(data)
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Unable to load hero content.')
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  if (isLoading) {
    return (
      <section className="hero card">
        <h1>Loading...</h1>
      </section>
    )
  }

  if (error || !content) {
    return (
      <section className="hero card">
        <h1>Joseph Marius Reyes</h1>
        <p>{error ?? 'No content found.'}</p>
      </section>
    )
  }

  return (
    <section className="hero card">
      <div className="profile-wrap" aria-label="Profile picture section">
        <div className="profile-photo">{content.initials}</div>
        <p className="photo-note">{content.photoNote}</p>
      </div>

      <div className="hero-content">
        <p className="eyebrow">{content.role}</p>
        <h1>{content.name}</h1>
        <p className="hero-summary">
          {content.summary}
        </p>
      </div>
    </section>
  )
}

export default HeroSection
