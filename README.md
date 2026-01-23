# InnovateEast

A modern React + TypeScript website built with Vite, featuring Tailwind CSS, React Router, Framer Motion animations, and SEO optimization.

## Features

- ⚡️ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React with hooks
- 📘 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework with brand colors
- 🚀 **React Router** - Client-side routing with lazy loading
- ✨ **Framer Motion** - Smooth animations on load and hover
- 🔍 **SEO** - react-helmet-async for per-page meta tags
- 📱 **Responsive** - Mobile-first design with mobile menu
- ⚡ **Performance** - Code splitting, lazy loading, optimized builds
- 🇬🇷 **Greek Language** - Full Greek content support
- 🍪 **Cookie Consent** - GDPR-compliant cookie banner
- 📱 **Social Media** - Sticky social media sidebar

## Project Structure

```
innovateeast/
├── public/                    # Static assets (images, logos, etc.)
│   ├── logo.svg              # Main logo
│   ├── hero-chapel.jpg       # Hero section image
│   ├── about-breakwater.jpg  # About page image
│   ├── news/                 # News article images
│   ├── metropolis-logo.svg   # Footer logo
│   └── break-even-logo.svg   # Footer logo
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Header.tsx        # Sticky header with Greek navigation
│   │   ├── MobileMenu.tsx    # Mobile navigation menu
│   │   ├── Hero.tsx          # Two-column hero section
│   │   ├── Section.tsx       # Reusable section wrapper
│   │   ├── Card.tsx          # Generic card component
│   │   ├── NewsCard.tsx      # News article card
│   │   ├── CategoryCard.tsx  # Category card with icons
│   │   ├── Footer.tsx        # Footer with logos
│   │   ├── StickySocialBar.tsx # Right-side social media bar
│   │   ├── CookieConsent.tsx # Cookie consent banner
│   │   └── LoadingSpinner.tsx
│   ├── pages/                # Page components
│   │   ├── Home.tsx          # Homepage with hero and categories
│   │   ├── About.tsx         # About the competition
│   │   ├── Competition.tsx   # Competition page
│   │   ├── Timeline.tsx      # Timeline page
│   │   ├── Terms.tsx         # Terms of participation
│   │   ├── Committees.tsx    # Committees page
│   │   ├── News.tsx          # News/blog page
│   │   └── Contact.tsx       # Contact page
│   ├── App.tsx               # Main app component with routing
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── docs/                      # Documentation
│   ├── DEPLOYMENT.md          # Deployment guides (Vercel & Netlify)
│   └── DNS_PAPAKI.md          # DNS configuration guide
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd innovateeast
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your assets to the `/public` folder:
   - Logo: `/public/logo.svg`
   - Images: `/public/*.jpg`, `/public/*.png`
   - Any other static assets

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

Preview the production build:
```bash
npm run preview
```

## Customization

### Adding Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx` (update `navLinks` array)

### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js` (includes brand colors)
- Component styles: Use Tailwind classes directly in components
- Brand colors:
  - Green: `#4CAF50` (use `bg-[#4CAF50]` or `text-[#4CAF50]`)
  - Blue: `#1A4B7A` (use `bg-[#1A4B7A]` or `text-[#1A4B7A]`)

### Images

Place all images in the `/public` folder and reference them with `/image-name.jpg` in your components. See `/public/README.md` for a complete list of required assets.

### Greek Content

All content is in Greek. Update text in:
- Page components (`src/pages/`)
- Navigation links (`src/components/Header.tsx`)
- Footer (`src/components/Footer.tsx`)
- Cookie consent (`src/components/CookieConsent.tsx`)

## Deployment

See detailed deployment guides:
- [Deployment Guide](./docs/DEPLOYMENT.md) - Instructions for Vercel and Netlify
- [DNS Configuration](./docs/DNS_PAPAKI.md) - DNS setup for Papaki

## Performance Optimizations

- ✅ Code splitting with React.lazy()
- ✅ Route-based code splitting
- ✅ Lazy loading images
- ✅ Manual chunk splitting for vendor libraries
- ✅ Optimized build output

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
