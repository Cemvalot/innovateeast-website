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

      <div className="pt-0">
        {/* FAQ Section */}
        <Section background="white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="space-y-0 w-full">
              {faqItems.map((item) => {
                const isOpen = item.id === openId
                return (
                  <div key={item.id} className="overflow-hidden w-full">
                    <div className="w-full flex flex-col items-stretch">
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-center justify-between gap-2 py-5 md:py-6 text-left hover:bg-gray-50/50 transition-colors rounded-lg px-0"
                      >
                        <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A4B7A] min-w-0">
                          {item.question}
                        </span>
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          <motion.span
                            initial={false}
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="text-[#1A4B7A] block"
                          >
                            <svg
                              className="w-6 h-6"
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
                        </span>
                      </button>
                      <div className="h-px bg-[#4CAF50] w-full shrink-0 mt-1 mb-3 md:mb-4" />
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
                            className="overflow-hidden w-full"
                          >
                            <div className="py-3 px-0">
                              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </Section>
      </div>
    </>
  )
}

export default Competition
