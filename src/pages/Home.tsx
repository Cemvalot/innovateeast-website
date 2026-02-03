import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import HomeNewsCards from '../components/HomeNewsCards'
import ThematicSection from '../components/ThematicSection'
import Section from '../components/Section'
import CategoryCard from '../components/CategoryCard'
import SectionTitleHero from '../components/SectionTitleHero'
import TwoColumnParallaxSection from '../components/TwoColumnParallaxSection.tsx'
import ThreeImagesSection from '../components/ThreeImagesSection.tsx'

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

        {/* Category Section – full width, 4 cards spaced evenly */}
        <Section id="categories" background="white" className="pt-0 pb-6 md:pb-8" fullWidth tightPadding>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 items-stretch min-h-[320px] w-full">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                imageSrc={category.imageSrc}
                title={category.title}
                greyBackground={index === 1 || index === 3}
              />
            ))}
          </div>
        </Section>

        {/* Section title: ΣΧΕΤΙΚΑ ΜΕ ΤΟ ΔΙΑΓΩΝΙΣΜΟ */}
        <SectionTitleHero />

        {/* Two columns: image (parallax) + exact text */}
        <TwoColumnParallaxSection imageSrc="/images/about/paralaximg.jpg" />

        {/* Τρεις εικόνες σε σειρά – INNOVATE EAST */}
        <ThreeImagesSection />
      </div>
    </>
  )
}

export default Home
