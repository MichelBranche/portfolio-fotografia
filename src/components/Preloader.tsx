import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { projects, site } from '../data/content'

gsap.registerPlugin(useGSAP)

type PreloaderProps = {
  onUnlock: () => void
  onComplete: () => void
}

const preloaderImages = projects.slice(0, 6).map((project) => project.image)
const wordmark = site.shortName.toUpperCase()

export function Preloader({ onUnlock, onComplete }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useGSAP(
    () => {
      const root = rootRef.current
      const counter = counterRef.current
      const imagesLayer = imagesRef.current

      if (!root || !counter || !imagesLayer) return

      const images = gsap.utils.toArray<HTMLImageElement>(
        imagesLayer.querySelectorAll('img'),
      )
      const letters = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll('.preloader__letter'),
      )

      gsap.set(images, { willChange: 'transform' })
      gsap.set(letters, { willChange: 'transform, opacity' })

      const intro = gsap.timeline({
        paused: true,
        defaults: { duration: 0.6, ease: 'power3.out', force3D: true },
        onStart: () => {
          imagesLayer.classList.remove('preloader__images--hidden')
          root.querySelector('.preloader__wordmark')?.classList.remove('preloader__wordmark--hidden')
        },
      })

      intro
        .fromTo(
          images,
          { scale: 0, rotate: 0 },
          {
            scale: 1,
            rotate: () => gsap.utils.random(-20, 20),
            stagger: { each: 0.2, from: 'start' },
          },
        )
        .fromTo(
          letters,
          { yPercent: 110 },
          { yPercent: 0, stagger: { each: 0.2, from: 'random' } },
          '<',
        )

      const counterState = { value: 0 }

      gsap
        .timeline({
          delay: 0.4,
          defaults: { force3D: true },
          onComplete: () => {
            gsap.set(images, { willChange: 'none' })
            gsap.set(letters, { willChange: 'none' })
          },
        })
        .call(() => intro.play())
        .to(counterState, {
          value: 100,
          duration: 3,
          ease: 'circ.inOut',
          onUpdate: () => {
            counter.textContent = String(Math.round(counterState.value)).padStart(3, '0')
          },
        })
        .to(
          counter,
          {
            yPercent: -100,
            autoAlpha: 0,
            duration: 1,
            ease: 'circ.inOut',
          },
          '<90%',
        )
        .to(
          letters,
          {
            yPercent: -120,
            duration: 1.2,
            ease: 'expo.inOut',
            stagger: { each: 0.08, from: 'random' },
          },
          '<',
        )
        .to(
          images,
          {
            scale: 0,
            rotate: () => gsap.utils.random(-20, 20),
            duration: 0.6,
            ease: 'expo.inOut',
            stagger: { each: 0.1, from: 'end' },
          },
          '<',
        )
        .to(
          root,
          {
            clipPath: 'inset(0% 0% 100% 0%)',
            duration: 1.4,
            ease: 'power2.inOut',
          },
          '<30%',
        )
        .call(
          () => {
            document.documentElement.classList.add('loaded')
            onUnlock()
          },
          undefined,
          '<50%',
        )
        .call(() => onComplete())
    },
    { scope: rootRef },
  )

  return (
    <div
      ref={rootRef}
      className="preloader"
      aria-hidden="true"
      style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
    >
      <div className="preloader__stage">
        <div
          ref={imagesRef}
          className="preloader__images preloader__images--hidden"
        >
          {preloaderImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              className="preloader__image"
              loading="eager"
              decoding="async"
              style={{ zIndex: index + 1 }}
            />
          ))}
        </div>

        <div className="preloader__wordmark preloader__wordmark--hidden">
          {wordmark.split('').map((char, index) => (
            <span key={`${char}-${index}`} className="preloader__letter-mask">
              <span className="preloader__letter">{char}</span>
            </span>
          ))}
        </div>

        <div className="preloader__counter-wrap">
          <span ref={counterRef} className="preloader__counter">
            000
          </span>
        </div>
      </div>
    </div>
  )
}
