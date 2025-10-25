import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { VideoSection } from './components/VideoSection'
import { Highlights } from './components/Highlights'
import { Features } from './components/Features'
import { Privacy } from './components/Privacy'
import { CtaDownload } from './components/CtaDownload'
import { SkipToContent } from './components/SkipToContent'

function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <SkipToContent />
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Highlights />
        <VideoSection />
        <Features />
        <Privacy />
        <CtaDownload />
      </main>
      <Footer />
    </div>
  )
}

export default App

