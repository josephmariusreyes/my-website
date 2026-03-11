import { useEffect, useState } from 'react'
import { getWorkExperienceContent, type WorkExperienceContent } from '../services/contentApi'

function WorkExperienceSection() {
  const [content, setContent] = useState<WorkExperienceContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    getWorkExperienceContent()
      .then((data) => {
        if (isMounted) {
          setContent(data)
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Unable to load work experience content.')
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
        <h2>Work Experience</h2>
        <p>{error ?? 'No content found.'}</p>
      </section>
    )
  }

  return (
    <section className="card">
      <h2>{content.title}</h2>
      <div className="timeline">
        {content.items.map((item, index) => (
          <article key={index} className="timeline-item">
            <h3>{item.role}</h3>
            <p className="meta">{item.company}</p>
            <p className="meta">{item.duration}</p>
            {item.location && <p className="meta">{item.location}</p>}
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkExperienceSection
