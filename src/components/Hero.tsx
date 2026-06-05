import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroAside, site } from '../data/content'

gsap.registerPlugin(useGSAP)

type HeroProps = {
  ready: boolean
}

export function Hero({ ready }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [firstName, lastName] = site.name.split(' ')

  useGSAP(
    () => {
      if (!ready) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero__frame', {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1,
        ease: 'power2.inOut',
      })
        .from(
          '.hero__mega-line',
          { yPercent: 110, duration: 0.95, stagger: 0.08 },
          '-=0.5',
        )
        .from(
          '.hero__aside-line',
          { yPercent: 120, duration: 0.7, stagger: 0.04 },
          '-=0.55',
        )
    },
    { scope: sectionRef, dependencies: [ready] },
  )

  return (
    <section ref={sectionRef} className="hero" id="top">
      <div className="hero__frame">
        <div className="hero__stage">
          <div className="hero__logo-wrap">
            <h1 className="hero__mega-title" aria-label={site.name}>
              <span className="hero__mega-line hero__mega-line--name">{firstName}</span>
              <aside className="hero__aside" aria-label={site.tagline}>
                {heroAside.map((line) => (
                  <span key={line} className="hero__aside-line">
                    {line}
                  </span>
                ))}
              </aside>
              <span className="hero__mega-line hero__mega-line--surname">{lastName}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
