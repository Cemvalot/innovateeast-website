import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CookiePreferences {
  essential: boolean
  marketing: boolean
  functional: boolean
  analytics: boolean
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always enabled
    marketing: false,
    functional: false,
    analytics: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    const savedPreferences = localStorage.getItem('cookiePreferences')
    
    if (!consent) {
      setIsVisible(true)
    }
    
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences)
        setPreferences({ ...preferences, ...parsed })
      } catch (e) {
        // Invalid JSON, use defaults
      }
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookiePreferences', JSON.stringify({
      essential: true,
      marketing: true,
      functional: true,
      analytics: true,
    }))
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    localStorage.setItem('cookiePreferences', JSON.stringify({
      essential: true,
      marketing: false,
      functional: false,
      analytics: false,
    }))
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleSaveSettings = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
    setShowSettings(false)
    setIsVisible(false)
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return // Can't disable essential
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  if (!isVisible && !showSettings) return null

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#4CAF50] text-white shadow-2xl pointer-events-none"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 pointer-events-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Text */}
                <div className="flex-1 text-sm md:text-base">
                  <p>
                    Χρησιμοποιούμε cookies στον ιστότοπό μας για να δούμε πώς
                    αλληλεπιδράτε με αυτόν. Αποδεχόμενοι, συμφωνείτε με τη χρήση
                    τέτοιων cookies από εμάς.{' '}
                    <a
                      href="/privacy"
                      className="underline font-semibold hover:text-gray-200"
                    >
                      Πολιτική Απορρήτου
                    </a>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors text-sm"
                  >
                    Ρυθμίσεις
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors text-sm"
                  >
                    Απόρριψη
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2 bg-white text-[#4CAF50] hover:bg-gray-100 rounded-lg font-semibold transition-colors text-sm"
                  >
                    Αποδοχή
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Cookie Settings Modal */}
      <AnimatePresence>
      {showSettings && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSettings(false)}
            className="fixed inset-0 bg-black/50 z-[60] pointer-events-auto"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 left-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-full md:max-w-2xl bg-white rounded-lg shadow-2xl z-[70] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Advanced Cookie Settings
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Essential Cookies */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    These cookies enable core functionality such as security,
                    verification of identity and network management. These
                    cookies can't be disabled.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-6 bg-[#4CAF50] rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-[#4CAF50]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Enable Marketing Cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    These cookies are used to track advertising effectiveness to
                    provide a more relevant service and deliver better ads to
                    suit your interests.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => togglePreference('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing
                        ? 'bg-[#4CAF50] justify-end'
                        : 'bg-gray-300 justify-start'
                    } px-1`}
                    aria-label="Toggle Marketing Cookies"
                  >
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      {preferences.marketing ? (
                        <svg
                          className="w-3 h-3 text-[#4CAF50]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Enable Functional Cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    These cookies collect data to remember choices users make to
                    improve and give a more personalised experience.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => togglePreference('functional')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.functional
                        ? 'bg-[#4CAF50] justify-end'
                        : 'bg-gray-300 justify-start'
                    } px-1`}
                    aria-label="Toggle Functional Cookies"
                  >
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      {preferences.functional ? (
                        <svg
                          className="w-3 h-3 text-[#4CAF50]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Enable Analytics Cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    These cookies help us to understand how visitors interact
                    with our website, discover errors and provide better overall
                    analytics.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button
                    onClick={() => togglePreference('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics
                        ? 'bg-[#4CAF50] justify-end'
                        : 'bg-gray-300 justify-start'
                    } px-1`}
                    aria-label="Toggle Analytics Cookies"
                  >
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      {preferences.analytics ? (
                        <svg
                          className="w-3 h-3 text-[#4CAF50]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-3 h-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t p-6 flex justify-end">
              <button
                onClick={handleSaveSettings}
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Save
              </button>
            </div>
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </>
  )
}

export default CookieConsent
