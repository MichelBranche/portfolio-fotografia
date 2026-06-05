import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { statement, site } from '../data/content'

gsap.registerPlugin(useGSAP, ScrollTrigger)

type StatementProps = {
  ready: boolean
}

export function Statement({ ready }: StatementProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!ready) return

      gsap.from('.statement__label', {
        y: 24,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })

      gsap.from('.statement__line', {
        y: '110%',
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.statement__hero',
          start: 'top 85%',
        },
      })

      gsap.from('.statement__body', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: '.statement__body',
          start: 'top 88%',
        },
      })
    },
    { scope: sectionRef, dependencies: [ready] },
  )

  return (
    <section ref={sectionRef} className="statement" id="perche">
      <p className="section-label statement__label">{statement.label}</p>

      <div className="statement__hero">
        <div className="statement__headline">
          <p className="statement__line-wrap">
            <span className="statement__line">{statement.headline}</span>
          </p>
          <p className="statement__line-wrap">
            <span className="statement__line statement__line--muted">{statement.subline}</span>
          </p>
        </div>

        <p className="statement__watermark" aria-hidden="true">
          ©{String(site.year).slice(-2)}
        </p>
      </div>

      <p className="statement__body">{statement.body}</p>
    </section>
  )
}
