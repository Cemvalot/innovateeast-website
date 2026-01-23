import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Section from '../components/Section'

const News = () => {
  const newsItems = [
    {
      image: '/news/award-ceremony.jpg',
      date: 'Sep 19, 2025',
      title: 'Τελετή Βράβευσης του Διαγωνισμού στις 7 Οκτωβρίου στο ΕΚΠΑ',
      description:
        'Η Μητρόπολη Μεσογαίας και Λαυρεωτικής και ο Σεβασμιώτατος Μητροπολίτης κ.κ. Νικόλαος σας προσκαλούν στην Τελετή Βράβευσης του...',
      slug: 'award-ceremony',
    },
    {
      image: '/news/coaching.jpg',
      date: 'Dec 6, 2024',
      title: 'Η διαδικασία coaching ξεκίνησε και συνεχίζει δυναμικά!',
      description:
        '46 προτάσεις και 15 εξειδικευμένοι μέντορες βρίσκονται σε συνεχή συνεργασία, ανταλλάσσοντας γνώσεις, ιδέες και εμπειρίες. Μέσα από...',
      slug: 'coaching-process',
    },
    {
      image: '/news/workshop.jpg',
      date: 'Aug 1, 2024',
      title:
        'Δελτίο Τύπου για την πραγματοποίηση του 1ου εκπαιδευτικού εργαστηρίου (workshop) του Innovate East',
      description:
        'Πανεπιστημιούπολη, 24/07/2024 Εκδήλωση «Workshop: Business Model Canvas, Innovation Strategy & Essential Business Tools» Με μεγάλη...',
      slug: 'workshop-press-release',
    },
    {
      image: '/news/extension.jpg',
      date: 'May 28, 2024',
      title: 'Παράταση στις δηλώσεις συμμετοχής μέχρι 30 Ιουνίου 2024',
      description:
        'Συνεχίζονται οι υποβολές συμμετοχών για τον Διαγωνισμό Innovate East μέχρι και τις 30 Ιουνίου',
      slug: 'competition-extension',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Νέα | InnovateEast</title>
        <meta
          name="description"
          content="Νέα και ανακοινώσεις για τον Διαγωνισμό Πράσινης & Γαλάζιας Καινοτομίας"
        />
        <meta property="og:title" content="Νέα | InnovateEast" />
        <meta
          property="og:description"
          content="Νέα και ανακοινώσεις για τον Διαγωνισμό"
        />
      </Helmet>

      <div className="pt-16 md:pt-20">
        <Section background="white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Νέα
              </h1>
              <p className="text-lg text-gray-600">
                Ανακοινώσεις και ενημερώσεις για τον διαγωνισμό
              </p>
            </motion.div>

            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr] gap-0">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col">
                      <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                      <h2 className="text-xl md:text-2xl font-bold text-[#1A4B7A] mb-3">
                        {item.title}
                      </h2>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}

export default News
