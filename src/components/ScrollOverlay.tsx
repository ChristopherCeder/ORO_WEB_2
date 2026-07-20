import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { chapters, contact } from '../data/services'
import { useScrollProgress } from '../hooks/useScrollProgress'

function chapterOpacity(progress: number, start: number, end: number): number {
  const fade = 0.04
  if (progress < start - fade || progress > end + fade) return 0
  if (progress < start) return (progress - (start - fade)) / fade
  if (progress > end) return 1 - (progress - end) / fade
  return 1
}

export function ScrollOverlay() {
  const progress = useScrollProgress()
  const [activeId, setActiveId] = useState(chapters[0].id)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const active = chapters.find(
      (c) => progress >= c.progressStart && progress <= c.progressEnd,
    )
    if (active && active.id !== activeId) {
      setActiveId(active.id)
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        )
      }
    }
  }, [progress, activeId])

  const chapter =
    chapters.find((c) => c.id === activeId) ?? chapters[0]
  const opacity = chapterOpacity(
    progress,
    chapter.progressStart,
    chapter.progressEnd,
  )

  return (
    <div
      className={`overlay-root${progress > 0.85 ? ' near-end' : ''}`}
      aria-live="polite"
    >
      <div
        className="overlay-panel"
        ref={contentRef}
        style={{ opacity, pointerEvents: opacity > 0.3 ? 'auto' : 'none' }}
      >
        <p className="overlay-eyebrow">{chapter.eyebrow}</p>
        <h2 className="overlay-title">{chapter.title}</h2>
        <p className="overlay-body">{chapter.body}</p>
        {chapter.tags.length > 0 && (
          <ul className="overlay-tags">
            {chapter.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        {chapter.id === 'contact' && (
          <div className="overlay-cta">
            <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="cta-btn primary">
              Call {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="cta-btn">
              Email the crew
            </a>
          </div>
        )}
      </div>

      <div className="scroll-hint" style={{ opacity: progress < 0.04 ? 1 : 0 }}>
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>

      <div className="progress-rail" aria-hidden="true">
        <div className="progress-fill" style={{ height: `${progress * 100}%` }} />
      </div>
    </div>
  )
}
