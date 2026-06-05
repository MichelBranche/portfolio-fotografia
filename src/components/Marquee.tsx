import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

type MarqueeProps = {
  text: string
  direction?: 'ltr' | 'rtl'
  tone?: 'cream' | 'dark' | 'outline' | 'light'
}

export function Marquee({ text, direction = 'ltr', tone = 'cream' }: MarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const track = rootRef.current?.querySelector('.marquee__track')
      if (!track) return

      const distance = track.scrollWidth / 2
      const from = direction === 'ltr' ? 0 : -distance
      const to = direction === 'ltr' ? -distance : 0

      gsap.fromTo(
        track,
        { x: from },
        {
          x: to,
          duration: tone === 'outline' ? 22 : 32,
          ease: 'none',
          repeat: -1,
        },
      )
    },
    { scope: rootRef, dependencies: [direction, text, tone] },
  )

  const repeated = `${text} · `.repeat(6)

  return (
    <div ref={rootRef} className={`marquee marquee--${tone}`} aria-hidden="true">
      <div className="marquee__track">
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </div>
  )
}
