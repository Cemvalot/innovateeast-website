import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Section from '../components/Section'
import CategoryCard from '../components/CategoryCard'

const Home = () => {
  const categories = [
    {
      icon: (
        <svg
          className="w-full h-full"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5z" />
          <path d="M9.5 7C8.67 7 8 7.67 8 8.5S8.67 10 9.5 10 11 9.33 11 8.5 10.33 7 9.5 7z" />
        </svg>
      ),
      title:
        'Νέοι ερευνητές, υποψήφιοι διδάκτορες και διδάκτορες που επιθυμούν να εξελίξουν την επιχειρηματική τους ιδέα',
      color: 'blue' as const,
    },
    {
      icon: (
        <svg
          className="w-full h-full"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      ),
      title: 'Φοιτητές και ομάδες φοιτητών με καινοτόμες ιδέες',
      color: 'green' as const,
    },
    {
      icon: (
        <svg
          className="w-full h-full"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
      title:
        'Επιχειρηματικά σχήματα εντός της Ελλάδας με ενδιαφέρον για το οικοσύστημα καινοτομίας και επιχειρηματικότητας',
      color: 'blue' as const,
    },
    {
      icon: (
        <svg
          className="w-full h-full"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.81 14.12L5.64 11.3l2.12 2.12L4.93 16.24zM16.24 4.93l-2.12 2.12 2.83 2.83 2.12-2.12zM14.12 21.19l-2.83-2.83-2.12 2.12 2.83 2.83zM22.81 9.88l-2.83-2.83-2.12 2.12 2.83 2.83zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      ),
      title: 'Νεοφυείς επιχειρήσεις (Start-ups)',
      color: 'green' as const,
    },
  ]

  return (
    <>
      <Helmet>
        <title>InnovateEast - 1ος Διαγωνισμός Πράσινης & Γαλάζιας Καινοτομίας</title>
        <meta
          name="description"
          content="1ος Διαγωνισμός Πράσινης & Γαλάζιας Καινοτομίας της Μητρόπολης Μεσογαίας και Λαυρεωτικής"
        />
        <meta property="og:title" content="InnovateEast" />
        <meta
          property="og:description"
          content="1ος Διαγωνισμός Πράσινης & Γαλάζιας Καινοτομίας"
        />
      </Helmet>

      <div className="pt-0">
        <Hero />

        {/* Category Section */}
        <Section id="categories" background="white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#4CAF50]">INNOVATE</span>{' '}
              <span className="text-[#1A4B7A]">EAST</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Στον 1ο Διαγωνισμό Πράσινης και Γαλάζιας Καινοτομίας της Μητρόπολης
              μπορούν να λάβουν μέρος υποψήφιοι από τις ακόλουθες κατηγορίες:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                iconColor={category.color}
              />
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}

export default Home
