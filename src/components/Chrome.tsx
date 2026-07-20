import { contact } from '../data/services'
import { useScrollProgress } from '../hooks/useScrollProgress'

export function Header() {
  return (
    <header className="site-header">
      <div className="logo-mark">ORO</div>
      <nav className="header-nav">
        <a href={`tel:${contact.phone.replace(/\D/g, '')}`}>{contact.phone}</a>
      </nav>
    </header>
  )
}

export function Footer() {
  const progress = useScrollProgress()
  const visible = progress > 0.88

  return (
    <footer
      className="site-footer"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="footer-inner">
        <div>
          <p className="footer-brand">ORO</p>
          <p className="footer-tagline">One crew. Every job.</p>
        </div>
        <div className="footer-links">
          <a href={`tel:${contact.phone.replace(/\D/g, '')}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.location}</span>
        </div>
        <p className="footer-services">
          Paint &amp; Body · Mechanic · Roadside · Hotshotting · Welding ·
          Landscaping · Pressure Washing · Construction · Handyman · Drafting
        </p>
      </div>
    </footer>
  )
}
