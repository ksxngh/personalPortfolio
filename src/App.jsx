import { useEffect } from 'react'
import AnnouncementBanner from './components/AnnouncementBanner'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import FeatureBand from './sections/FeatureBand'
import Experience from './sections/Experience'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      <AnnouncementBanner />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <FeatureBand />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
