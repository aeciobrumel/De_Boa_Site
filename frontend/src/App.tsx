import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { VideoSection } from './components/VideoSection'
import { Highlights } from './components/Highlights'
import { Features } from './components/Features'
import { Privacy } from './components/Privacy'
import { CtaDownload } from './components/CtaDownload'
import { SkipToContent } from './components/SkipToContent'
import { Screenshots } from './components/Screenshots'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SkipToContent />
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Highlights />
        <VideoSection />
        <Screenshots />
        <Features />
        <Privacy />
        <CtaDownload />
      </main>
      <Footer />
    </div>
  )
}

export default App
