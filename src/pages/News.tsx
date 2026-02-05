import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const News = () => {
  const newsItems = [
    {
      image: '/images/news/news1.jpg',
      date: 'Sep 19, 2025',
      title: 'Τελετή Βράβευσης του Διαγωνισμού στις 7 Οκτωβρίου στο ΕΚΠΑ',
      description:
        'Η Μητρόπολη Μεσογαίας και Λαυρεωτικής και ο Σεβασμιώτατος Μητροπολίτης κ.κ. Νικόλαος σας προσκαλούν στην Τελετή Βράβευσης του...',
      slug: 'award-ceremony',
    },
    {
      image: '/images/news/news2.jpg',
      date: 'Dec 6, 2024',
      title: 'Η διαδικασία coaching ξεκίνησε και συνεχίζει δυναμικά!',
      description:
        '46 προτάσεις και 15 εξειδικευμένοι μέντορες βρίσκονται σε συνεχή συνεργασία, ανταλλάσσοντας γνώσεις, ιδέες και εμπειρίες. Μέσα από...',
      slug: 'coaching-process',
    },
    {
      image: '/images/news/news3.jpg',
      date: 'Aug 1, 2024',
      title:
        'Δελτίο Τύπου για την πραγματοποίηση του 1ου εκπαιδευτικού εργαστηρίου (workshop) του Innovate East',
      description:
        'Πανεπιστημιούπολη, 24/07/2024 Εκδήλωση «Workshop: Business Model Canvas, Innovation Strategy & Essential Business Tools» Με μεγάλη...',
      slug: 'workshop-press-release',
    },
    {
      image: '/images/news/news4.jpg',
      date: 'May 28, 2024',
      title: 'Παράταση στις δηλώσεις συμμετοχής μέχρι 30 Ιουνίου 2024',
      description:
        'Συνεχίζονται οι υποβολές συμμετοχών για τον Διαγωνισμό Innovate East μέχρι και τις 30 Ιουνίου',
      slug: 'competition-extension',
    },
    {
      image: '/images/news/outside.jpg',
      date: 'Apr 3, 2024',
      title: 'Ο Βαγγέλης Σιώκας στην "Αυτοδιοίκηση" με την Κέλλυ Κοντογεώργη',
      description:
        'Ο Βαγγέλης Σιώκας μιλάει για το Innovate East στην εκπομπή "Αυτοδιοίκηση" με την Κέλλυ Κοντογεώργη',
      slug: 'siokas-interview',
    },
    {
      image: 'https://img.youtube.com/vi/CHehBtxNIDw/maxresdefault.jpg',
      date: 'Mar 19, 2024',
      title: 'Δήλωση του Μητροπολίτη για τον διαγωνισμό Innovate East!',
      description:
        'Δήλωση του Μητροπολίτη Μεσογαίας και Λαυρεωτικής Νικόλαο για τον Πρώτο Διαγωνισμός Πράσινης & Γαλάζιας Καινοτομίας.',
      slug: 'metropolitan-statement',
    },
    {
      image: 'https://img.youtube.com/vi/qwMfEo0cSow/maxresdefault.jpg',
      date: 'Mar 19, 2024',
      title: 'Βίντεο από την εναρκτήρια εκδήλωση',
      description:
        'Δείτε ενα recap απο την Εναρκτήρια Εκδήλωση για τον Πρώτο Διαγωνισμό Πράσινης & Γαλάζιας Καινοτομίας που πραγματοποιήθηκε στις 5 Μαρτίου!',
      slug: 'opening-event-video',
    },
    {
      image: '/images/about/section3hero.png',
      date: 'Mar 6, 2024',
      title: 'Δελτίο Τύπου: Εναρκτήρια Εκδήλωση «Innovate East»',
      description:
        '1ος Διαγωνισμός Πράσινης και Γαλάζιας Καινοτομίας της Μητροπόλεως Μεσογαίας και Λαυρεωτικής Με μεγάλη επιτυχία διεξήχθη η εναρκτήρια...',
      slug: 'opening-event-press-release',
    },
    {
      image: 'https://img.youtube.com/vi/YzKVMX9OZgE/maxresdefault.jpg',
      date: 'Feb 29, 2024',
      title: 'Ο Μητροπολίτης Μεσογαίας για τον Διαγωνισμό Πράσινης & Γαλάζιας Καινοτομίας',
      description:
        'Ο Σεβασμιώτατος Μητροπολίτης Μεσογαίας και Λαυρεωτικής μιλάει για τον Διαγωνισμό Πράσινης & Γαλάζιας Καινοτομίας',
      slug: 'metropolitan-about-competition',
    },
    {
      image: '/images/news/news.2.avif',
      date: 'Feb 12, 2024',
      title: 'Εναρκτήρια Εκδήλωση του Διαγωνισμού στις 5 Μαρτίου 2024 στο Λαύριο',
      description:
        'O Innovate East σε προσκαλεί στην Εναρκτήρια Εκδήλωση του Διαγωνισμού, την Τρίτη 5 Μαρτίου 2024, στις 17:00 στην Αίθουσα «Επίπλευση» του...',
      slug: 'opening-event-invitation',
    },
    {
      image: 'https://img.youtube.com/vi/qyhwzE8RnHk/maxresdefault.jpg',
      date: 'Feb 11, 2024',
      title: 'Ο CEO της Break Even Consulting, Γιώργος Κουμπαράκης, συζητά με τον Νίκο Υποφάντη στην εκπομπή Action Business για το Innovate East',
      description:
        'Ο CEO της Break Even Consulting, Γιώργος Κουμπαράκης, συζητά με τον Νίκο Υποφάντη στην εκπομπή Action Business για το έργο που υλοποιεί η...',
      slug: 'koumparakis-action-business',
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

      <div className="pt-16 md:pt-20 pb-16 md:pb-20 bg-white px-4 md:px-6 lg:px-8">
        <div className="max-w-[940px] mx-auto">
          <div>
            {newsItems.map((item, index) => (
              <Link key={item.slug} to={`/news/${item.slug}`} className="block mb-8 md:mb-10 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="bg-white border border-[rgba(203,204,224,0.75)] overflow-hidden cursor-pointer transition-shadow hover:shadow-lg h-auto md:h-[340.5px]"
                  style={{ borderWidth: '1px', borderStyle: 'solid' }}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section - Left */}
                    <div className="relative w-full md:w-[454px] h-64 md:h-[340.5px] flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Text Section - Right */}
                    <div className="flex-1 flex flex-col h-full overflow-hidden md:w-[486px]">
                      <div className="px-6 md:px-9 py-4 md:py-0 flex flex-col h-full justify-center">
                        <div className="flex flex-col">
                          {/* Date - Above Title */}
                          <div className="text-xs text-gray-500 mb-2 text-center md:text-left">
                            <span>{item.date}</span>
                            <span className="mx-2">·</span>
                            <span>1 min read</span>
                          </div>
                          <h2 className="text-2xl md:text-[35px] font-bold text-[#1A4B7A] mb-3 leading-tight line-clamp-3 text-center md:text-left">
                            {item.title}
                          </h2>
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed line-clamp-3 text-center md:text-left">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default News
