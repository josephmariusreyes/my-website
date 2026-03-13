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
      <div id="home" className="card hero">
        <div className="hero-content">
          <div className="loading">Loading...</div>
        </div>
        <div className="profile-image">JR</div>
      </div>
    )
  }

  if (error || !content) {
    return (
      <div id="home" className="card hero">
        <div className="hero-content">
          <h1>Hello, I'm<br />Joseph Marius Reyes</h1>
          <p className="subtitle">{error ?? 'No content found.'}</p>
        </div>
        <div className="profile-image">JR</div>
      </div>
    )
  }

  return (
    <div id="home" className="card hero">
      <div className="hero-content">
        <h1>Hello, I'm<br />Joseph Marius Reyes</h1>
        <p className="subtitle">
          {content.summary}
        </p>
        <button className="hero-btn">Say Hello</button>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">4 Y.</span>
            <span className="stat-label">Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>
      <div className="profile-image">{content.initials}</div>
    </div>
  )
}

export default HeroSection
