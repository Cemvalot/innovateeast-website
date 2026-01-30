import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import HomeNewsCards from '../components/HomeNewsCards'
import ThematicSection from '../components/ThematicSection'
import Section from '../components/Section'
import CategoryCard from '../components/CategoryCard'

const Home = () => {
  const categories = [
    {
      imageSrc: '/images/about/1st.gif',
      title:
        'Νέοι ερευνητές, υποψήφιοι διδάκτορες και διδάκτορες που επιθυμούν να εξελίξουν την επιχειρηματική τους ιδέα',
    },
    {
      imageSrc: '/images/about/2nd.gif',
      title: 'Φοιτητές και ομάδες φοιτητών με καινοτόμες ιδέες',
    },
    {
      imageSrc: '/images/about/3rd.gif',
      title:
        'Επιχειρηματικά σχήματα εντός της Ελλάδας με ενδιαφέρον για το οικοσύστημα καινοτομίας και επιχειρηματικότητας',
    },
    {
      imageSrc: '/images/about/4th.gif',
      title: 'Νεοφυείς επιχειρήσεις (Start-ups)',
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

        {/* News cards - logos + 4 cards linking to news / posts */}
        <HomeNewsCards />

        {/* Thematic section: image + text (two containers) */}
        <ThematicSection />

        {/* Category Section – no gap above, 4 containers spaced evenly */}
        <Section id="categories" background="white" className="pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 items-stretch min-h-[380px] lg:min-h-[420px]">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                imageSrc={category.imageSrc}
                title={category.title}
              />
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}

export default Home
