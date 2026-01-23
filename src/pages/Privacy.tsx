import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Section from '../components/Section'

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Πολιτική Απορρήτου | InnovateEast</title>
        <meta
          name="description"
          content="Πολιτική απορρήτου και πληροφορίες σχετικά με τη χρήση cookies στο InnovateEast."
        />
      </Helmet>

      <div className="pt-16 md:pt-20">
        <Section background="white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Πολιτική Απορρήτου
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Η παρούσα σελίδα περιγράφει τον τρόπο με τον οποίο ο Διαγωνισμός
              InnovateEast επεξεργάζεται και προστατεύει τα προσωπικά σας
              δεδομένα, καθώς και τις επιλογές σας σχετικά με τη χρήση cookies.
            </p>
            <p className="text-sm text-gray-500">
              (Εισάγετε εδώ το πλήρες κείμενο της πολιτικής απορρήτου σας.) Το
              κείμενο αυτό μπορεί να περιλαμβάνει πληροφορίες για τον
              υπεύθυνο επεξεργασίας, τα δικαιώματά σας, τους σκοπούς
              επεξεργασίας, τη νομική βάση, τον χρόνο τήρησης των δεδομένων
              καθώς και στοιχεία επικοινωνίας.
            </p>
          </motion.div>
        </Section>
      </div>
    </>
  )
}

export default Privacy

