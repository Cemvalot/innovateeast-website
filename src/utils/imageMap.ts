/**
 * Image mapping utility to hide actual filenames
 * Maps generic IDs to actual image paths
 */

export const imageMap = {
  // News images
  news001: '/images/news/news1.jpg',
  news002: '/images/news/news2.jpg',
  news003: '/images/news/news3.jpg',
  news004: '/images/news/news4.jpg',
  news005: '/images/news/outside.jpg',
  news006: '/images/news/news.2.avif',
  news007: '/images/news/try2.png',
  news008: '/images/news/news3.1.jpg',
  
  // About images
  about001: '/images/about/section3hero.png',
  about002: '/images/about/titleimage.png',
  about003: '/images/about/paralaximg.jpg',
  about004: '/images/about/1st.gif',
  about005: '/images/about/2nd.gif',
  about006: '/images/about/3rd.gif',
  about007: '/images/about/4th.gif',
  about008: '/images/about/diagram~mv2.gif',
  about009: '/images/about/2cnddiagram.gif',
  about010: '/images/about/3rdgifdiagram.gif',
  about011: '/images/about/4thgiddiagram.gif',
  about012: '/images/about/1stimageunder.png',
  about013: '/images/about/2ncdimageunder.png',
  about014: '/images/about/3rdimageunder.png',
  
  // Hero images
  hero001: '/images/hero/file.mp4',
  hero002: '/images/hero/logohero2.png',
  hero003: '/images/hero/logoheromasked.png',
  
  // Logos
  logo001: '/logos/innovate-east-footer-logo.png',
  logo002: '/logos/mhtrologo.png',
  logo003: '/logos/breakevenlogo.png',
  logo004: '/logos/logoinnovateeast.png',
  logo005: '/logos/logotype1.png',
  logo006: '/logos/logotype2.png',
  
  // Awards
  award001: '/images/awards/SAVE THE DATE_Innovate East Awards.jpg',
  
  // Committees (using generic pattern)
  committee001: '/images/committees/1.jpg.avif',
  committee002: '/images/committees/2.png.avif',
  committee003: '/images/committees/3.jpg.avif',
  committee004: '/images/committees/4.jpg.avif',
  committee005: '/images/committees/5.jpg.avif',
  committee006: '/images/committees/6.jpg.avif',
  committee007: '/images/committees/7η.jpg.avif',
  committee008: '/images/committees/8η.jpg.avif',
  committee009: '/images/committees/9η.jpg.avif',
  committee010: '/images/committees/10η.jpg.avif',
  committee011: '/images/committees/11η.png.avif',
  committee012: '/images/committees/12η.jpg.avif',
  committee013: '/images/committees/13.jpg.avif',
  committee014: '/images/committees/14.jpg.avif',
  committee015: '/images/committees/15.jpeg.avif',
  committee016: '/images/committees/16.jpg.avif',
  committee017: '/images/committees/17.jpg.avif',
  committee018: '/images/committees/18.jpg.avif',
  committee019: '/images/committees/19.jpg.avif',
  committee020: '/images/committees/20.jpg.avif',
  committee021: '/images/committees/21.jpg.avif',
  committee022: '/images/committees/22.jpg.avif',
  committee023: '/images/committees/23.jpg.avif',
  committee024: '/images/committees/24.jpg.avif',
  committee025: '/images/committees/25.jpg.avif',
  committee026: '/images/committees/26.jpg.avif',
  committee027: '/images/committees/27.jpg.avif',
  committee028: '/images/committees/28.jpg.avif',
  committee029: '/images/committees/29.jpg.avif',
  committee030: '/images/committees/30.png.avif',
  committee031: '/images/committees/31.jpg.avif',
  committee032: '/images/committees/32.jpg.avif',
  committee033: '/images/committees/33.jpg.avif',
  committee034: '/images/committees/34.jpg.avif',
  committee035: '/images/committees/35.jpg.avif',
  committee036: '/images/committees/36.jpg.avif',
  committee037: '/images/committees/37.jpg.avif',
  committee038: '/images/committees/38.jpg.avif',
  committee039: '/images/committees/39.jpg.avif',
  committee040: '/images/committees/40.jpg.avif',
  committee041: '/images/committees/41.jpg.avif',
  committee042: '/images/committees/42.jpg.avif',
  committee043: '/images/committees/43.jpg.avif',
  committee044: '/images/committees/44.jpg.avif',
  committeeLogo001: '/images/committees/logo1.jpg',
  committeeLogo002: '/images/committees/logo2.jpg',
  committeeLogo003: '/images/committees/logo3.jpg',
  committeeLogo004: '/images/committees/logo4.jpg',
  committeeLogo005: '/images/committees/logo5.jpg',
  committeeLogo006: '/images/committees/logo6.jpg',
} as const

/**
 * Get image path by generic ID
 */
export const getImage = (id: keyof typeof imageMap): string => {
  return imageMap[id] || ''
}
