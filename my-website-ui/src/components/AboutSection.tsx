import { useEffect, useState } from 'react'
import { getAboutContent, type AboutContent } from '../services/contentApi'

function AboutSection() {
  const [content, setContent] = useState<AboutContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    getAboutContent()
      .then((data) => {
        if (isMounted) {
          setContent(data)
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Unable to load about content.')
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
      <div id="about" className="card about-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  if (error || !content) {
    return (
      <div id="about" className="card about-section">
        <div className="about-image">A</div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>{error ?? 'No content found.'}</p>
        </div>
      </div>
    )
  }

  return (
    <div id="about" className="card about-section">
      <div className="about-image">{content.title.charAt(0)}</div>
      <div className="about-content">
        <h2>I am Professional Full-Stack Software Engineer</h2>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="about-actions">
          <button className="btn-primary">My Project</button>
          <button className="btn-secondary">Download CV</button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
