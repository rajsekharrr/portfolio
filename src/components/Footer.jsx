import { useEffect, useState } from 'react'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCheck,
  FaRegCopy,
  FaXTwitter,
} from 'react-icons/fa6'

function Footer() {
  const [emailCopied, setEmailCopied] = useState(false)
  const [activeVisitors, setActiveVisitors] = useState(null)
  const [totalVisitors, setTotalVisitors] = useState(null)
  const currentDate = new Date()
  const visitDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  })
  const visitTime = currentDate.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata',
  })

  useEffect(() => {
    let visitorId = window.localStorage.getItem('portfolio-visitor-id')

    if (!visitorId) {
      visitorId = window.crypto.randomUUID()
      window.localStorage.setItem('portfolio-visitor-id', visitorId)
    }

    let cancelled = false

    const updateVisitorCount = async () => {
      try {
        const response = await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitorId }),
        })

        if (!response.ok) {
          return
        }

        const data = await response.json()

        if (!cancelled) {
          setActiveVisitors(data.activeVisitors)
          setTotalVisitors(data.totalVisitors)
        }
      } catch (error) {
        console.error('Unable to load visitor count.', error)
      }
    }

    updateVisitorCount()
    const intervalId = window.setInterval(updateVisitorCount, 30_000)

    return () => {
      cancelled = true
      window.clearInterval(intervalId)
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('royrajsekhar.is@gmail.com')
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 1500)
    } catch (error) {
      console.error('Unable to copy email address.', error)
    }
  }

  const links = [
    { label: 'GitHub', href: 'https://github.com/rajsekharrr', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/rajsekhar-roy', icon: FaLinkedin },
    { label: 'X', href: 'https://x.com/snapcallin', icon: FaXTwitter },
    { label: 'Email', href: 'mailto:royrajsekhar.is@gmail.com', icon: FaEnvelope },
  ]

  return (
    <footer id="footer" className="footer">
      <p className="footer__name">Rajsekhar Singha Roy</p>
      <div className="footer__contact">
        <p className="section-label">CONTACT</p>
        <div className="footer__contact-row">
          <a href="mailto:royrajsekhar.is@gmail.com">royrajsekhar.is@gmail.com</a>
          <button
            className="footer__copy-button"
            type="button"
            onClick={copyEmail}
            aria-label={emailCopied ? 'Email copied' : 'Copy email address'}
          >
            {emailCopied ? <FaCheck /> : <FaRegCopy />}
          </button>
          <span aria-hidden="true">·</span>
          <a className="footer__phone" href="tel:+919988877689">
            +91 99888 77689
          </a>
        </div>
      </div>
      <nav className="footer__socials" aria-label="Footer social links">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            className="footer__icon-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            key={label}
          >
            <Icon />
          </a>
        ))}
      </nav>
      <p className="footer__copyright">© 2026 Rajsekhar Singha Roy</p>
      <div className="footer__signature">
        {activeVisitors !== null && (
          <p>
            {activeVisitors} {activeVisitors === 1 ? 'visitor' : 'visitors'} online
            {totalVisitors !== null && ` · ${totalVisitors} total`}
          </p>
        )}
        <p>{visitDate}</p>
        <p>{visitTime} GMT+5:30</p>
        <p>
          <a
            href="https://github.com/rajsekharrr/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            rajsekharrr/portfolio
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer