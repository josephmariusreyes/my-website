export type HeroContent = {
  role: string
  name: string
  summary: string
  initials: string
  photoNote: string
}

export type AboutContent = {
  title: string
  paragraphs: string[]
}

export type WorkExperienceItem = {
  role: string
  company: string
  duration: string
  location?: string
  description: string
}

export type WorkExperienceContent = {
  title: string
  items: WorkExperienceItem[]
}

export type ProjectsContent = {
  title: string
  items: string[]
}

export type ContactContent = {
  title: string
  numberLabel: string
  number: string
  emailLabel: string
  email: string
}

type ContentResponse = {
  hero: HeroContent
  about: AboutContent
  workExperience: WorkExperienceContent
  projects: ProjectsContent
  contact: ContactContent
}

const delay = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms)
  })

async function fetchContent(): Promise<ContentResponse> {
  const response = await fetch('/content.json')

  if (!response.ok) {
    throw new Error('Failed to load content.json')
  }

  await delay(600)

  return await response.json()
}

export async function getHeroContent(): Promise<HeroContent> {
  const data = await fetchContent()
  return data.hero
}

export async function getAboutContent(): Promise<AboutContent> {
  const data = await fetchContent()
  return data.about
}

export async function getWorkExperienceContent(): Promise<WorkExperienceContent> {
  const data = await fetchContent()
  return data.workExperience
}

export async function getProjectsContent(): Promise<ProjectsContent> {
  const data = await fetchContent()
  return data.projects
}

export async function getContactContent(): Promise<ContactContent> {
  const data = await fetchContent()
  return data.contact
}
