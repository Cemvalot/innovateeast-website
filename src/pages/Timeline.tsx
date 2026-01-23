import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Section from '../components/Section'

const Timeline = () => {
  return (
    <>
      <Helmet>
        <title>Χρονοδιάγραμμα | InnovateEast</title>
        <meta
          name="description"
          content="Χρονοδιάγραμμα του Διαγωνισμού Πράσινης & Γαλάζιας Καινοτομίας"
        />
      </Helmet>

      <div className="pt-16 md:pt-20">
        {/* Stage I - Ideas Generation */}
        <Section background="white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <p className="uppercase tracking-[0.2em] text-sm text-gray-600 mb-2">
                ΦΕΒΡΟΥΑΡΙΟΣ - ΙΟΥΝΙΟΣ 2024
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#1A4B7A]">
                Stage I · Ideas Generation
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-stretch">
              {/* Left - Event info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white py-10 px-6 text-center shadow-sm"
              >
                <p className="text-sm uppercase tracking-widest text-gray-700 mb-4">
                  Εναρκτήρια Εκδήλωση
                </p>
                <p className="text-3xl md:text-4xl font-extrabold text-[#4CAF50] mb-2">
                  5 ΜΑΡΤΙΟΥ
                </p>
                <p className="text-lg font-semibold text-[#4CAF50] mb-4">
                  17:00
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Αίθουσα Τεχνολογικού Πολιτιστικού Πάρκου Λαυρίου{' '}
                  <span className="text-[#4CAF50] font-semibold">“Επίπλευση”</span>
                </p>
              </motion.div>

              {/* Center - Submission deadline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#4CAF50] text-white py-10 px-6 flex flex-col items-center justify-center text-center"
              >
                <p className="uppercase tracking-[0.25em] text-xs md:text-sm mb-2">
                  Υποβολή προτάσεων έως
                </p>
                <p className="text-3xl md:text-4xl font-extrabold">
                  30 ΙΟΥΝΙΟΥ
                </p>
              </motion.div>

              {/* Right - Eligibility */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white py-10 px-6 shadow-sm"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                  Δυνατότητα συμμετοχής
                </h3>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li>• Ερευνητές/τριες</li>
                  <li>• Νέοι/ες Απόφοιτοι</li>
                  <li>• Φοιτητές/τριες</li>
                  <li>• Spin-off επιχειρήσεις</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Stage II - Ideas Maturity */}
        <Section background="gray">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <p className="uppercase tracking-[0.2em] text-sm text-gray-600 mb-2">
                ΙΟΥΝΙΟΣ 2024 - ΙΑΝΟΥΑΡΙΟΣ 2025
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A4B7A]">
                Stage II · Ideas Maturity
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center text-gray-800">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-8 px-4"
              >
                <p>Ανάπτυξη και ωρίμανση των ιδεών με τη βοήθεια μεντόρων.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="py-8 px-4"
              >
                <p>Συμμετοχή σε θεματικά workshops και εκπαιδευτικές δράσεις.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="py-8 px-4"
              >
                <p>Προετοιμασία για την τελική φάση αξιολόγησης.</p>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Stage III - Ideas Evaluation */}
        <Section background="white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-center"
            >
              <p className="uppercase tracking-[0.2em] text-sm text-gray-600 mb-2">
                ΦΕΒΡΟΥΑΡΙΟΣ - ΑΠΡΙΛΙΟΣ 2025
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A4B7A]">
                Stage III · Ideas Evaluation
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-center text-gray-800">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-8 px-4 bg-gray-50"
              >
                <p>Αξιολόγηση προτάσεων από την Επιτροπή.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="py-8 px-4 bg-gray-50"
              >
                <p>
                  Παρουσίαση των προτάσεων στα μέλη της Επιστημονικής Επιτροπής
                  Αξιολόγησης.
                </p>
              </motion.div>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}

export default Timeline
