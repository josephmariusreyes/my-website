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
      <div id="experience" className="card experience-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  if (error || !content) {
    return (
      <div id="experience" className="card experience-section">
        <h2>Work Experience</h2>
        <p>{error ?? 'No content found.'}</p>
      </div>
    )
  }

  return (
    <div id="experience" className="card experience-section">
      <h2>Work Experience</h2>
      <div className="timeline">
        {content.items.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.role}</h3>
            <div className="timeline-meta">{item.company}</div>
            <div className="timeline-meta">{item.duration}</div>
            {item.location && <div className="timeline-meta">{item.location}</div>}
            <p className="timeline-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperienceSection
