import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Section from '../components/Section'

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Όροι Συμμετοχής | InnovateEast</title>
        <meta
          name="description"
          content="Όροι και προϋποθέσεις συμμετοχής στον Διαγωνισμό"
        />
      </Helmet>

      <div className="pt-16 md:pt-20">
        <Section background="white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Όροι Συμμετοχής
            </h1>
            <p className="text-lg text-gray-600">
              Οι όροι και προϋποθέσεις συμμετοχής στον διαγωνισμό
            </p>
          </motion.div>
        </Section>
      </div>
    </>
  )
}

export default Terms
