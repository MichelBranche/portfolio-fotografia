import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { projects, site, navLinks } from '../data/content'

gsap.registerPlugin(useGSAP)

type HeaderProps = {
  visible: boolean
}

const promoText = `${String(projects.length).padStart(2, '0')} PROGETTI · RUBINA STRADELLA · PORTFOLIO ${site.year}`

export function Header({ visible }: HeaderProps) {
  const shellRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useGSAP(
    () => {
      if (!visible) return

      const track = shellRef.current?.querySelector('.site-promo__track')
      if (!track) return

      const distance = track.scrollWidth / 2
      gsap.fromTo(
        track,
        { x: 0 },
        { x: -distance, duration: 24, ease: 'none', repeat: -1 },
      )
    },
    { scope: shellRef, dependencies: [visible] },
  )

  const initials = site.shortName.slice(0, 2).toUpperCase()
  const promoRepeated = `${promoText} · `.repeat(6)

  return (
    <div
      ref={shellRef}
      className={`site-shell ${visible ? 'is-visible' : ''} ${scrolled ? 'is-scrolled' : ''}`}
    >
      <div className="site-promo" aria-hidden="true">
        <div className="site-promo__track">
          <span>{promoRepeated}</span>
          <span>{promoRepeated}</span>
        </div>
      </div>

      <header className="site-header">
        <a href="#top" className="site-header__brand" aria-label={`${site.name} — home`}>
          {initials}
        </a>

        <nav className="site-header__nav" aria-label="Navigazione principale">
          {navLinks.map((link, index) => (
            <span key={link.href} className="site-header__item">
              {index > 0 ? (
                <span className="site-header__sep" aria-hidden="true">
                  ✦
                </span>
              ) : null}
              <a href={link.href} className="site-header__link">
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <div className="site-header__end">
          <a
            href={site.instagramUrl}
            className="site-header__link site-header__link--social"
            target="_blank"
            rel="noreferrer"
          >
            IG
          </a>
          <span className="site-header__count" aria-label={`${projects.length} progetti`}>
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </header>
    </div>
  )
}
