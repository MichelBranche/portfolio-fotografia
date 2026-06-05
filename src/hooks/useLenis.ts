import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (typeof value === 'number') {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: 'transform',
    })

    ScrollTrigger.refresh()

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof HTMLAnchorElement)) return

      const href = target.getAttribute('href')
      if (!href?.startsWith('#') || href.length < 2) return

      const element = document.querySelector(href)
      if (!(element instanceof HTMLElement)) return

      event.preventDefault()
      lenis.scrollTo(element, {
        offset: -parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue('--header-offset'),
        ) || -120,
      })
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      gsap.ticker.remove(tick)
      lenis.destroy()
      ScrollTrigger.scrollerProxy(document.documentElement, {})
      ScrollTrigger.refresh()
    }
  }, [enabled])
}
