import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { formatProjectMeta, projects } from '../data/content'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Work() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const active = projects[activeIndex]

  useGSAP(
    () => {
      const scroll = { once: true, toggleActions: 'play none none none' as const }

      gsap.from('.work__masthead > *', {
        y: 40,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.08,
        immediateRender: false,
        scrollTrigger: { trigger: '.work__masthead', start: 'top 85%', ...scroll },
      })

      gsap.from('.work__item', {
        y: 20,
        duration: 0.65,
        stagger: 0.05,
        ease: 'power3.out',
        immediateRender: false,
        clearProps: 'transform',
        scrollTrigger: { trigger: '.work__list', start: 'top 82%', ...scroll },
      })

      gsap.from('.work__preview', {
        y: 24,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: '.work__stage', start: 'top 80%', ...scroll },
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="work" id="lavori">
      <header className="work__masthead">
        <p className="section-label">Progetti</p>
        <div className="work__headline">
          <h2 className="work__heading">
            Selected
            <br />
            work
          </h2>
          <p className="work__count" aria-label={`${projects.length} progetti`}>
            {String(projects.length).padStart(2, '0')}
          </p>
        </div>
      </header>

      <div className="work__stage">
        <div className="work__list" role="list">
          {projects.map((project, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={project.slug}
                type="button"
                role="listitem"
                className={`work__item ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <span className="work__item-index">{project.id}</span>
                <span className="work__item-title">{project.title}</span>
                <span className="work__item-meta">{formatProjectMeta(project)}</span>
              </button>
            )
          })}
        </div>

        <aside className="work__preview" aria-live="polite">
          <div className="work__preview-frame">
            {projects.map((project, index) => (
              <img
                key={project.slug}
                src={project.image}
                alt=""
                className={`work__preview-img ${index === activeIndex ? 'is-visible' : ''}`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            ))}
          </div>

          <div className="work__preview-copy">
            <p className="work__preview-category">{active.category}</p>
            <h3 className="work__preview-title">{active.title}</h3>
            <p className="work__preview-summary">{active.summary}</p>
            <p className="work__preview-meta">{formatProjectMeta(active)}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
