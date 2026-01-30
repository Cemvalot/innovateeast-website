import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export interface HomeNewsItem {
  image: string
  date: string
  title: string
  description: string
  slug?: string
}

const defaultNewsItems: HomeNewsItem[] = [
  {
    image: '/images/news/news1.jpg',
    date: 'Sep 19, 2025',
    title: 'Τελετή Βράβευσης του Διαγωνισμού στις 7 Οκτωβρίου στο ΕΚΠΑ',
    description: 'Η Μητρόπολη Μεσογαίας και Λαυρεωτικής και ο Σεβασμιώτατος Μητροπολίτης κ.κ. Νικόλαος σας προσκαλούν στην Τελετή Βράβευσης του Διαγωνισμού Innovate East στο ΕΚΠΑ.',
    slug: 'award-ceremony',
  },
  {
    image: '/images/news/news2.jpg',
    date: 'Dec 6, 2024',
    title: 'Η διαδικασία coaching ξεκίνησε και συνεχίζει δυναμικά!',
    description: '46 προτάσεις και 15 εξειδικευμένοι μέντορες βρίσκονται σε συνεχή συνεργασία, ανταλλάσσοντας γνώσεις, ιδέες και εμπειρίες.',
    slug: 'innovation',
  },
  {
    image: '/images/news/news3.jpg',
    date: 'Aug 1, 2024',
    title: 'Δελτίο Τύπου για την πραγματοποίηση του 1ου εκπαιδευτικού εργαστηρίου (workshop) του Innovate East',
    description: 'Πανεπιστημιούπολη, 24/07/2024 Εκδήλωση «Workshop: Business Model Canvas, Innovation Strategy & Essential Business Tools».',
    slug: 'events',
  },
  {
    image: '/images/news/news4.jpg',
    date: 'May 28, 2024',
    title: 'Παράταση στις δηλώσεις συμμετοχής μέχρι 30 Ιουνίου 2024',
    description: 'Συνεχίζονται οι υποβολές συμμετοχών για τον Διαγωνισμό Innovate East μέχρι και τις 30 Ιουνίου.',
    slug: 'extension',
  },
]

const HomeNewsCards = ({ items = defaultNewsItems }: { items?: HomeNewsItem[] }) => {
  return (
    <>
      {/* Section 1: Partner logos */}
      <section className="pt-0 bg-white" aria-label="Συνεργαζόμενοι φορείς">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 w-full mb-8 md:mb-10"
        >
          <div className="flex items-center justify-center min-h-[280px] p-8 bg-white">
            <img
              src="/logos/mhtrologo.png"
              alt="ΙΕΡΑ ΜΗΤΡΟΠΟΛΙΣ ΜΕΣΟΓΑΙΑΣ ΚΑΙ ΛΑΥΡΕΩΤΙΚΗΣ"
              className="w-[250px] h-[250px] object-contain"
            />
          </div>
          <div className="flex items-center justify-center min-h-[280px] p-8 bg-[#F3F4F6]">
            <img
              src="/logos/breakevenlogo.png"
              alt="BREAK EVEN Consulting"
              className="w-[250px] h-[250px] object-contain"
            />
          </div>
        </motion.div>
      </section>

      {/* Section 2: News cards – even bigger, image exactly fills top box */}
      <section
        className="pb-6 md:pb-8 bg-white min-h-[700px] flex flex-col"
        aria-label="Νέα και ανακοινώσεις"
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-5 lg:px-6 xl:px-8 flex-1 flex flex-col min-h-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 items-stretch flex-1 min-h-[640px] lg:min-h-[700px]">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex min-h-0"
              >
                <Link
                  to={item.slug ? `/news#${item.slug}` : '/news'}
                  className="block w-full h-full min-h-0 group"
                >
                  <article className="bg-white rounded-2xl h-full min-h-0 flex flex-col overflow-hidden border border-gray-100/80 shadow-md hover:shadow-xl hover:border-[#1A4B7A]/30 transition-all duration-300 ring-1 ring-black/[0.04] hover:ring-[#1A4B7A]/10">
                    {/* Top box: image fills exactly, no gaps */}
                    <div className="relative w-full aspect-[4/3] shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                    </div>
                    {/* Date, title, description – left-aligned at bottom */}
                    <div className="p-6 md:p-7 lg:p-8 xl:p-9 flex flex-col flex-1 min-h-0 text-left justify-center">
                      <p className="text-sm md:text-base text-gray-500 mb-2 font-medium">
                        {item.date}
                      </p>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#333745] mb-3 line-clamp-2 group-hover:underline leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[#6B7280] text-sm md:text-base leading-relaxed line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeNewsCards
