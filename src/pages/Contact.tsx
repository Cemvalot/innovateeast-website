import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Section from '../components/Section'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Επικοινωνία | InnovateEast</title>
        <meta
          name="description"
          content="Επικοινωνήστε μαζί μας για ερωτήσεις σχετικά με τον διαγωνισμό"
        />
        <meta property="og:title" content="Επικοινωνία | InnovateEast" />
        <meta
          property="og:description"
          content="Επικοινωνήστε μαζί μας"
        />
      </Helmet>

      <div className="pt-16 md:pt-20">
        {/* Header */}
        <Section background="white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Επικοινωνία
            </h1>
            <p className="text-xl text-gray-600">
              Επικοινωνήστε μαζί μας για οποιαδήποτε ερώτηση
            </p>
          </motion.div>
        </Section>

        {/* Main layout */}
        <Section background="white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/contact-illustration.png"
                alt="Green and blue innovation illustration"
                className="w-full max-w-md mx-auto"
                loading="lazy"
              />
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-sm font-semibold tracking-widest text-[#1A4B7A] uppercase mb-2">
                  ΥΠΕΥΘΥΝΗ ΕΠΙΚΟΙΝΩΝΙΑΣ
                </h2>
                <p className="text-lg font-semibold text-gray-900">
                  Ασημίνα Αλτάνη
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-widest text-[#1A4B7A] uppercase mb-1">
                  Email
                </h3>
                <a
                  href="mailto:info@innovateeast.gr"
                  className="text-[#4CAF50] font-semibold hover:underline"
                >
                  info@innovateeast.gr
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-widest text-[#1A4B7A] uppercase mb-1">
                  ΤΗΛΕΦΩΝΟ ΕΠΙΚΟΙΝΩΝΙΑΣ
                </h3>
                <div className="space-y-1 text-[#4CAF50] font-semibold">
                  <p>+30 216 070 3626 - 301</p>
                  <p>+30 694 405 7587</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
      </div>
    </>
  )
}

export default Contact
