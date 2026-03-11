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
      <section className="card contact-card">
        <h2>Loading...</h2>
      </section>
    )
  }

  if (error || !content) {
    return (
      <section className="card contact-card">
        <h2>Contact Me</h2>
        <p>{error ?? 'No content found.'}</p>
      </section>
    )
  }

  return (
    <section className="card contact-card">
      <h2>{content.title}</h2>
      <p>
        <span>{content.numberLabel}</span> {content.number}
      </p>
      <p>
        <span>{content.emailLabel}</span> {content.email}
      </p>
    </section>
  )
}

export default ContactSection
