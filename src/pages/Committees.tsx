import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import LogoLoop from '../components/LogoLoop'
import Section from '../components/Section'

interface CommitteeMember {
  name: string
  title: string
  image: string
  link?: string
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
    link: 'https://w1.aua.gr/gbt/faculty/βλαχάκης-δημήτριος/',
  },
  {
    name: 'ΒΑΣΙΛΗΣ ΓΙΑΝΝΟΠΟΥΛΟΣ',
    title: 'Επίκουρος Καθηγητής στο Πανεπιστήμιο Πελοποννήσου, Τμήμα Λογιστικής & Χρηματοοικονομικής',
    image: '/images/committees/5.jpg.avif',
  },
  {
    name: 'ΓΙΑΝΝΗΣ ΚΑΛΟΓΗΡΟΥ',
    title: 'Ομότιμος Καθηγητής Τεχνολογικής Οικονομικής & Βιομηχανικής Στρατηγικής στο ΕΜΠ',
    image: '/images/committees/6.jpg.avif',
  },
  {
    name: 'ΣΤΕΦΑΝΟΣ ΚΑΛΟΓΗΡΟΥ',
    title: 'Αν. Καθηγητής, Τμήμα Επιστήμης Ζωϊκής Παραγωγής, Γεωπονικό Πανεπιστήμιο',
    image: '/images/committees/7η.jpg.avif',
    link: 'https://zp.aua.gr/faculty-2/kalogirou_stefanos/',
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
    title: 'Αν. Καθηγητής, Τμήμα Αξιοποίησης Φυσικών Πόρων & Γεωργικής Μηχανικής, Γεωπονικό Πανεπιστήμιο',
    image: '/images/committees/10η.jpg.avif',
    link: 'https://w1.aua.gr/afp/faculty/d-manolakos_gr/',
  },
  {
    name: 'ΘΩΜΑΣ ΜΠΑΡΤΖΑΝΑΣ',
    title: 'Αντιπρύτανης Έρευνας, Οικονομικών & Ανάπτυξης, Αναπληρωτής Καθηγητής Θερμοκηπιακές και Υδροπονικές Εγκαταστάσεις, Γεωπονικό Πανεπιστήμιο Αθηνών',
    image: '/images/committees/11η.png.avif',
  },
  {
    name: 'ΓΙΑΝΝΗΣ ΨΥΧΑΡΗΣ',
    title: 'Καθηγητής στο Πάντειο Πανεπιστήμιο, Πρόεδρος Ινστιτούτου Περιφερειακής Ανάπτυξης Παντείου Πανεπιστημίου',
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
    title: 'Κοσμήτορας της Σχολής Διοίκησης στο Πανεπιστήμιο Πελοποννήσου',
    image: '/images/committees/15.jpeg.avif',
  },
  {
    name: 'ΣΠΥΡΟΣ ΣΥΡΜΑΚΕΣΗΣ',
    title: 'Καθηγητής στο Πανεπιστήμιο Πελοποννήσου, Τμήμα Ηλεκτρολόγων Μηχανικών και Μηχανικών Υπολογιστών',
    image: '/images/committees/16.jpg.avif',
  },
  {
    name: 'ΕΛΕΝΗ ΣΤΡΑΝΤΖΑΛΗ',
    title: 'Επίκουρη Καθηγήτρια Τμήματος Ναυπηγών Μηχανικών, ΠΑ.Δ.Α.',
    image: '/images/committees/17.jpg.avif',
    link: 'https://na.uniwa.gr/strantzali_e/',
  },
  {
    name: 'ΑΓΓΕΛΟΣ ΤΣΑΚΑΝΙΚΑΣ',
    title: 'Αναπληρωτής Καθηγητής Οικονομικής Αξιολόγησης Συστημάτων Τεχνολογίας Καινοτομίας και Επιχειρηματικότητας ΕΜΠ, Διευθυντής του Εργαστηρίου Βιομηχανικής και Ενεργειακής Οικονομίας (EBEO)',
    image: '/images/committees/18.jpg.avif',
  },
  {
    name: 'ΝΙΚΟΣ ΧΩΡΙΑΝΟΠΟΥΛΟΣ',
    title: 'Αν. Καθηγητής, Τμήμα Επιστήμης Τροφίμων & Διατροφής του Ανθρώπου, Γεωπονικό Πανεπιστήμιο',
    image: '/images/committees/19.jpg.avif',
    link: 'https://w1.aua.gr/etda/',
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
    title: 'Δρ Μηχανικός ΕΜΠ',
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
    link: 'https://msc-accounting.uniwa.gr/profile/alexopoylos-andreas/',
  },
  {
    name: 'ΕΛΛΗ ΑΡΜΥΡΑ',
    title: 'Project Manager για νεοφυείς επιχειρήσεις',
    image: '/images/committees/29.jpg.avif',
    link: 'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHHB-pZ7SI55gAAAZwtspA4GYCM4u931j9zNfAHvIi6dUmxzfAicocyxET-OfU8lHXtXApD6_ht-jTHVwNa0PbL2mYNPkyLTpEXDNhV5EjWdmZisVDXmghqrgaVSjcWp9DGNXY=&original_referer=https://www.innovateeast.gr/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Felli-armyra%2F',
  },
  {
    name: 'ΒΑΣΙΛΙΚΗ ΔΑΛΑΚΙΑΡΗ',
    title: 'R&D Engineer Lead @ PublicNext / Google Women Techmakers Ambassador',
    image: '/images/committees/30.png.avif',
    link: 'https://www.linkedin.com/in/vadalakiari',
  },
  {
    name: 'ΝΕΚΤΑΡΙΑ ΜΑΡΑΒΑ',
    title: 'Project Manager, @Popsi',
    image: '/images/committees/31.jpg.avif',
    link: 'https://startup-piraeus.gr/poioi-eimaste/nektaria-marava/',
  },
  {
    name: 'ΑΓΓΕΛΟΣ ΜΑΡΑΝΤΟΣ',
    title: 'Managing Partner, Sybacom, Psychologist',
    image: '/images/committees/32.jpg.avif',
    link: 'https://www.linkedin.com/in/aggelosmarantos/',
  },
  {
    name: 'ΜΑΡΙΟΣ ΜΠΑΛΗΣ',
    title: 'Επιστήμονας Περιβάλλοντος στο Πανεπιστήμιο Αιγαίου, Τμήμα Περιβάλλοντος',
    image: '/images/committees/33.jpg.avif',
    link: 'https://www.env.aegean.gr/all_staff/μάριος-μπαλής/',
  },
  {
    name: 'ΜΥΡΤΩ ΝΑΣΙΟΠΟΥΛΟΥ',
    title: 'Creative Consultant, Design Lead, woli Fintech',
    image: '/images/committees/34.jpg.avif',
    link: 'https://www.linkedin.com/in/mirtonasiopoulou/',
  },
  {
    name: 'ΠΑΝΑΓΙΩΤΗΣ ΠΑΝΑΓΙΩΤΟΠΟΥΛΟΣ',
    title: 'Δρ Μηχανικός ΕΜΠ στη γνωστική περιοχή της Οικονομικής και Στρατηγικής Ανάλυσης των Νέων Τεχνολογιών',
    image: '/images/committees/35.jpg.avif',
  },
  {
    name: 'ΑΝΤΩΝΗΣ ΠΑΠΑΔΟΠΟΥΛΟΣ',
    title: 'Διευθυντής Επιχειρηματικής Ανάπτυξης\nΝέα Γεωργία Νέα Γενιά',
    image: '/images/committees/36.jpg.avif',
    link: 'https://www.linkedin.com/in/antonispapadopoulos/',
  },
  {
    name: 'ΚΑΤΕΡΙΝΑ ΠΑΠΑΔΟΥΛΗ',
    title: 'Επικεφαλής του Γραφείου Μεταφοράς Τεχνολογίας του Γεωπονικού Πανεπιστημίου Αθηνών "InnovinAgri"',
    image: '/images/committees/37.jpg.avif',
    link: 'https://www.linkedin.com/in/katerina-papadouli-b153aa60/',
  },
  {
    name: 'ΔΗΜΗΤΡΙΟΣ ΠΥΡΟΜΑΛΛΗΣ',
    title: 'Αναπληρωτής Καθηγητής Πανεπιστημίου Δυτικής Αττικής, Τμήμα Ηλεκτρολόγων και Μηχανικών Υπολογιστών',
    image: '/images/committees/38.jpg.avif',
    link: 'https://www.linkedin.com/in/dimitris-piromalis/',
  },
  {
    name: 'ΛΙΑ ΣΟΥΡΛΑ',
    title: 'Learning & HR Consultant',
    image: '/images/committees/39.jpg.avif',
    link: 'https://www.linkedin.com/in/liasourla',
  },
  {
    name: 'ΓΙΩΡΓΟΣ ΧΑΛΙΚΙΟΠΟΥΛΟΣ',
    title: 'Head of Digital Acquisition & MarTech, insurancemarket',
    image: '/images/committees/40.jpg.avif',
    link: 'http://www.linkedin.com/in/george-halikiopoulos/',
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
    <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-sm md:max-w-md mb-4 whitespace-pre-line">
      {member.title}
    </p>
    {member.link && (
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-colors ${
          member.link.includes('linkedin.com') 
            ? 'bg-[#0077b5] hover:bg-[#005885] mt-auto' 
            : member.link.includes('startup-piraeus.gr')
            ? 'bg-[#1A4B7A] hover:bg-[#0d3a5c] mt-auto'
            : 'bg-[#1A4B7A] hover:bg-[#0d3a5c] mt-2'
        }`}
        aria-label={`Visit ${member.name}'s profile`}
      >
        {member.link.includes('linkedin.com') ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 text-white flex-shrink-0"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:h-6 md:w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        )}
      </a>
    )}
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
