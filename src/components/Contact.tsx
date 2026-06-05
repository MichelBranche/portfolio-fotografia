import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portraitImage, site } from '../data/content'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.contact__block', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="contact" id="contatti">
      <div className="contact__inner">
        <div className="contact__intro contact__block">
          <img
            className="contact__avatar"
            src={portraitImage}
            alt={site.name}
            loading="lazy"
            width={88}
            height={88}
          />
          <div>
            <p className="section-label">Contatti</p>
            <h2 className="contact__title">Restiamo in contatto</h2>
          </div>
        </div>
        <div className="contact__groups contact__block">
          <div className="contact__group">
            <h3>Instagram</h3>
            <div className="contact__links">
              <a href={site.instagramUrl} target="_blank" rel="noreferrer">
                {site.instagram}
              </a>
              <a href={site.instagramArtUrl} target="_blank" rel="noreferrer">
                {site.instagramArt} — arte
              </a>
            </div>
          </div>
          <div className="contact__group">
            <h3>Email e telefono</h3>
            <div className="contact__links">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
