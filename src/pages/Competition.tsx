import { Helmet } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'

interface FaqItem {
  id: number
  question: string
  answer: string | ReactNode
}

const firstFaqAnswer = (
  <div className="space-y-4 text-sm">
    <section>
      <h3 className="text-base font-semibold text-gray-900 mb-1.5">
        Πράσινη Καινοτομία
      </h3>
      <p className="text-gray-700 mb-2 leading-relaxed text-sm">
        Η ανάπτυξη της Πράσινης Οικονομίας και η αξιοποίηση πράσινων καινοτομιών
        αποτελεί πλέον παράγοντα ζωτικής σημασίας για τη διασφάλιση ενός βιώσιμου
        μέλλοντος. Στο πλαίσιο αυτό, ο διαγωνισμός καινοτομίας Innovate East, σας
        προσκαλεί να αναπτύξετε και να μοιραστείτε καινοτόμες ιδέες και λύσεις που θα
        συμβάλουν στην προώθηση της πράσινης ανάπτυξης και την επίτευξη των στόχων
        βιωσιμότητας. Ενδεικτικά ακολουθούν κάποιες από τις προκλήσεις της Πράσινης
        Καινοτομίας που θα μπορούσατε να εστιάσετε:
      </p>
      <ul className="list-disc list-inside space-y-0.5 text-gray-700 text-sm">
        <li>Κυκλική Οικονομία & Ορθολογική Διαχείριση Πόρων</li>
        <li>Θέματα Αγροδιατροφής</li>
        <li>Εξοικονόμηση Ενέργειας & ΑΠΕ</li>
        <li>Κοινωνικός Αντίκτυπος & Βιωσιμότητα</li>
        <li>Περιβάλλον και Υγειονομικές Συνέπειες</li>
      </ul>
    </section>
    <section>
      <h3 className="text-base font-semibold text-gray-900 mb-1.5">
        Γαλάζια Οικονομία
      </h3>
      <p className="text-gray-700 mb-2 leading-relaxed text-sm">
        Η Γαλάζια Οικονομία αποτελεί έναν από τους σημαντικότερους και πιο
        ανταγωνιστικούς τομείς οικονομικής ανάπτυξης σε παγκόσμιο επίπεδο. Ο
        Innovate East προσκαλεί τους υποψήφιους να υποβάλουν καινοτόμες ιδέες και
        λύσεις που προάγουν την αειφόρο ανάπτυξη των θαλάσσιων και παράκτιων
        περιοχών και εντάσσονται στο πλαίσιο της Γαλάζιας Καινοτομίας. Ενδεικτικά
        ακολουθούν κάποιες από τις προκλήσεις της Γαλάζιας Καινοτομίας:
      </p>
      <ul className="list-disc list-inside space-y-0.5 text-gray-700 text-sm">
        <li>Βιώσιμη Ναυτιλία & Μεταφορές</li>
        <li>Θαλάσσιος Τουρισμός</li>
        <li>Ασφάλεια & Περιβάλλον</li>
        <li>Γαλάζια Οικονομική και Κοινωνική Ανθεκτικότητα</li>
      </ul>
    </section>
  </div>
)

const secondFaqAnswer = (
  <ul className="list-disc list-inside space-y-0.5 text-gray-700 text-sm">
    <li>Φοιτητές/-τριες Ελληνικών και Ξένων Πανεπιστημίων</li>
    <li>Ερευνητές/-τριες</li>
    <li>Νέοι/-ες απόφοιτοι</li>
    <li>Υποψήφιοι/-ες διδάκτορες/-ισσες & Διδάκτορες/-ισσες</li>
    <li>Spin-off Επιχειρήσεις</li>
  </ul>
)

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'Ποιες είναι οι θεματικές;',
    answer: firstFaqAnswer,
  },
  {
    id: 2,
    question: 'Ποιος μπορεί να λάβει μέρος στον Διαγωνισμό;',
    answer: secondFaqAnswer,
  },
  {
    id: 3,
    question: 'Τι περιλαμβάνει η διαδικασία mentoring;',
    answer:
      'Στο πλαίσιο του Διαγωνισμού έχει διαμορφωθεί ένα διεπιστημονικό δίκτυο μεντόρων, αποτελούμενο από εμπειρογνώμονες και εξειδικευμένα στελέχη της αγοράς στις θεματικές του Διαγωνισμού. Με γνώμονα τη βελτίωση της ποιότητας των υποβληθεισών ιδέων, μετά την ολοκλήρωση της πρώτης αξιολόγησης του Διαγωνισμού, έχει προβλεφθεί οι προτάσεις που θα προκριθούν στο Stage II (Ideas Maturity), να υποστηριχθούν από κατάλληλους μέντορες. Οι μέντορες, θα προσφέρουν χρήσιμες πληροφορίες και συμβουλές για την περαιτέρω ανάπτυξη και ανάδειξη της κάθε επιχειρηματικής ιδέας, με απώτερο σκοπό την προετοιμασία παρουσίασης των ιδεών στην Επιτροπή Αξιολόγησης.',
  },
  {
    id: 4,
    question: 'Πώς θα γίνει το Evaluation;',
    answer:
      'Η Επιτροπή Αξιολόγησης αποτελείται από μέλη της ακαδημαϊκής κοινότητας, του επιχειρηματικού κόσμου αλλά και εμπειρογνώμονες στις θεματικές του Διαγωνισμού. Στο πλαίσιο της διαδικασίας αξιολόγησης, οι διαγωνιζόμενοι θα έχουν στη διάθεσή τους λίγα λεπτά για την παρουσίαση της ιδέας τους στα μέλη της Επιτροπής καθώς και κάποιο χρόνο να δεχτούν επιμέρους ερωτήσεις. Στη συνέχεια, η Επιτροπή θα αποφασίσει, με βάση αντικειμενικά κριτήρια αξιολόγησης, τις 3 νικητήριες Ιδεές του Διαγωνισμού.',
  },
  {
    id: 5,
    question: 'Ποια είναι τα κριτήρια αξιολόγησης;',
    answer: (
      <p>
        Τα κριτήρια αξιολόγησης περιγράφονται αναλυτικά στους{' '}
        <Link to="/terms" className="text-[#4CAF50] underline hover:opacity-90">
          Όρους Συμμετοχής
        </Link>{' '}
        του Διαγωνισμού.
      </p>
    ),
  },
  {
    id: 6,
    question: 'Πότε θα ανακοινωθούν οι νικητές;',
    answer:
      'Η ανακοίνωση των νικητών θα γίνει στην Τελετή Βράβευσης του Διαγωνισμού τον Οκτώβριο 2025.',
  },
  {
    id: 7,
    question: 'Ποια είναι τα βραβεία του Διαγωνισμού;',
    answer: (
      <ul className="list-none space-y-0.5 text-gray-700 text-sm">
        <li>1η Θέση 5.000€</li>
        <li>2η Θέση 3.000€</li>
        <li>3η Θέση 2.000€</li>
      </ul>
    ),
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
                            <div className="py-3 pb-5 px-0">
                              {typeof item.answer === 'string' ? (
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                  {item.answer}
                                </p>
                              ) : (
                                <div className="text-sm md:text-base text-gray-700 leading-relaxed">
                                  {item.answer}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="h-px bg-[#4CAF50] w-full shrink-0 mt-3 mb-3 md:mb-4" />
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
