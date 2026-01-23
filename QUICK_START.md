# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Assets
Place your assets in the `/public` folder:
- Logo: `/public/logo.svg` (or `.png`)
- Images: `/public/*.jpg`, `/public/*.png`
- See `/public/README.md` for details

### 3. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your site!

---

## 📝 Next Steps

1. **Customize Content**: Edit pages in `src/pages/`
2. **Update Styling**: Modify Tailwind classes or `tailwind.config.js`
3. **Add Assets**: Place images in `/public` and reference as `/image-name.jpg`
4. **Deploy**: Follow guides in `/docs/DEPLOYMENT.md`

---

## 🎨 Customization Checklist

- [ ] Replace placeholder content in pages
- [ ] Add your logo to `/public/logo.svg`
- [ ] Add hero background image to `/public/hero-bg.jpg`
- [ ] Add service images to `/public/service-*.jpg`
- [ ] Update contact information in Footer and Contact page
- [ ] Customize colors in `tailwind.config.js` if needed
- [ ] Update SEO meta tags in each page component

---

## 📚 Documentation

- **Full README**: See `README.md`
- **Deployment**: See `docs/DEPLOYMENT.md`
- **DNS Setup**: See `docs/DNS_PAPAKI.md`

---

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 💡 Tips

- Images are lazy-loaded automatically
- Routes are code-split for better performance
- All animations use Framer Motion
- SEO meta tags are per-page using react-helmet-async
- Mobile menu is responsive and animated
