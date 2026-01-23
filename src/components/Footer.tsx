import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Metropolis Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <img
              src="/metropolis-logo.svg"
              alt="ΙΕΡΑ ΜΗΤΡΟΠΟΛΙΣ ΜΕΣΟΓΑΙΑΣ ΚΑΙ ΛΑΥΡΕΩΤΙΚΗΣ"
              className="h-16 w-16 md:h-20 md:w-20"
              loading="lazy"
            />
            <p className="text-xs md:text-sm text-gray-600 max-w-xs text-center md:text-left">
              ΙΕΡΑ ΜΗΤΡΟΠΟΛΙΣ ΜΕΣΟΓΑΙΑΣ ΚΑΙ ΛΑΥΡΕΩΤΙΚΗΣ
            </p>
          </motion.div>

          {/* BREAK EVEN Consulting Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-end"
          >
            <img
              src="/break-even-logo.svg"
              alt="BREAK EVEN Consulting"
              className="h-12 w-auto mb-2"
              loading="lazy"
            />
            <p className="text-sm text-gray-600">BREAK EVEN Consulting</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
