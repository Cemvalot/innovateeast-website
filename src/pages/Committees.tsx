import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Section from '../components/Section'

interface CommitteeMember {
  name: string
  title: string
  image: string
}

const scientificCommittee: CommitteeMember[] = [
  {
    name: 'ΜΑΡΙΑ ΕΛΕΝΗ ΑΓΟΡΑΚΗ',
    title:
      'Αναπληρώτρια Καθηγήτρια, Τμήμα Λογιστικής και Χρηματοοικονομικής, Πανεπιστήμιο Πελοποννήσου',
    image: '/committees/scientific/agoraki.jpg',
  },
  {
    name: 'ΘΑΝΑΣΗΣ ΑΝΑΣΤΑΣΙΟΥ',
    title:
      'Αναπληρωτής Καθηγητής, Πανεπιστήμιο Πελοποννήσου, Τμήμα Διοικητικής Επιστήμης και Τεχνολογίας',
    image: '/committees/scientific/anastasiou.jpg',
  },
  {
    name: 'ΠΑΝΤΕΛΗΣ ΒΟΓΙΑΤΖΗΣ',
    title: 'Μηχανικός, Νομικός Περιβάλλοντος, ΟΠΑ',
    image: '/committees/scientific/vogiatzis.jpg',
  },
  // ... συμπληρώστε με τα πραγματικά μέλη
]

const organizingCommittee: CommitteeMember[] = [
  {
    name: 'ΕΥΑΓΓΕΛΟΣ ΣΙΩΚΑΣ',
    title:
      'Δρ Μηχανικός ΕΜΠ στη γνωστική περιοχή της οικονομικής και στρατηγικής ανάλυσης της τεχνολογίας και της καινοτομίας',
    image: '/committees/organizing/siokas.jpg',
  },
  {
    name: 'ΜΑΡΚΟΣ ΜΑΡΓΑΡΙΤΗΣ',
    title: 'Δρ Μηχανικός ΕΜΠ',
    image: '/committees/organizing/margaritis.jpg',
  },
  {
    name: 'ΚΩΝΣΤΑΝΤΙΝΟΣ ΤΣΙΚΑΣ',
    title: 'Πολιτικός Επιστήμονας, MSc ΥΔ Παντείου Πανεπιστημίου',
    image: '/committees/organizing/tsikas.jpg',
  },
  // ... συμπληρώστε με τα πραγματικά μέλη
]

const MemberCard = ({ member }: { member: CommitteeMember }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center text-center px-4 py-8"
  >
    <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-gray-100">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <h3 className="text-lg font-bold text-[#1A4B7A] mb-2 tracking-wide">
      {member.name}
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
      {member.title}
    </p>
  </motion.div>
)

const Committees = () => {
  return (
    <>
      <Helmet>
        <title>Επιτροπές | InnovateEast</title>
        <meta
          name="description"
          content="Οι επιτροπές του Διαγωνισμού Πράσινης & Γαλάζιας Καινοτομίας"
        />
      </Helmet>

      <div className="pt-16 md:pt-20">
        <Section background="white">
          <div className="max-w-6xl mx-auto">
            {/* Scientific Committee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-[#1A4B7A] mb-6 tracking-wide">
                ΕΠΙΣΤΗΜΟΝΙΚΗ ΕΠΙΤΡΟΠΗ
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16">
              {scientificCommittee.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>

            {/* Organizing Committee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B7A] mb-6 tracking-wide">
                ΟΡΓΑΝΩΤΙΚΗ ΕΠΙΤΡΟΠΗ
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {organizingCommittee.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}

export default Committees
