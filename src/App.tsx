import { useEffect, useState } from 'react'
import { Experience } from './components/Experience'
import { ScrollOverlay } from './components/ScrollOverlay'
import { Footer, Header } from './components/Chrome'
import { ScrollProvider } from './hooks/useScrollProgress'

function LoadingScreen({ visible }: { visible: boolean }) {
  return (
    <div className={`loading-screen ${visible ? 'visible' : 'hidden'}`}>
      <div className="loading-inner">
        <p className="loading-logo">ORO</p>
        <p className="loading-text">Loading the property…</p>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)
  const [fadeLoader, setFadeLoader] = useState(true)

  useEffect(() => {
    if (!ready) return
    const t = setTimeout(() => setFadeLoader(false), 600)
    return () => clearTimeout(t)
  }, [ready])

  return (
    <ScrollProvider>
      <LoadingScreen visible={fadeLoader} />
      <div className="canvas-layer">
        <Experience onReady={() => setReady(true)} />
      </div>
      <Header />
      <ScrollOverlay />
      <div id="scroll-track" className="scroll-track" />
      <Footer />
    </ScrollProvider>
  )
}
