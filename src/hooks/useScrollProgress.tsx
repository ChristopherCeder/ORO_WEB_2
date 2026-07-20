import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollState } from '../data/scrollState'

gsap.registerPlugin(ScrollTrigger)

interface ScrollContextValue {
  progress: number
  lenis: Lenis | null
}

const ScrollContext = createContext<ScrollContextValue>({
  progress: 0,
  lenis: null,
})

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0)
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    setLenis(instance)

    instance.on('scroll', ScrollTrigger.update)

    const ticker = (time: number) => {
      instance.raf(time * 1000)
    }
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    const trigger = ScrollTrigger.create({
      trigger: '#scroll-track',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: (self) => {
        scrollState.progress = self.progress
        setProgress(self.progress)
      },
    })

    return () => {
      trigger.kill()
      gsap.ticker.remove(ticker)
      instance.destroy()
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ progress, lenis }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScrollProgress() {
  return useContext(ScrollContext).progress
}

export function useLenis() {
  return useContext(ScrollContext).lenis
}
