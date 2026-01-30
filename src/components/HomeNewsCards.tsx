import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export interface HomeNewsItem {
  image: string
  title: string
  description: string
  slug?: string
}

const defaultNewsItems: HomeNewsItem[] = [
  {
    image: '/images/news/news1.jpg',
    title: 'Τελετή Βράβευσης – 7 Οκτωβρίου 2025',
    description: 'Ο Μητροπολίτης κ. Νικόλαος σας προσκαλεί στην Τελετή Βράβευσης του Διαγωνισμού Innovate East στο ΕΚΠΑ.',
    slug: 'award-ceremony',
  },
  {
    image: '/images/news/news2.jpg',
    title: 'Καινοτομία & Επιχειρηματικότητα',
    description: 'Παρουσιάσεις και εργαστήρια για την ανάπτυξη ιδεών και επιχειρηματικών μοντέλων.',
    slug: 'innovation',
  },
  {
    image: '/images/news/news3.jpg',
    title: 'Εκδηλώσεις & Σεμινάρια',
    description: 'Φωτογραφίες και ανακοινώσεις από εκδηλώσεις και παρουσιάσεις του διαγωνισμού.',
    slug: 'events',
  },
  {
    image: '/images/news/news4.jpg',
    title: 'Παράταση Υποβολών έως 30 Ιουνίου',
    description: 'Υποβολή προτάσεων για τον Διαγωνισμό Innovate East μέχρι 30 Ιουνίου.',
    slug: 'extension',
  },
]

const HomeNewsCards = ({ items = defaultNewsItems }: { items?: HomeNewsItem[] }) => {
  return (
    <section className="pt-0 pb-16 md:pb-20 bg-white">
      {/* Partner logos - 2 columns aligned with hero: left under white, right under blue, no gap */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 w-full mb-12 md:mb-16"
      >
        {/* Left: under white hero part - Metropolis logo */}
        <div className="flex items-center justify-center min-h-[280px] p-8 bg-white">
          <img
            src="/logos/mhtrologo.png"
            alt="ΙΕΡΑ ΜΗΤΡΟΠΟΛΙΣ ΜΕΣΟΓΑΙΑΣ ΚΑΙ ΛΑΥΡΕΩΤΙΚΗΣ"
            className="w-[250px] h-[250px] object-contain"
          />
        </div>
        {/* Right: under blue hero part - Break Even logo, grey background */}
        <div className="flex items-center justify-center min-h-[280px] p-8 bg-gray-100">
          <img
            src="/logos/breakevenlogo.png"
            alt="BREAK EVEN Consulting"
            className="w-[250px] h-[250px] object-contain"
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Four cards - 4 columns, gap between news */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 xl:gap-16">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex"
            >
              <Link
                to={item.slug ? `/news#${item.slug}` : '/news'}
                className="block w-full h-full group"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-[#1A4B7A]/20">
                  <div className="relative h-52 md:h-60 lg:h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 md:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-[#1A4B7A] mb-3 line-clamp-2 group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeNewsCards
