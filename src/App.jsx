import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import GitHub from './components/GitHub'
import Hero from './components/Hero'
import Projects from './components/Projects'

const sectionTransition = {
  duration: 0.5,
  ease: 'easeOut',
}

function AnimatedSection({ children, id, sectionRef }) {
  return (
    <motion.section
      id={id}
      ref={sectionRef}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={sectionTransition}
    >
      {children}
    </motion.section>
  )
}

function App() {
  const heroRef = useRef(null)
  const [navVisible, setNavVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      const scrollableHeight = documentHeight - windowHeight
      const progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0

      setScrollProgress(progress)
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setNavVisible(!entry.isIntersecting),
      { threshold: 0.1 },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <nav className={`sticky-nav${navVisible ? ' nav-visible' : ''}`} aria-label="Primary navigation">
        <a href="#projects">Work</a>
        <a href="#github">GitHub</a>
        <a href="#experience">Experience</a>
        <a href="#footer">Contact</a>
      </nav>
      <main>
      <AnimatedSection id="hero" sectionRef={heroRef}><Hero /></AnimatedSection>
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Experience /></AnimatedSection>
      <AnimatedSection><Projects /></AnimatedSection>
      <AnimatedSection><GitHub /></AnimatedSection>
      <AnimatedSection><Footer /></AnimatedSection>
      </main>
    </>
  )
}

export default App
