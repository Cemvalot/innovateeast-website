import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import LogoLoop from '../components/LogoLoop'
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
    image: '/images/committees/1.jpg.avif',
  },
  {
    name: 'ΘΑΝΑΣΗΣ ΑΝΑΣΤΑΣΙΟΥ',
    title:
      'Αναπληρωτής Καθηγητής στο Πανεπιστήμιο Πελοποννήσου, Τμήμα Διοικητικής Επιστήμης και Τεχνολογίας',
    image: '/images/committees/2.png.avif',
  },
  {
    name: 'ΠΑΝΤΕΛΗΣ ΒΟΓΙΑΤΖΗΣ',
    title: 'Μηχανικός, Νομικός Περιβάλλοντος, ΟΠΑ',
    image: '/images/committees/3.jpg.avif',
  },
  {
    name: 'ΔΗΜΗΤΡΙΟΣ ΒΛΑΧΑΚΗΣ',
    title: 'Αν Καθηγητής, Τμήμα Βιοτεχνολογίας, Γεωπονικό Πανεπιστήμιο',
    image: '/images/committees/4.jpg.avif',
  },
  {
    name: 'ΒΑΣΙΛΗΣ ΓΙΑΝΝΟΠΟΥΛΟΣ',
    title: 'Επίκουρος Καθηγητής στο Πανεπιστήμιο Πελοποννήσου, Τμήμα Λογιστικής & Χρηματοοικονομικής',
    image: '/images/committees/5.jpg.avif',
  },
  {
    name: 'ΓΙΑΝΝΗΣ ΚΑΛΟΓΗΡΟΥ',
    title: 'Ομότιμος Καθηγητής Τεχνολογικής Οικονομικής & Βιομηχανικής',
    image: '/images/committees/6.jpg.avif',
  },
  {
    name: 'ΣΤΕΦΑΝΟΣ ΚΑΛΟΓΗΡΟΥ',
    title: 'Αν. Καθηγητής, Τμήμα Επιστήμης Ζωϊκής Παραγωγής, Γεωπονικό Πανεπιστήμιο',
    image: '/images/committees/7η.jpg.avif',
  },
  {
    name: 'ΦΟΙΒΗ ΚΟΥΝΤΟΥΡΗ',
    title: 'Καθ. Οικονομικού Παν. Αθηνών & Πολυτεχνείου Δανίας, Πρόεδρος EAERE & SDSN Global Climate Hub, Συμπρόεδρος SDSN Europe',
    image: '/images/committees/8η.jpg.avif',
  },
  {
    name: 'ΜΑΡΚΟΣ ΜΑΡΓΑΡΙΤΗΣ',
    title: 'Δρ Μηχανικός ΕΜΠ σε θέματα περιβαλλοντικών τεχνολογιών και διαχείρισης αποβλήτων',
    image: '/images/committees/9η.jpg.avif',
  },
  {
    name: 'ΔΗΜΗΤΡΙΟΣ ΜΑΝΩΛΑΚΟΣ',
    title: 'Καθηγητής, Τμήμα Χημικών Μηχανικών, Εθνικό Μετσόβιο Πολυτεχνείο',
    image: '/images/committees/10η.jpg.avif',
  },
  {
    name: 'ΘΩΜΑΣ ΜΠΑΡΤΖΑΝΑΣ',
    title: 'Καθηγητής, Τμήμα Ναυτιλιακών Σπουδών, Πανεπιστήμιο Πειραιώς',
    image: '/images/committees/11η.png.avif',
  },
  {
    name: 'ΓΙΑΝΝΗΣ ΨΥΧΑΡΗΣ',
    title: 'Καθηγητής, Τμήμα Ναυτιλιακών Σπουδών, Πανεπιστήμιο Πειραιώς',
    image: '/images/committees/12η.jpg.avif',
  },
  {
    name: 'ΑΙΜΙΛΙΑ ΠΡΩΤΟΓΕΡΟΥ',
    title: 'Επίκουρη Καθηγήτρια ΕΜΠ, Σχολή Χημικών Μηχανικών ΕΜΠ',
    image: '/images/committees/13.jpg.avif',
  },
  {
    name: 'ΕΥΑΓΓΕΛΟΣ ΣΙΩΚΑΣ',
    title: 'Δρ Μηχανικός ΕΜΠ στη γνωστική περιοχή της οικονομικής και στρατηγικής ανάλυσης της τεχνολογίας και της καινοτομίας',
    image: '/images/committees/14.jpg.avif',
  },
  {
    name: 'ΟΔΥΣΣΕΑΣ ΣΠΗΛΙΟΠΟΥΛΟΣ',
    title: 'Καθηγητής, Τμήμα Ναυτιλιακών Σπουδών, Πανεπιστήμιο Πειραιώς',
    image: '/images/committees/15.jpeg.avif',
  },
  {
    name: 'ΣΠΥΡΟΣ ΣΥΡΜΑΚΕΣΗΣ',
    title: 'Καθηγητής, Τμήμα Ναυτιλιακών Σπουδών, Πανεπιστήμιο Πειραιώς',
    image: '/images/committees/16.jpg.avif',
  },
  {
    name: 'ΕΛΕΝΗ ΣΤΡΑΝΤΖΑΛΗ',
    title: 'Καθηγήτρια, Τμήμα Ναυτιλιακών Σπουδών, Πανεπιστήμιο Πειραιώς',
    image: '/images/committees/17.jpg.avif',
  },
  {
    name: 'ΑΓΓΕΛΟΣ ΤΣΑΚΑΝΙΚΑΣ',
    title: 'Καθηγητής, Τμήμα Ναυτιλιακών Σπουδών, Πανεπιστήμιο Πειραιώς',
    image: '/images/committees/18.jpg.avif',
  },
  {
    name: 'ΝΙΚΟΣ ΧΩΡΙΑΝΟΠΟΥΛΟΣ',
    title: 'Αν. Καθηγητής, Τμήμα Επιστήμης Τροφίμων & Διατροφής του Ανθρώπου, Γεωπονικό Πανεπιστήμιο',
    image: '/images/committees/19.jpg.avif',
  },
]

const organizingCommittee: CommitteeMember[] = []

const additionalCommittee: CommitteeMember[] = [
  {
    name: 'ΕΥΑΓΓΕΛΟΣ ΣΙΩΚΑΣ',
    title:
      'Δρ Μηχανικός ΕΜΠ στη γνωστική περιοχή της οικονομικής και στρατηγικής ανάλυσης της τεχνολογίας και της καινοτομίας',
    image: '/images/committees/14.jpg.avif',
  },
  {
    name: 'ΜΑΡΚΟΣ ΜΑΡΓΑΡΙΤΗΣ',
    title: 'Δρ Μηχανικός ΕΜΠ σε θέματα περιβαλλοντικών τεχνολογιών και διαχείρισης αποβλήτων',
    image: '/images/committees/9η.jpg.avif',
  },
  {
    name: 'ΚΩΝΣΤΑΝΤΙΝΟΣ ΤΣΙΚΑΣ',
    title: 'Πολιτικός Επιστήμονας, MSc ΥΔ Παντείου Πανεπιστημίου',
    image: '/images/committees/20.jpg.avif',
  },
  {
    name: 'ΕΛΕΝΗ ΜΗΤΣΕΑ',
    title: 'Χημικός Μηχανικός ΕΜΠ',
    image: '/images/committees/21.jpg.avif',
  },
  {
    name: 'ΒΑΣΙΑ ΟΙΚΟΝΟΜΟΠΟΥΛΟΥ',
    title: 'Δρ Χημικός Μηχανικός ΕΜΠ',
    image: '/images/committees/22.jpg.avif',
  },
  {
    name: 'ΑΣΗΜΙΝΑ ΑΛΤΑΝΗ',
    title: 'Πολιτικός Επιστήμονας, MSc',
    image: '/images/committees/23.jpg.avif',
  },
  {
    name: 'ΚΕΛΛΥ ΚΟΝΤΟΓΕΩΡΓΗ',
    title: 'Δημοσιογράφος – Σύμβουλος Επικοινωνίας',
    image: '/images/committees/24.jpg.avif',
  },
  {
    name: 'ΧΑΡΑ ΠΟΛΚΑ',
    title: 'Πολιτικός Επιστήμονας, MSc',
    image: '/images/committees/25.jpg.avif',
  },
  {
    name: 'ΔΙΟΝΥΣΗΣ ΔΡΑΓΩΝΑΣ',
    title: 'Οικονομολόγος',
    image: '/images/committees/26.jpg.avif',
  },
  {
    name: 'ΔΩΡΑ ΜΠΟΥΚΑ',
    title: 'Οικονομολόγος, MBA',
    image: '/images/committees/27.jpg.avif',
  },
]

const coachesCommittee: CommitteeMember[] = [
  {
    name: 'ΑΝΔΡΕΑΣ ΑΛΕΞΟΠΟΥΛΟΣ',
    title: 'Αναπληρωτής Καθηγητής στο Πανεπιστήμιο Δυτικής Αττικής, Τμήμα Λογιστικής και Χρηματοοικονομικής',
    image: '/images/committees/28.jpg.avif',
  },
  {
    name: 'ΕΛΛΗ ΑΡΜΥΡΑ',
    title: 'Project Manager για νεοφυείς επιχειρήσεις',
    image: '/images/committees/29.jpg.avif',
  },
  {
    name: 'ΒΑΣΙΛΙΚΗ ΔΑΛΑΚΙΑΡΗ',
    title: 'R&D Engineer Lead @ PublicNext / Google Women Techmakers Ambassador',
    image: '/images/committees/30.png.avif',
  },
  {
    name: 'ΝΕΚΤΑΡΙΑ ΜΑΡΑΒΑ',
    title: 'Project Manager, @Popsi',
    image: '/images/committees/31.jpg.avif',
  },
  {
    name: 'ΑΓΓΕΛΟΣ ΜΑΡΑΝΤΟΣ',
    title: 'Managing Partner, Sybacom, Psychologist',
    image: '/images/committees/32.jpg.avif',
  },
  {
    name: 'ΜΑΡΙΟΣ ΜΠΑΛΗΣ',
    title: 'Επιστήμονας Περιβάλλοντος στο Πανεπιστήμιο Αιγαίου, Τμήμα Περιβάλλοντος',
    image: '/images/committees/33.jpg.avif',
  },
  {
    name: 'ΜΥΡΤΩ ΝΑΣΙΟΠΟΥΛΟΥ',
    title: 'Creative Consultant, Design Lead, woli Fintech',
    image: '/images/committees/34.jpg.avif',
  },
  {
    name: 'ΠΑΝΑΓΙΩΤΗΣ ΠΑΝΑΓΙΩΤΟΠΟΥΛΟΣ',
    title: 'Δρ Μηχανικός ΕΜΠ στη γνωστική περιοχή της Οικονομικής και Στρατηγικής Ανάλυσης των Νέων Τεχνολογιών',
    image: '/images/committees/35.jpg.avif',
  },
  {
    name: 'ΑΝΤΩΝΗΣ ΠΑΠΑΔΟΠΟΥΛΟΣ',
    title: 'Διευθυντής Επιχειρηματικής Ανάπτυξης',
    image: '/images/committees/36.jpg.avif',
  },
  {
    name: 'ΚΑΤΕΡΙΝΑ ΠΑΠΑΔΟΥΛΗ',
    title: 'Επικεφαλής του Γραφείου Μεταφοράς Τεχνολογίας',
    image: '/images/committees/37.jpg.avif',
  },
  {
    name: 'ΔΗΜΗΤΡΙΟΣ ΠΥΡΟΜΑΛΛΗΣ',
    title: 'Αναπληρωτής Καθηγητής Πανεπιστημίου Δυτικής Αττικής',
    image: '/images/committees/38.jpg.avif',
  },
  {
    name: 'ΛΙΑ ΣΟΥΡΛΑ',
    title: 'Learning & HR Consultant',
    image: '/images/committees/39.jpg.avif',
  },
  {
    name: 'ΓΙΩΡΓΟΣ ΧΑΛΙΚΙΟΠΟΥΛΟΣ',
    title: 'Head of Digital Acquisition & MarTech, insurancemarket',
    image: '/images/committees/40.jpg.avif',
  },
]

const studentCommittee: CommitteeMember[] = [
  {
    name: 'ΓΙΩΡΓΟΣ ΜΙΧΑΗΛΙΔΗΣ',
    title: 'Προπτυχιακός Φοιτητής τμήματος Μηχανικών Βιομηχανικής Σχεδίασης και Παραγωγής ΠΑ.Δ.Α',
    image: '/images/committees/41.jpg.avif',
  },
  {
    name: 'ΜΑΡΙΑ ΠΕΛΕΦΑΝΤΗ',
    title: 'ΥΔ στο Τμήμα Τουριστικών Σπουδών',
    image: '/images/committees/42.jpg.avif',
  },
  {
    name: 'ΕΙΡΗΝΗ ΣΩΤΗΡΟΠΟΥΛΟΥ',
    title: 'MSc Διαχείριση Τεχνικών έργων',
    image: '/images/committees/43.jpg.avif',
  },
  {
    name: 'ΜΑΡΙΑ ΣΠΑΝΟΥ',
    title: 'Προπτυχιακή Φοιτήτρια Δημόσιας Υγείας, Τμήμα Δημόσιας &Κοινοτικής Υγείας , Σχολή Δημόσιας Υγείας, ΠΑ.Δ.Α.',
    image: '/images/committees/44.jpg.avif',
  },
]

const universityLogos = [
  {
    src: '/images/committees/logo1.jpg',
    alt: 'Εθνικό Μετσόβιο Πολυτεχνείο',
  },
  {
    src: '/images/committees/logo2.jpg',
    alt: 'Πανεπιστήμιο Πειραιώς',
  },
  {
    src: '/images/committees/logo3.jpg',
    alt: 'Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών',
  },
  {
    src: '/images/committees/logo4.jpg',
    alt: 'Γεωπονικό Πανεπιστήμιο Αθηνών',
  },
  {
    src: '/images/committees/logo5.jpg',
    alt: 'Πανεπιστήμιο Δυτικής Αττικής',
  },
  {
    src: '/images/committees/logo6.jpg',
    alt: 'Πανεπιστήμιο Πελοποννήσου',
  },
]

const MemberCard = ({ member, index, invertedColors = false, customGrayIndices }: { member: CommitteeMember; index: number; invertedColors?: boolean; customGrayIndices?: number[] }) => {
  // For additionalCommittee: boxes 2, 4, 5, 7, 10 should be grey (1-based, so indices 1, 3, 4, 6, 9)
  // For coachesCommittee: boxes 2, 4, 5, 7, 9, 11, 13 should be grey (1-based, so indices 1, 3, 4, 6, 8, 10, 12)
  let isGray: boolean
  if (customGrayIndices) {
    isGray = customGrayIndices.includes(index)
  } else if (invertedColors) {
    const grayIndices = [1, 3, 4, 6, 9]
    isGray = grayIndices.includes(index)
  } else {
    isGray = index % 2 === 1
  }
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`flex flex-col items-center text-center px-6 md:px-8 lg:px-10 py-12 md:py-14 lg:py-16 h-full ${
      isGray ? 'bg-gray-100' : 'bg-white'
    }`}
  >
    <div className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 mb-6 md:mb-7 rounded-full overflow-hidden bg-gray-100">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-[#1A4B7A] mb-3 md:mb-4 tracking-wide">
      {member.name}
    </h3>
    <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-sm md:max-w-md">
      {member.title}
    </p>
  </motion.div>
  )
}

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
          {/* Scientific Committee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 tracking-wide text-center text-[#1A4B7A]">
              ΕΠΙΣΤΗΜΟΝΙΚΗ ΕΠΙΤΡΟΠΗ
            </h1>
          </motion.div>
        </Section>

        {/* Full-width grid for Scientific Committee */}
        <div className="w-screen grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
          {scientificCommittee.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        <Section background="white">
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
        </Section>

        {/* Full-width grid for Organizing Committee */}
        <div className="w-screen grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
          {organizingCommittee.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Full-width grid for Additional Committee - 4 boxes */}
        <div className="w-screen grid grid-cols-1 md:grid-cols-4 gap-0 items-stretch" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
          {additionalCommittee.map((member, index) => (
            <MemberCard key={`${member.name}-${index}`} member={member} index={index} invertedColors={true} />
          ))}
        </div>

        <Section background="white">
          {/* Coaches Committee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B7A] mb-6 tracking-wide">
              COACHES
            </h2>
          </motion.div>
        </Section>

        {/* Full-width grid for Coaches Committee - 4 boxes */}
        <div className="w-screen grid grid-cols-1 md:grid-cols-4 gap-0 items-stretch" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
          {coachesCommittee.map((member, index) => (
            <MemberCard 
              key={`coach-${member.name}-${index}`} 
              member={member} 
              index={index} 
              customGrayIndices={[1, 3, 4, 6, 9, 11, 12]}
            />
          ))}
        </div>

        <Section background="white">
          {/* Student Committee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B7A] mb-6 tracking-wide">
              ΦΟΙΤΗΤΙΚΗ ΕΠΙΤΡΟΠΗ
            </h2>
          </motion.div>
        </Section>

        {/* Full-width grid for Student Committee - 4 boxes */}
        <div className="w-screen grid grid-cols-1 md:grid-cols-4 gap-0 items-stretch" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
          {studentCommittee.map((member, index) => (
            <MemberCard 
              key={`student-${member.name}-${index}`} 
              member={member} 
              index={index} 
            />
          ))}
        </div>

        <Section background="white">
          {/* Under the Auspices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A4B7A] mb-8 md:mb-12 tracking-wide">
              ΥΠΟ ΤΗΝ ΑΙΓΙΔΑ
            </h2>
            
            {/* University Logos */}
            <div className="w-full" style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={universityLogos}
                speed={50}
                direction="left"
                logoHeight={140}
                gap={100}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="University partners"
              />
            </div>
          </motion.div>
        </Section>
      </div>
    </>
  )
}

export default Committees
