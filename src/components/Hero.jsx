import { useEffect, useState } from 'react'

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
  const [showEmail, setShowEmail] = useState(false)

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
      <div className="hero__intro">
        <p>
          Hi, I&apos;m an Agentic AI engineer who builds useful things, makes interfaces look nice,
          and occasionally declares a project almost done.
        </p>
        <p>
          Don&apos;t be surprised if I{' '}
          <button
            className="hero__inline-action"
            type="button"
            onClick={() => setShowEmail(true)}
          >
            cold email you
          </button>{' '}
          and ask about internships. I come prepared with a portfolio, a GitHub tab, and
          unreasonable optimism.
          {showEmail && (
            <span className="hero__email-reveal">
              <a href="mailto:royrajsekhar.is@gmail.com">royrajsekhar.is@gmail.com</a>
            </span>
          )}
        </p>
        <p>
          You can find time lapses of me not studying for hours at{' '}
          <a href="https://x.com/snapcallin" target="_blank" rel="noopener noreferrer">
            X (@snapcallin)
          </a>
          . Recently, I pledged to contribute to{' '}
          <a href="https://github.com/rajsekharrr" target="_blank" rel="noopener noreferrer">
            GitHub (@rajsekharrr)
          </a>{' '}
          every day, which is either discipline or a very public challenge.
        </p>
        <p>
          I don&apos;t have Instagram. I use{' '}
          <a href="https://linkedin.com/in/rajsekhar-roy" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          instead. It saves me from brainrot and somehow makes me put my phone down, istg.
        </p>
        <p>
          I like making AI handle the boring parts of work. These days, that means agents
          routing leads, drafting reports, searching messy knowledge bases, and keeping things
          moving without someone babysitting every step. LangGraph, LangChain, RAG, and a
          suspicious amount of debugging are usually involved.
        </p>
        <p>
          CSE (AI &amp; ML) undergrad at VIT Chennai, graduating in 2027.
        </p>
        <p>
          Hiring?{' '}
          <a
            className="hero__inline-action"
            href="mailto:royrajsekhar.is@gmail.com"
          >
            Reach out
          </a>
          . I&apos;d love to hear what you&apos;re building.
        </p>
      </div>
      <div className="hero__actions">
        <button
          className="hero__cta"
          type="button"
          onClick={() => document.querySelector('#projects')?.scrollIntoView({
            behavior: 'smooth',
          })}
        >
          See what I built
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