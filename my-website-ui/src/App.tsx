import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import WorkExperienceSection from './components/WorkExperienceSection'

function App() {
  return (
    <main className="portfolio">
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App
