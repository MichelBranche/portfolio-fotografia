import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { aboutParagraphs, portraitImage, quote, site } from '../data/content'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.about__text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      gsap.from('.about__image', {
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__image',
          start: 'top 80%',
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="about" id="chi-sono">
      <div className="about__grid">
        <div className="about__copy">
          <p className="section-label">Chi sono</p>
          <h2 className="about__name">{site.name}</h2>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="about__text">
              {paragraph}
            </p>
          ))}
          <blockquote className="about__quote">
            <p>«{quote.text}»</p>
            <cite>{quote.author}</cite>
          </blockquote>
        </div>
        <figure className="about__image">
          <img src={portraitImage} alt={site.name} loading="lazy" />
        </figure>
      </div>
    </section>
  )
}
