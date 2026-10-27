import { useState } from 'react'
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
          <span>+91 99888 77689</span>
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
        <p>You&apos;re the 6,481st visitor</p>
        <p>{visitDate}</p>
        <p>{visitTime} GMT+5:30</p>
        <p>
          Built by Rajsekhar Singha Roy. The source code is available on{' '}
          <a
            href="https://github.com/rajsekharrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer