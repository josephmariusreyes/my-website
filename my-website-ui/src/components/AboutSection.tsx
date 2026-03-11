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
      <section className="card">
        <h2>Loading...</h2>
      </section>
    )
  }

  if (error || !content) {
    return (
      <section className="card">
        <h2>About Me</h2>
        <p>{error ?? 'No content found.'}</p>
      </section>
    )
  }

  return (
    <section className="card">
      <h2>{content.title}</h2>
      {content.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  )
}

export default AboutSection
