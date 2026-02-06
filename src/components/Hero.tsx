import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import VideoLogoBadge from './VideoLogoBadge'

/**
 * Hero Section Component - Split Screen Layout
 * 
 * Full-width split screen design:
 * - Left panel: Grey background (same as logo badge back layer) with logo badge
 * - Right panel: Blue background (#2f5f85) with title and CTA buttons (centered)
 * - 50/50 split on desktop, stacked on mobile
 * - min-height: 700px
 * - Padding-top to account for fixed header (pt-16 md:pt-20)
 */
const Hero = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
      
      {/* LEFT PANEL: Grey background (same as logo badge) with Logo Badge */}
      <div className="bg-[#F3F4F6] flex items-center justify-center order-1 lg:order-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VideoLogoBadge size={520} />
        </motion.div>
      </div>

      {/* RIGHT PANEL: Blue background with Title and Buttons */}
      <div className="bg-[#2f5f85] flex items-center justify-center order-2 lg:order-2">
        <div className="w-full max-w-[520px] px-8 text-white text-left">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Multi-line Title */}
            <h2 className="text-[40px] md:text-[44px] font-bold leading-tight">
              1ος Διαγωνισμός Πράσινης & Γαλάζιας Καινοτομίας της Μητρόπολης
              <br />
              Μεσογαίας και Λαυρεωτικής
            </h2>

            {/* Two Green CTA Buttons */}
            <div className="mt-12 flex flex-col gap-6">
              {/* Button 1: ΟΡΟΙ ΣΥΜΜΕΤΟΧΗΣ */}
              <motion.a 
                href="https://383534e7-7332-4e0f-8956-daa42e69494b.filesusr.com/ugd/100ec9_5feae83082ab445eb5a9ab69002b5264.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-fit h-[54px] px-12 rounded-none bg-[#8BBA89] text-white text-sm font-normal tracking-wide transition-all group flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'linear-gradient(to right, #8BBA89, #8BBA89)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #3A7A8C, #4FB3A8)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #8BBA89, #8BBA89)'
                }}
                onClick={(e) => {
                  console.log('Hero button clicked!')
                  // Let target="_blank" handle opening in new tab
                  // No preventDefault needed - browser will handle it naturally
                }}
              >
                ΟΡΟΙ ΣΥΜΜΕΤΟΧΗΣ
              </motion.a>
              
              {/* Button 2: ΧΡΟΝΟΔΙΑΓΡΑΜΜΑ */}
              <Link to="/timeline" className="block w-fit">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-[54px] px-12 rounded-none bg-[#8BBA89] text-white text-sm font-normal tracking-wide transition-all group"
                  style={{
                    background: 'linear-gradient(to right, #8BBA89, #8BBA89)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #3A7A8C, #4FB3A8)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #8BBA89, #8BBA89)'
                  }}
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
