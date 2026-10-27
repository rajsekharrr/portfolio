import { useEffect, useState } from 'react'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6'

const phrases = [
  'Agentic AI Engineer',
  'Multi-Agent Systems Builder',
  'RAG Pipeline Architect',
  'Full Stack + GenAI Engineer',
]

const profileImages = import.meta.glob('../assets/profile.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
})

function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    let delay = isDeleting ? 40 : 60

    if (!isDeleting && typedText === phrase) {
      delay = 2000
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false)
      setPhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length)
      return undefined
    }

    const timer = setTimeout(() => {
      setTypedText((currentText) => {
        if (isDeleting) {
          return phrase.slice(0, currentText.length - 1)
        }

        return phrase.slice(0, currentText.length + 1)
      })

      if (!isDeleting && typedText === phrase) {
        setIsDeleting(true)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [isDeleting, phraseIndex, typedText])

  const profileImage = profileImages['../assets/profile.jpg']

  return (
    <div className="hero">
      <div className="hero__blob hero__blob--top-left" aria-hidden="true" />
      <div className="hero__blob hero__blob--bottom-right" aria-hidden="true" />
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Rajsekhar Singha Roy portfolio introduction"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      {profileImage && (
        <img
          className="hero__profile"
          src={profileImage}
          alt="Rajsekhar Singha Roy"
        />
      )}
      <h1>Rajsekhar Singha Roy</h1>
      <p className="hero__role" aria-live="polite">
        <span>{typedText}</span>
        <span className="hero__cursor" aria-hidden="true">|</span>
      </p>
      <p className="hero__intro">
        Building autonomous AI systems that replace manual workflows.
        <br />
        VIT Chennai · Graduating July 2027
      </p>
      <nav className="hero__socials" aria-label="Social links">
        <a
          className="hero__icon-button"
          href="https://github.com/rajsekharrr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          className="hero__icon-button"
          href="https://linkedin.com/in/rajsekhar-roy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          className="hero__icon-button"
          href="https://x.com/snapcallin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          title="Not that X. The other one."
        >
          <FaXTwitter />
        </a>
        <a
          className="hero__icon-button"
          href="mailto:royrajsekhar.is@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </nav>
      <div className="hero__actions">
        <button
          className="hero__cta"
          type="button"
          onClick={() => document.querySelector('#projects')?.scrollIntoView({
            behavior: 'smooth',
          })}
        >
          View my work
        </button>
        <a
          className="hero__resume"
          href="https://drive.google.com/file/d/16IZIt_Ywv9HHt666mf1k4FO8jf0uVDDr/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View resume ↗
        </a>
      </div>
      <div className="hero__scroll-arrow" aria-hidden="true">↓</div>
    </div>
  )
}

export default Hero