function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <div className="nav-logo">J</div>
        Joseph Reyes
      </div>
      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Contact</a>
    </nav>
  )
}

export default Navigation