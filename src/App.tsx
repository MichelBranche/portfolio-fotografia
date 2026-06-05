import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from './hooks/useLenis'
import { Preloader } from './components/Preloader'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Statement } from './components/Statement'
import { Marquee } from './components/Marquee'
import { Work } from './components/Work'
import { About } from './components/About'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { marqueeLines, marqueeOutfit } from './data/content'

gsap.registerPlugin(useGSAP)

function App() {
  const appRef = useRef<HTMLDivElement>(null)
  const [introUnlock, setIntroUnlock] = useState(false)
  const [preloaderDone, setPreloaderDone] = useState(false)
  useLenis(introUnlock)

  useEffect(() => {
    if (introUnlock) ScrollTrigger.refresh()
  }, [introUnlock])

  useGSAP(
    () => {
      if (!introUnlock) return
      gsap.from('.site-shell', {
        y: -16,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        ease: 'power2.out',
      })
    },
    { scope: appRef, dependencies: [introUnlock] },
  )

  return (
    <div ref={appRef} className="app">
      {!preloaderDone && (
        <Preloader
          onUnlock={() => setIntroUnlock(true)}
          onComplete={() => setPreloaderDone(true)}
        />
      )}
      <Header visible={introUnlock} />
      <main>
        <Hero ready={introUnlock} />
        <Marquee text={marqueeLines[0]} direction="ltr" tone="cream" />
        <Statement ready={introUnlock} />
        <Work />
        <Marquee text={marqueeLines[1]} direction="rtl" tone="dark" />
        <Marquee text={marqueeOutfit} direction="ltr" tone="outline" />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
