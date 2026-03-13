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
      <div id="portfolio" className="card projects-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  if (error || !content) {
    return (
      <div id="portfolio" className="card projects-section">
        <h2>Projects</h2>
        <p>{error ?? 'No content found.'}</p>
      </div>
    )
  }

  return (
    <div id="portfolio" className="card projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {content.items.map((project, index) => (
          <div key={index} className="project-card">
            {project}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection
