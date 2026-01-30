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
        onClick={onClose}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 p-4"
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden rounded-lg"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 hover:bg-black/70 p-2 text-white transition-colors"
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

          {/* Poster Image */}
          <div className="relative w-full">
            <img
              src="/images/awards/SAVE THE DATE_Innovate East Awards.jpg"
              alt="INNOVATE EAST: THE AWARDS - Save the Date"
              className="w-full h-auto object-contain"
              loading="eager"
            />
            
            {/* Clickable registration link overlay on QR code area */}
            <a
              href="https://bit.ly/InnovateEastAwards"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 right-0 w-1/3 h-1/3 cursor-pointer"
              aria-label="Register for the awards ceremony"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AwardsModal

