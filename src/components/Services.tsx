import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../data/content'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.services__card', {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        scrollTrigger: {
          trigger: '.services__grid',
          start: 'top 80%',
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="services" id="servizi">
      <div className="services__head">
        <p className="section-label">Servizi</p>
        <h2>Come posso aiutarti</h2>
      </div>
      <div className="services__grid">
        {services.map((service, index) => (
          <article key={service.title} className="services__card">
            <span className="services__index">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
