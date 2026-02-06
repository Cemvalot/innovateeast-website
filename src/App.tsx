import { ComponentType, lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import AwardsModal from './components/AwardsModal'
import CookieConsent from './components/CookieConsent'
import Footer from './components/Footer'
import Header from './components/Header'
import LoadingSpinner from './components/LoadingSpinner'
import ScrollToTop from './components/ScrollToTop'
import StickySocialBar from './components/StickySocialBar'

// Lazy load routes for code splitting
const About = lazy(() => import('./pages/About') as Promise<{ default: ComponentType }>)
const Committees = lazy(() => import('./pages/Committees') as Promise<{ default: ComponentType }>)
const Competition = lazy(() => import('./pages/Competition') as Promise<{ default: ComponentType }>)
const Contact = lazy(() => import('./pages/Contact') as Promise<{ default: ComponentType }>)
const Home = lazy(() => import('./pages/Home') as Promise<{ default: ComponentType }>)
const News = lazy(() => import('./pages/News') as Promise<{ default: ComponentType }>)
const NewsDetail = lazy(() => import('./pages/NewsDetail') as Promise<{ default: ComponentType }>)
const Privacy = lazy(() => import('./pages/Privacy') as Promise<{ default: ComponentType }>)
const Terms = lazy(() => import('./pages/Terms') as Promise<{ default: ComponentType }>)
const Timeline = lazy(() => import('./pages/Timeline') as Promise<{ default: ComponentType }>)

function App() {
  const [showAwardsModal, setShowAwardsModal] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('awardsModalDismissed')
    if (!dismissed) {
      setShowAwardsModal(true)
    }
  }, [])

  const handleCloseAwards = () => {
    localStorage.setItem('awardsModalDismissed', 'true')
    setShowAwardsModal(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <StickySocialBar />
      {showAwardsModal && <AwardsModal onClose={handleCloseAwards} />}
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
      <Analytics />
    </div>
  )
}

export default App
