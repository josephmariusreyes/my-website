import { useEffect, useState } from 'react'
import { getContactContent, type ContactContent } from '../services/contentApi'

function ContactSection() {
  const [content, setContent] = useState<ContactContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    getContactContent()
      .then((data) => {
        if (isMounted) {
          setContent(data)
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Unable to load contact content.')
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
      <div id="contact" className="card contact-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  if (error || !content) {
    return (
      <div id="contact" className="card contact-section">
        <h2>Contact Me</h2>
        <p>{error ?? 'No content found.'}</p>
      </div>
    )
  }

  return (
    <div id="contact" className="card contact-section">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        <div className="contact-item">
          <h4>{content.numberLabel}</h4>
          <p>{content.number}</p>
        </div>
        <div className="contact-item">
          <h4>{content.emailLabel}</h4>
          <p>{content.email}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
