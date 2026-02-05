import { Helmet } from 'react-helmet-async'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '../components/Section'

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>()

  // News content data
  const newsData: Record<string, {
    title: string
    date: string
    readTime: string
    image: string
    content: string[]
    posterImage?: string
    additionalImages?: string[]
    videoUrl?: string
    videoUrls?: string[]
    externalLink?: string
    formLink?: string
    contactInfo?: string
  }> = {
    'award-ceremony': {
      title: 'Τελετή Βράβευσης του Διαγωνισμού στις 7 Οκτωβρίου στο ΕΚΠΑ',
      date: 'Sep 19, 2025',
      readTime: '1 min read',
      image: '/images/news/news1.jpg',
      posterImage: '/images/news/news1.jpg',
      content: [
        'Η Μητρόπολη Μεσογαίας και Λαυρεωτικής και ο Σεβασμιώτατος Μητροπολίτης κ.κ. Νικόλαος σας προσκαλούν στην **Τελετή Βράβευσης** του διαγωνισμού «**Innovate East**», την **Τρίτη, 7 Οκτωβρίου 2025**, στις **17:00**, στη **Μεγάλη Αίθουσα του Εθνικού και Καποδιστριακού Πανεπιστημίου Αθηνών**.',
        'Κατά τη διάρκεια της εκδήλωσης θα παρουσιαστούν και θα βραβευθούν οι ομάδες που διακρίθηκαν με ερευνητικές και επιχειρηματικές προτάσεις στην **Πράσινη και Γαλάζια Καινοτομία**, απαντώντας σε πραγματικές ανάγκες της αγοράς και της κοινωνίας.',
        'Η παρουσία και η συμμετοχή σας θα δώσουν ιδιαίτερη αξία στη γιορτή της καινοτομίας!',
      ],
      contactInfo: 'Για περισσότερες πληροφορίες: κα Ασημίνα Αλτάνη, 6987722752 & asimina.altani@break-even.gr',
    },
    'coaching-process': {
      title: 'Η διαδικασία coaching ξεκίνησε και συνεχίζει δυναμικά!',
      date: 'Dec 6, 2024',
      readTime: '1 min read',
      image: '/images/news/news2.jpg',
      posterImage: '/images/news/news2.jpg',
      content: [
        '46 προτάσεις και 15 εξειδικευμένοι μέντορες βρίσκονται σε συνεχή συνεργασία, ανταλλάσσοντας γνώσεις, ιδέες και εμπειρίες. Μέσα από συναντήσεις, οι ομάδες ενισχύουν τις δεξιότητές τους και προετοιμάζονται για τα επόμενα βήματα της διαγωνιστικής διαδικασίας.',
      ],
    },
    'workshop-press-release': {
      title: 'Δελτίο Τύπου για την πραγματοποίηση του 1ου εκπαιδευτικού εργαστηρίου (workshop) του Innovate East',
      date: 'Aug 1, 2024',
      readTime: '3 min read',
      image: '/images/news/news3.jpg',
      posterImage: '/images/news/news3.jpg',
      additionalImages: ['/images/news/news3.1.jpg'],
      content: [
        'Με μεγάλη επιτυχία πραγματοποιήθηκε το 1ο εκπαιδευτικό εργαστήριο (workshop) του 1ου Διαγωνισμού Καινοτομίας της Μητρόπολης Λαυρεωτικής και Μεσογαίας «**Innovate East**» που διοργάνωσαν η συμβουλευτική εταιρεία: «**Break-Even Consulting**» & ο μη κερδοσκοπικός οργανισμός υποστήριξης της επιχειρηματικότητας: «**Envolve Entrepreneurship**».',
        'Η εκδήλωση έγινε την Τετάρτη, **24η Ιουλίου 2024**, και ώρα **16:00**, στο αμφιθέατρο πολυμέσων του **Εθνικού Μετσόβιου Πολυτεχνείου**. Στο πλαίσιο της εκδήλωσης, δινόταν η δυνατότητα υβριδικής παρακολούθησης κατά την οποία περισσότεροι από εβδομήντα (**70**) **συμμετέχοντες**, ενημερώθηκαν για τα επιχειρηματικά εργαλεία και τη στρατηγική καινοτομίας που οφείλουν να χρησιμοποιήσουν για την ανάπτυξη των επιχειρηματικών τους προτάσεων.',
        'Την έναρξη της εκδήλωσης προλόγισε η κα **Ασημίνα Αλτάνη** -Υπεύθυνη του Διαγωνισμού Innovate East, η οποία ανέφερε: «Ο διαγωνισμός **Innovate East** είναι μια πρωτοβουλία της Μητρόπολης και έχει στόχο να ενώσει διάφορους φορείς όπως η **Περιφέρεια Αττικής** - μέσω παρουσίας οκτώ Δήμων -, επιχειρήσεις της περιοχής της **Ανατολικής Αττικής** και έξι από τα μεγαλύτερα πανεπιστημιακά ιδρύματα της χώρας». Επίσης σημείωσε ότι: «Η δική σας συμμετοχή και ανταπόκριση είναι αυτή που δίνει σημασία σε τέτοια εγχειρήματα» τονίζοντας με αυτό τον τρόπο το ενδιαφέρον και την αγάπη που έχει δείξει τόσα χρόνια ο κόσμος για αυτό τον διαγωνισμό καινοτομίας.',
        'Στη συνέχεια, πήραν τον λόγο η κα **Μαρία Γαβριέλλα Αναγνωστοπούλου** – Chief Operating Officer της εταιρείας **Envolve Entrepreneurship** και ο κ. **Κώστας Κίσσας** – Business Development & Operation Manager της εταιρείας **Envolve Entrepreneurship**. Πιο συγκεκριμένα η κα Αναγνωστοπούλου ανέφερε: «Το **Envolve Entrepreneurship** είναι ένας από τους μεγαλύτερους οργανισμούς υποστήριξης start up της χώρας. Η πρωτοβουλία ξεκίνησε το **2012** και μέχρι σήμερα έχει υποστηρίξει οικονομικά **37 εταιρείες** σε περισσότερους από **20 διαφορετικούς τομείς**, με ποσό που ξεπερνά τα **6 εκατομμύρια ευρώ**. Ο στόχος μας είναι να φέρουμε την καινοτομία και να αναβαθμίσουμε το οικοσύστημα επιχειρηματικότητας στην Ελλάδα και στο εξωτερικό. Συνεργαζόμαστε με άλλες εταιρείες όπως η **Break- Even Consulting** και πραγματοποιούμε πρωτοβουλίες όπως διαδραστικά εργαστήρια που παρέχουν βασικές πληροφορίες και εργαλεία για την ανάπτυξη των επιχειρηματικών σας ιδεών».',
        'Το πρόγραμμα της εκδήλωσης χωρίστηκε σε τρία μέρη. Τα δύο πρώτα μέρη αφορούσαν την παρουσίαση της **Στρατηγικής Καινοτομίας** και του εργαλείου **Business Model Canvas (BMC)**. Το τρίτο και τελευταίο μέρος περιλάμβανε μια **Coaching session** κατά την οποία οι συμμετέχοντες είχαν την ευκαιρία να συζητήσουν τις επιχειρηματικές τους προτάσεις με τους μέντορες και να λάβουν πολύτιμες συμβουλές και καθοδήγηση.',
        'Στην **Επιτροπή Μεντόρων (Coaches)** του διαγωνισμού **Innovate East** συμμετείχαν, είτε αυτοπροσώπως είτε online, οι: **Νεκταρία Μαραβά** - Project Manager στο Start-up Piraeus & apopsi, **Λυδία Παπαδάκη** - Επιστημονική Συνεργάτης στη Μονάδα Αειφόρου Ανάπτυξης του Ερευνητικού Κέντρου «**Athena**», **Κατερίνα Παπαδούλη** - Επικεφαλής του Γραφείου Μεταφοράς Τεχνολογίας του Γεωπονικού Πανεπιστημίου Αθηνών «**InnovinAgri**» και **Μάριος Μπαλής** - Περιβαλλοντολόγος στο Τμήμα Περιβάλλοντος του Πανεπιστημίου Αιγαίου.',
      ],
    },
    'competition-extension': {
      title: 'Παράταση στις δηλώσεις συμμετοχής μέχρι 30 Ιουνίου 2024',
      date: 'May 28, 2024',
      readTime: '1 min read',
      image: '/images/news/news4.jpg',
      posterImage: '/images/news/news4.jpg',
      content: [
        'Συνεχίζονται οι υποβολές συμμετοχών για τον Διαγωνισμό **Innovate East** μέχρι και τις **30 Ιουνίου**.',
      ],
    },
    'siokas-interview': {
      title: 'Ο Βαγγέλης Σιώκας στην "Αυτοδιοίκηση" με την Κέλλυ Κοντογεώργη',
      date: 'Apr 3, 2024',
      readTime: '0 min read',
      image: '/images/news/outside.jpg',
      posterImage: '/images/news/outside.jpg',
      videoUrl: 'https://www.youtube.com/embed/EDzISwAjKBQ',
      content: [
        'Ο **Βαγγέλης Σιώκας** μιλάει για το **Innovate East** στην εκπομπή **"Αυτοδιοίκηση"** με την **Κέλλυ Κοντογεώργη**.',
      ],
    },
    'metropolitan-statement': {
      title: 'Δήλωση του Μητροπολίτη για τον διαγωνισμό Innovate East!',
      date: 'Mar 19, 2024',
      readTime: '1 min read',
      image: 'https://img.youtube.com/vi/CHehBtxNIDw/maxresdefault.jpg',
      posterImage: 'https://img.youtube.com/vi/CHehBtxNIDw/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/CHehBtxNIDw',
      content: [
        'Δήλωση του **Μητροπολίτη Μεσογαίας και Λαυρεωτικής Νικόλαο** για τον **Πρώτο Διαγωνισμός Πράσινης & Γαλάζιας Καινοτομίας**.',
      ],
    },
    'opening-event-video': {
      title: 'Βίντεο από την εναρκτήρια εκδήλωση',
      date: 'Mar 19, 2024',
      readTime: '1 min read',
      image: 'https://img.youtube.com/vi/qwMfEo0cSow/maxresdefault.jpg',
      posterImage: 'https://img.youtube.com/vi/qwMfEo0cSow/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/qwMfEo0cSow',
      content: [
        'Δείτε ένα recap από την **Εναρκτήρια Εκδήλωση** για τον **Πρώτο Διαγωνισμό Πράσινης & Γαλάζιας Καινοτομίας** που πραγματοποιήθηκε στις **5 Μαρτίου**!',
      ],
    },
    'opening-event-press-release': {
      title: 'Δελτίο Τύπου: Εναρκτήρια Εκδήλωση «Innovate East»',
      date: 'Mar 6, 2024',
      readTime: '3 min read',
      image: '/images/about/section3hero.png',
      posterImage: '/images/about/section3hero.png',
      additionalImages: [
        '/images/news/outside.jpg',
        '/images/news/news4.jpg',
        '/images/news/news3.1.jpg',
        '/images/news/news2.jpg',
        '/images/news/news1.jpg',
      ],
      videoUrls: [
        'https://www.youtube.com/embed/tmX3aypmQ0U',
        'https://www.youtube.com/embed/GvFXM44ZMNE',
      ],
      externalLink: 'https://imml.gr/?option=com_content&view=article&id=3109%3Adt-6-3-2024&catid=103%3Adeltia-typou&Itemid=139',
      content: [
        '**1ος Διαγωνισμός Πράσινης και Γαλάζιας Καινοτομίας της Μητροπόλεως Μεσογαίας και Λαυρεωτικής** Με μεγάλη επιτυχία διεξήχθη η εναρκτήρια εκδήλωση του **1ου Διαγωνισμού Καινοτομίας** της Μητρόπολης Λαυρεωτικής και Μεσογαίας «**Innovate East**» που διοργάνωσαν η συμβουλευτική εταιρεία: «**Break-Even Consulting**» & ο μη κερδοσκοπικός οργανισμός υποστήριξης της επιχειρηματικότητας: «**Envolve Entrepreneurship**».',
        'Η εκδήλωση έγινε την **Τρίτη, 5 Μαρτίου 2024**, και ώρα **17:00**, στην αίθουσα «**Επίπλευση**» του **Τεχνολογικού και Πολιτιστικού Πάρκου Λαυρίου**.',
        'Στην εκδήλωση παρευρέθηκαν πρυτάνεις πανεπιστημίων, εκπρόσωποι της τοπικής αυτοδιοίκησης και της επιχειρηματικής κοινότητας. Ο στόχος του **Innovate East** είναι να ενώσει δημόσιους φορείς, την ακαδημαϊκή κοινότητα και τις επιχειρήσεις της περιοχής των Μεσογείων και της Λαυρεωτικής, προκειμένου να κινητοποιήσει νέους ερευνητές και επιστήμονες από τα πανεπιστήμια της χώρας να αναπτύξουν επιχειρηματικές ιδέες που θα συνεισφέρουν στην αντιμετώπιση σύγχρονων προκλήσεων. Ο διαγωνισμός αυτός είναι ο πρώτος σε μια σειρά πρωτοβουλιών της Μητρόπολης Μεσογαίας και Λαυρεωτικής, που συμπίπτει με τα **50 χρόνια λειτουργίας** της. Η οργάνωση και συντονισμός του διαγωνισμού αναλήφθηκε από την εταιρεία **Break-Even Consulting**.',
        'Στην εκδήλωση έδωσαν το παρόν και χαιρέτισαν: ο κ. **Στέλιος Κυμπουρόπουλος**, Ευρωβουλευτής, ο κ. **Μάξιμος Σενετάκης**, Αναπληρωτής Υπουργός Ανάπτυξης, ο κ. **Μανώλης Κουτουλάκης**, Γενικός Γραμματέας Αιγαίου και Νησιωτικής Πολιτικής, η κ. **Βίκυ Καβαλλάρη**, Αντιπεριφερειάρχης Ανατολικής Αττικής, εκπροσωπώντας τους φορείς της τοπικής αυτοδιοίκησης.',
        'Στην εκδήλωση έδωσαν το παρόν και χαιρέτισαν οι **Πρυτάνεις και Αντιπρυτάνεις Πανεπιστημίων** που υποστηρίζουν τον διαγωνισμό: ο κ. **Ιωάννης Χατζηγεωργίου**, Πρύτανης του **Εθνικού Μετσόβιου Πολυτεχνείου**, ο κ. **Μιχάλης Σφακιανάκης**, Πρύτανης του **Πανεπιστημίου Πειραιώς**, ο κ. **Σπυρίδων Κίντζιος**, Πρύτανης του **Γεωπονικού Πανεπιστημίου**, ο κ. **Αθανάσιος Κάτσης**, Πρύτανης του **Πανεπιστημίου Πελοποννήσου**, οι κ.κ. **Θεόδωρος Ξάνθος** και **Πέτρος Καλαντώνης**, Αντιπρυτάνεις του **Πανεπιστημίου Δυτικής Αττικής**. Επίσης έδωσε το παρόν ο κ. **Μάρκος Μαργαρίτης**, Πρόεδρος της **Break-Even Consulting**.',
        'Ο **Σεβασμιώτατος Μητροπολίτης Μεσογαίας και Λαυρεωτικής κ. Νικόλαος** ολοκλήρωσε τα χαιρετίσματα, περιγράφοντας την ιδέα και το όραμα αυτής της εκκλησιαστικής πρωτοβουλίας, τονίζοντας την αναγκαιότητα συντονισμού μεταξύ της ακαδημαϊκής κοινότητας, της τοπικής αυτοδιοίκησης και του επιχειρηματικού κόσμου, προκειμένου να υλοποιηθούν καινοτόμες και πρωτοποριακές ιδέες νέων επιστημόνων και ερευνητών. Η καινοτομία επικεντρώνεται στην **Πράσινη και Γαλάζια καινοτομία**, συγκεκριμένα στην ενέργεια, το περιβάλλον και τη ναυτιλιακή ανάπτυξη, καθώς και στην αξιοποίηση των δυνατοτήτων της **Ανατολικής Αττικής**. Ο Μητροπολίτης τόνισε ότι η βάση κάθε ουσιαστικής καινοτομίας είναι η δυναμική, η ώθηση και η φρεσκάδα της «**πνευματικής καινοτομίας**», που βαθιά διατηρείται στην εκκλησιαστική παράδοση και ζωή.',
        'Στη συνέχεια, ο κ. **Βαγγέλης Σιώκας**, Συντονιστής του Διαγωνισμού, και η κ. **Ελένη Μήτσεα**, Επικεφαλής της Οργανωτικής Επιτροπής του Διαγωνισμού, παρουσίασαν τη διαγωνιστική διαδικασία, τον τρόπο υποβολής προτάσεων και τα αναμενόμενα οφέλη για τους συμμετέχοντες. Ο κ. **Γιάννης Καλογήρου**, Επικεφαλής της Επιστημονικής Επιτροπής και Ομότιμος Καθηγητής του **Εθνικού Μετσόβιου Πολυτεχνείου (ΕΜΠ)**, παρουσίασε τα καινοτόμα στοιχεία του έργου και τόνισε σημεία που απαιτούν προσοχή από τους συμμετέχοντες κατά την υποβολή των προτάσεων.',
        'Ακόμα, στο πλαίσιο της εκδήλωσης διοργανώθηκαν δύο **speed sessions** σε θέματα επιχειρηματικότητας. Το πρώτο session με τίτλο «**Καινοτομία, Πρωτογενής Τομέας & Καλές πρακτικές**», συντόνισε ο **Αντώνης Παπαδόπουλος**, Entrepreneurship Development Director στη **Νέα Γεωργία, Νέα Γενιά** και συμμετείχαν ο κ. **Παναγιώτης Κατσές**, Διευθυντής Πωλήσεων στην **Future Intelligence**, ο **Χρήστος Ραφτογιάννης** Ιδρυτής της **City Crop Automated Indoor Farming** και ο **Χάρης Τριλίβας**, φοιτητής του τμήματος Μηχανολόγων Μηχανικών του **Πανεπιστημίου Πελοποννήσου** & Ιδρυτικό Μέλος του **Hyperion Drone Team**. Το δεύτερο session με τίτλο «**Δυνατότητες Μεταφοράς Τεχνολογίας σε Τοπικό Επίπεδο**» συντόνισε ο κ. **Βαγγέλης Σιώκας** και συμμετείχαν η κ. **Μαρία Γαβριέλλα Αναγνωστοπούλου**, Chief Operation Officer στην **Envolve Entrepreneurship** και Συνιδρύτρια της **One & Olive**, ο κ. **Άγγελος Τσακανίκας**, Αναπληρωτής Καθηγητής **ΕΜΠ** και Επικεφαλής του Γραφείου Μεταφοράς Τεχνολογίας **ΕΜΠ** και η κ. **Κατερίνα Παπαδούλη**, Επικεφαλής του Γραφείου Επιχειρηματικότητας, Καινοτομίας και Μεταφοράς τεχνολογίας του **Γεωπονικού Πανεπιστημίου Αθηνών**, **InnovinAgri**.',
        'Ο **Διαγωνισμός** έχει ως στόχο να κινητοποιήσει νέους ερευνητές και επιστήμονες να αναπτύξουν επιχειρηματικές ιδέες, που θα συνεισφέρουν στην αντιμετώπιση σύγχρονων προκλήσεων της ευρύτερης περιοχής των Μεσογείων και της Λαυρεωτικής, με επίκεντρο τους τομείς της **Γαλάζιας και Πράσινης Οικονομίας**.',
        'Η διαγωνιστική διαδικασία περιλαμβάνει μεταξύ άλλων: α) την υποβολή των καινοτόμων επιχειρηματικών ιδεών, β) δύο φάσεις Αξιολόγησης από μέλη της **Επιστημονικής Επιτροπής** που περιλαμβάνει έγκριτους ακαδημαϊκούς και στελέχη επιχειρήσεων, γ) διαδικασία **mentoring** για την ανάπτυξη των επιχειρηματικών προτάσεων και δ) την ανάδειξη και προβολή των νικητήριων προτάσεων στην **Τελετή Βράβευσης του Διαγωνισμού**. Οι νικητές θα κερδίσουν τα έπαθλα των **5.000€**, **3.000€** και **2.000€**.',
      ],
    },
    'metropolitan-about-competition': {
      title: 'Ο Μητροπολίτης Μεσογαίας για τον Διαγωνισμό Πράσινης & Γαλάζιας Καινοτομίας',
      date: 'Feb 29, 2024',
      readTime: '0 min read',
      image: 'https://img.youtube.com/vi/YzKVMX9OZgE/maxresdefault.jpg',
      posterImage: 'https://img.youtube.com/vi/YzKVMX9OZgE/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/YzKVMX9OZgE',
      content: [
        'Ο **Σεβασμιώτατος Μητροπολίτης Μεσογαίας και Λαυρεωτικής** μιλάει για τον **Διαγωνισμό Πράσινης & Γαλάζιας Καινοτομίας**.',
      ],
    },
    'opening-event-invitation': {
      title: 'Εναρκτήρια Εκδήλωση του Διαγωνισμού στις 5 Μαρτίου 2024 στο Λαύριο',
      date: 'Feb 12, 2024',
      readTime: '1 min read',
      image: '/images/news/news.2.avif',
      posterImage: '/images/news/news.2.avif',
      formLink: 'https://docs.google.com/forms/d/1Rn4P61Z1ubkPxRsMmNdpUwycxfpg3F5Nhfh7v4M1zdw/viewform?edit_requested=true&pli=1',
      content: [
        'O **Innovate East** σε προσκαλεί στην **Εναρκτήρια Εκδήλωση** του Διαγωνισμού, την **Τρίτη 5 Μαρτίου 2024**, στις **17:00** στην Αίθουσα «**Επίπλευση**» του **Τεχνολογικού Πολιτιστικού Πάρκου Λαυρίου**.',
        'Έλα να γνωρίσεις από κοντά τη διαδικασία, τα στάδια του Διαγωνισμού και τον τρόπο υποβολής.',
        'Αν αναρωτιέσαι πώς η επιχειρηματική σου ιδέα μπορεί να αποτελέσει πετυχημένο παράδειγμα, δήλωσε συμμετοχή τώρα στην Εκδήλωση, συμπληρώνοντας τη φόρμα **εδώ**!',
        '*Προς διευκόλυνση των μετακινήσεων θα διατίθεται μέσο μετακίνησης από το Σύνταγμα*',
      ],
    },
    'koumparakis-action-business': {
      title: 'Ο CEO της Break Even Consulting, Γιώργος Κουμπαράκης, συζητά με τον Νίκο Υποφάντη στην εκπομπή Action Business για το Innovate East',
      date: 'Feb 11, 2024',
      readTime: '1 min read',
      image: 'https://img.youtube.com/vi/qyhwzE8RnHk/maxresdefault.jpg',
      posterImage: 'https://img.youtube.com/vi/qyhwzE8RnHk/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/qyhwzE8RnHk',
      content: [
        'Ο **CEO της Break Even Consulting**, **Γιώργος Κουμπαράκης**, συζητά με τον **Νίκο Υποφάντη** στην εκπομπή **Action Business** για το έργο που υλοποιεί η εταιρεία:',
        '«**Διαγωνισμός Καινοτομίας**, με την υποστήριξη της **Μητρόπολης Μεσογαίας & Λαυρεωτικής**, με στόχο την ανάδειξη καινοτόμων ιδεών και ερευνητικών αποτελεσμάτων από τα **Πανεπιστήμια**, αλλά και την αξιοποίησή τους από την **τοπική κοινότητα** και τις **επιχειρήσεις της Ανατολικής Αττικής**».',
      ],
    },
  }

  const news = newsData[slug || '']

  if (!news) {
    return <Navigate to="/news" replace />
  }

  // Helper function to render text with bold formatting and links
  const renderFormattedText = (text: string, formLink?: string) => {
    // First handle the link if formLink exists
    if (formLink && text.includes('**εδώ**')) {
      const parts = text.split(/(\*\*εδώ\*\*)/g)
      return parts.map((part, index) => {
        if (part === '**εδώ**') {
          return (
            <a
              key={`link-${index}`}
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 underline font-semibold"
            >
              εδώ
            </a>
          )
        }
        // Handle other bold text
        const boldParts = part.split(/(\*\*.*?\*\*)/g)
        return (
          <span key={index}>
            {boldParts.map((boldPart, boldIndex) => {
              if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
                return <strong key={boldIndex}>{boldPart.slice(2, -2)}</strong>
              }
              return <span key={boldIndex}>{boldPart}</span>
            })}
          </span>
        )
      })
    }
    
    // Regular bold formatting without link
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>
      }
      return <span key={index}>{part}</span>
    })
  }

  return (
    <>
      <Helmet>
        <title>{news.title} | InnovateEast</title>
        <meta name="description" content={news.content[0].replace(/\*\*/g, '')} />
      </Helmet>

      <div className="pt-16 md:pt-20">
        <Section background="white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border border-gray-200 rounded-lg p-8 md:p-10 lg:p-12"
            >
              {/* Metadata */}
              <div className="mb-6">
                <p className="text-sm text-gray-500">
                  {news.date} · {news.readTime}
                </p>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A4B7A] mb-8 leading-tight">
                {news.title}
              </h1>

              {/* Content Paragraphs */}
              <div className="space-y-6 mb-8">
                {news.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-[#1A4B7A] leading-relaxed"
                  >
                    {renderFormattedText(paragraph, news.formLink)}
                  </p>
                ))}
              </div>

              {/* Video Embed */}
              {news.videoUrl && (
                <div className="mb-8">
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={news.videoUrl}
                        title={news.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Multiple Videos */}
              {news.videoUrls && news.videoUrls.length > 0 && (
                <div className="mb-8 space-y-6">
                  {news.videoUrls.map((videoUrl, index) => (
                    <div key={index}>
                      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                          <iframe
                            src={videoUrl}
                            title={`${news.title} - Video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      {index === 0 && (news.videoUrls?.length ?? 0) > 1 && (
                        <div className="mt-6 mb-6">
                          <p className="text-base md:text-lg text-[#1A4B7A] leading-relaxed">
                            {renderFormattedText('Ο **Σεβασμιώτατος Μητροπολίτης Μεσογαίας και Λαυρεωτικής κ. Νικόλας** μίλησε στο **ΑΠΕ-ΜΠΕ** σχετικά με τη συμμετοχή του κατά την παρουσίαση του **1ου Διαγωνισμού Πράσινης και Γαλάζιας Καινοτομίας** που διοργανώνει η **Μητρόπολη Μεσογαίας και Λαυρεωτικής**.')}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Embedded Poster Image */}
              {news.posterImage && !news.videoUrl && !news.videoUrls && (
                <div className="mb-8">
                  {news.additionalImages && news.additionalImages.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {news.additionalImages.map((img, index) => (
                        <div key={index} className="w-full aspect-[4/3]">
                          <img
                            src={img}
                            alt={`${news.title} - Image ${index + 2}`}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      ))}
                      <div className="w-full aspect-[4/3]">
                        <img
                          src={news.posterImage}
                          alt={news.title}
                          className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={news.posterImage}
                      alt={news.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  )}
                </div>
              )}


              {/* External Link */}
              {news.externalLink && (
                <div className="mb-8">
                  <a
                    href={news.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-[#1A4B7A] text-white rounded-lg hover:bg-[#0d3a5c] transition-colors font-medium"
                  >
                    Περισσότερα ΕΔΩ
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </Section>
      </div>
    </>
  )
}

export default NewsDetail
