import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-white pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Circular Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Circular Graphic */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {/* Left half - Greek chapel image */}
                <div className="absolute left-0 top-0 w-1/2 h-full">
                  <img
                    src="/hero-chapel.jpg"
                    alt="Greek chapel"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                {/* Right half - Circuit lines overlay */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-white flex items-center justify-center">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50 Q150 100 100 150 Q50 100 100 50"
                      stroke="#9CA3AF"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle cx="100" cy="50" r="4" fill="#9CA3AF" />
                    <circle cx="150" cy="100" r="4" fill="#9CA3AF" />
                    <circle cx="100" cy="150" r="4" fill="#9CA3AF" />
                    <circle cx="50" cy="100" r="4" fill="#9CA3AF" />
                  </svg>
                </div>
              </div>
            </div>

            {/* INNOVATE EAST Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center"
            >
              INNOVATE EAST
            </motion.h1>
          </motion.div>

          {/* Right Column - Dark Blue CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1A4B7A] rounded-lg p-8 md:p-12 text-white"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              1ος Διαγωνισμός Πράσινης & Γαλάζιας Καινοτομίας της Μητρόπολης
              Μεσογαίας και Λαυρεωτικής
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <Link
                to="/terms"
                className="block"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-[#4CAF50] text-white font-semibold rounded-lg hover:bg-[#45a049] transition-colors text-lg"
                >
                  ΟΡΟΙ ΣΥΜΜΕΤΟΧΗΣ
                </motion.button>
              </Link>
              <Link
                to="/timeline"
                className="block"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-[#4CAF50] text-white font-semibold rounded-lg hover:bg-[#45a049] transition-colors text-lg"
                >
                  ΧΡΟΝΟΔΙΑΓΡΑΜΜΑ
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
