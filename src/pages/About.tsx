import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import SectionTitleHero from '../components/SectionTitleHero'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Σχετικά με το Διαγωνισμό | InnovateEast</title>
        <meta
          name="description"
          content="Μάθετε περισσότερα για τον 1ο Διαγωνισμό Πράσινης & Γαλάζιας Καινοτομίας της Μητρόπολης Μεσογαίας και Λαυρεωτικής"
        />
        <meta property="og:title" content="Σχετικά με το Διαγωνισμό | InnovateEast" />
        <meta
          property="og:description"
          content="Μάθετε περισσότερα για τον διαγωνισμό"
        />
      </Helmet>

      <div className="pt-16 md:pt-20">
        <SectionTitleHero />

        <Section background="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/about-breakwater.jpg"
                alt="Breakwater"
                loading="lazy"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Ο{' '}
                <span className="text-[#4CAF50] font-semibold">
                  Πράσινης και Γαλάζιας Καινοτομίας της Μητρόπολης Μεσογαίας και
                  Λαυρεωτικής
                </span>{' '}
                αποτελεί πρωτοβουλία που στοχεύει στην προώθηση της καινοτομίας
                και της επιχειρηματικότητας στον τομέα της πράσινης και γαλάζιας
                οικονομίας.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ο διαγωνισμός απευθύνεται σε ερευνητές, φοιτητές, επιχειρηματίες
                και νεοφυείς επιχειρήσεις που επιθυμούν να αναπτύξουν καινοτόμες
                ιδέες και λύσεις που συμβάλλουν στην αειφόρο ανάπτυξη και την
                προστασία του περιβάλλοντος.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Μέσω αυτής της πρωτοβουλίας, η Μητρόπολη Μεσογαίας και
                Λαυρεωτικής επιδιώκει να ενθαρρύνει την ανάπτυξη προτάσεων που
                συνδυάζουν την τεχνολογική καινοτομία με την περιβαλλοντική
                ευθύνη, δημιουργώντας ένα οικοσύστημα που υποστηρίζει την
                επιχειρηματική δραστηριότητα και την κοινωνική πρόοδο.
              </p>
            </motion.div>
          </div>
        </Section>
      </div>
    </>
  )
}

export default About
