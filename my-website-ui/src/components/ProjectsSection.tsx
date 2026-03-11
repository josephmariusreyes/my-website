import { useEffect, useState } from 'react'
import { getProjectsContent, type ProjectsContent } from '../services/contentApi'

function ProjectsSection() {
  const [content, setContent] = useState<ProjectsContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    getProjectsContent()
      .then((data) => {
        if (isMounted) {
          setContent(data)
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Unable to load projects content.')
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
        <h2>Projects I Have Created</h2>
        <p>{error ?? 'No content found.'}</p>
      </section>
    )
  }

  return (
    <section className="card">
      <h2>{content.title}</h2>
      <ul className="project-list">
        {content.items.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
