import { Helmet } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Section from '../components/Section'

interface FaqItem {
  id: number
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'Ποιες είναι οι θεματικές;',
    answer:
      'Οι θεματικές ενότητες του διαγωνισμού καλύπτουν τομείς της Πράσινης και Γαλάζιας Οικονομίας, όπως η ενέργεια, η κυκλική οικονομία, οι βιώσιμες μεταφορές και η προστασία των θαλάσσιων πόρων.',
  },
  {
    id: 2,
    question: 'Ποιος μπορεί να λάβει μέρος στον Διαγωνισμό;',
    answer:
      'Δικαίωμα συμμετοχής έχουν νέοι ερευνητές, φοιτητές, επιχειρηματικά σχήματα και νεοφυείς επιχειρήσεις (start-ups) με έδρα στην Ελλάδα ή το εξωτερικό.',
  },
  {
    id: 3,
    question: 'Τι περιλαμβάνει η διαδικασία mentoring;',
    answer:
      'Οι ομάδες που θα προκριθούν θα υποστηριχθούν από εξειδικευμένο δίκτυο μεντόρων, μέσω εξατομικευμένων συνεδριών και θεματικών εργαστηρίων.',
  },
  {
    id: 4,
    question: 'Πώς θα γίνει το Evaluation;',
    answer:
      'Η αξιολόγηση θα πραγματοποιηθεί σε διαδοχικά στάδια από την Επιστημονική και την Οργανωτική Επιτροπή, με βάση προκαθορισμένα κριτήρια.',
  },
  {
    id: 5,
    question: 'Ποια είναι τα κριτήρια αξιολόγησης;',
    answer:
      'Τα κύρια κριτήρια αφορούν τον βαθμό καινοτομίας, τον αντίκτυπο στην Πράσινη και Γαλάζια Οικονομία, τη βιωσιμότητα του επιχειρηματικού μοντέλου και τη δυνατότητα υλοποίησης.',
  },
  {
    id: 6,
    question: 'Πότε θα ανακοινωθούν οι νικητές;',
    answer:
      'Οι νικητές θα ανακοινωθούν στην Τελετή Βράβευσης που θα πραγματοποιηθεί μετά την ολοκλήρωση της φάσης αξιολόγησης.',
  },
  {
    id: 7,
    question: 'Ποια είναι τα βραβεία του Διαγωνισμού;',
    answer:
      'Θα απονεμηθούν χρηματικά βραβεία στις τρεις πρώτες προτάσεις, καθώς και υποστηρικτικές υπηρεσίες και πρόσβαση σε δίκτυο συνεργατών.',
  },
]

const Competition = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <>
      <Helmet>
        <title>Διαγωνισμός | InnovateEast</title>
        <meta
          name="description"
          content="Μάθετε περισσότερα για τον Διαγωνισμό Πράσινης & Γαλάζιας Καινοτομίας"
        />
      </Helmet>

      <div className="pt-16 md:pt-20">
        {/* FAQ Section */}
        <Section background="white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Διαγωνισμός
            </h1>

            <div className="space-y-1">
              {faqItems.map((item) => {
                const isOpen = item.id === openId
                return (
                  <div key={item.id} className="overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50/50 transition-colors rounded-lg px-2 -mx-2"
                    >
                      <span className="text-base md:text-lg font-semibold text-[#1A4B7A] pr-4">
                        {item.question}
                      </span>
                      <motion.span
                        initial={false}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="text-[#1A4B7A] flex-shrink-0"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.span>
                    </button>
                    <div className="h-px bg-[#4CAF50] mx-2" />
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                            height: { duration: 0.3 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="py-4 px-2">
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </Section>

        {/* Awards Section */}
        <Section background="white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left - Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Ανάδειξη των νικητήριων ιδεών
              </h2>
              <p className="text-lg text-gray-700">
                Οι νικητήριες ιδέες θα παρουσιαστούν και θα βραβευθούν στην
                Τελετή Βράβευσης, παρουσία εκπροσώπων της ακαδημαϊκής
                κοινότητας, της τοπικής αυτοδιοίκησης και του επιχειρηματικού
                κόσμου.
              </p>
            </motion.div>

            {/* Right - Awards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-right"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Βραβεία
              </h3>
              <ul className="space-y-2 text-lg font-semibold text-[#4CAF50]">
                <li>1η Θέση: 5.000 €</li>
                <li>2η Θέση: 3.000 €</li>
                <li>3η Θέση: 2.000 €</li>
              </ul>
            </motion.div>
          </div>
        </Section>
      </div>
    </>
  )
}

export default Competition
