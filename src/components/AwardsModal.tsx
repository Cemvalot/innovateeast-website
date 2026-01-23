import { AnimatePresence, motion } from 'framer-motion'

interface AwardsModalProps {
  onClose: () => void
}

const AwardsModal = ({ onClose }: AwardsModalProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60"
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl mx-4 bg-white shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-700 hover:bg-white"
            aria-label="Close save the date modal"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content - layout mimicking the provided design */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side text */}
            <div className="px-8 py-10 md:py-12 bg-white">
              <div className="mb-8">
                <img
                  src="/logo.svg"
                  alt="Innovate East"
                  className="h-10 w-auto mb-4"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 font-semibold tracking-tight">
                <p className="text-3xl md:text-4xl text-gray-900 leading-none">
                  SAVE
                </p>
                <p className="text-3xl md:text-4xl text-gray-900 leading-none">
                  THE
                </p>
                <p className="text-3xl md:text-4xl text-gray-900 leading-none mb-4">
                  DATE
                </p>
                <p className="text-2xl md:text-3xl text-[#4CAF50] leading-none">
                  THE
                </p>
                <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#4CAF50] via-[#1A4B7A] to-[#1A4B7A] bg-clip-text text-transparent leading-none">
                  AWARDS
                </p>
              </div>
            </div>

            {/* Right side details */}
            <div className="px-8 py-10 md:py-12 bg-slate-50 relative">
              <div className="absolute inset-y-0 right-[-40%] w-[80%] rounded-full bg-gradient-to-b from-[#E0F2F1] to-[#E3F2FD] opacity-60 pointer-events-none" />

              <div className="relative space-y-4 text-right md:text-left">
                <p className="text-sm font-semibold text-[#1A4B7A] uppercase tracking-[0.2em]">
                  Τρίτη
                </p>
                <p className="text-3xl md:text-4xl font-extrabold text-[#1A4B7A]">
                  7 Οκτωβρίου 2025
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[#4CAF50]">
                  17:00
                </p>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mt-4">
                  Μεγάλη Αίθουσα, Κεντρικό Κτήριο ΕΚΠΑ
                  <br />
                  Πανεπιστημίου 30, Αθήνα
                </p>

                <p className="text-xs text-gray-600 mt-6">
                  (Εισάγετε εδώ, αν θέλετε, QR code ή σύνδεσμο για δήλωση
                  συμμετοχής, χρησιμοποιώντας εικόνα από τον φάκελο
                  <code className="mx-1 rounded bg-gray-200 px-1 py-0.5 text-[10px]">
                    /public
                  </code>
                  )
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AwardsModal

