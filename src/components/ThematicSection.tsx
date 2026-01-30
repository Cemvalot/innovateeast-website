import { motion } from 'framer-motion'

/**
 * Section with two containers: image (left) and text (right).
 * Image path: /images/about/section3hero.png
 */
const ThematicSection = () => {
  return (
    <section
      className="pt-6 md:pt-8 pb-0 bg-white"
      aria-label="Θεματικές ενότητες"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[380px] md:min-h-[450px] lg:min-h-[520px]">
        {/* Container 1: Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full min-h-[320px] md:min-h-[380px] lg:min-h-[440px] overflow-hidden bg-gray-100"
        >
          <img
            src="/images/about/section3hero.png"
            alt="Οι θεματικές ενότητες – εκδήλωση Innovate East"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
        </motion.div>

        {/* Container 2: Text – centered in container, text align left */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center items-center p-8 md:p-10 lg:p-14 xl:p-16 bg-white"
        >
          <div className="w-full max-w-xl text-left">
            <img
              src="/images/about/titleimage.png"
              alt="INNOVATE EAST"
              className="h-7 md:h-8 lg:h-9 w-auto object-contain object-left mb-7 md:mb-8"
            />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Στον 1ο Διαγωνισμό Πράσινης και Γαλάζιας Καινοτομίας της Μητρόπολης
              μπορούν να λάβουν μέρος υποψήφιοι από τις ακόλουθες κατηγορίες:
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ThematicSection
