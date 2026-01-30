import { motion } from 'framer-motion'

interface SectionTitleHeroProps {
  title?: string
  className?: string
}

/**
 * Full-width white section with a single centered heading.
 * Matches the design: white background, bold blue-purple title, large type.
 */
const SectionTitleHero = ({ title = 'ΣΧΕΤΙΚΑ ΜΕ ΤΟ ΔΙΑΓΩΝΙΣΜΟ', className = '' }: SectionTitleHeroProps) => {
  return (
    <section
      className={`bg-white py-12 md:py-16 lg:py-20 ${className}`}
      aria-label={title}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-[#333399]">
          {title}
        </h1>
      </motion.div>
    </section>
  )
}

export default SectionTitleHero
