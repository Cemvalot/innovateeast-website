# Public Assets Directory

Place all your static assets here. These files will be served from the root path.

## Folder Structure

```
/public
├── logos/              # Main site logos
│   └── logo.svg
├── images/
│   ├── hero/           # Hero section images
│   │   └── hero-chapel.jpg
│   ├── about/          # About page images
│   │   └── about-breakwater.jpg
│   ├── news/           # News article images
│   │   ├── award-ceremony.jpg
│   │   ├── coaching.jpg
│   │   ├── workshop.jpg
│   │   └── extension.jpg
│   ├── footer/         # Footer partner logos
│   │   ├── metropolis-logo.svg
│   │   └── break-even-logo.svg
│   └── awards/         # Awards modal images
│       └── awards-poster.jpg
```

## Required Assets Based on Design

### Logo
- `logos/logo.svg` - Main "INNOVATE EAST" logo with green/blue stylized S shape and circuit lines

### Hero Section
- `images/hero/hero-chapel.jpg` - Greek chapel image for the left half of the circular graphic in hero section

### About Page
- `images/about/about-breakwater.jpg` - Aerial photo of concrete breakwater extending into water

### News Images
- `images/news/award-ceremony.jpg` - Award ceremony announcement image
- `images/news/coaching.jpg` - Coaching process image
- `images/news/workshop.jpg` - Workshop event image
- `images/news/extension.jpg` - Competition extension announcement image

### Footer Logos
- `images/footer/metropolis-logo.svg` - Circular logo with "IM" in center and Greek text around it (ΙΕΡΑ ΜΗΤΡΟΠΟΛΙΣ ΜΕΣΟΓΑΙΑΣ ΚΑΙ ΛΑΥΡΕΩΤΙΚΗΣ)
- `images/footer/break-even-logo.svg` - BREAK EVEN Consulting logo with geometric symbol

### Awards Modal
- `images/awards/awards-poster.jpg` - The complete "SAVE THE DATE - THE AWARDS" poster image (will be displayed as-is in the popup modal)

## Image Optimization Tips

- Use WebP format when possible for better compression
- Optimize images before adding (use tools like TinyPNG, ImageOptim)
- Recommended sizes:
  - Hero images: 1920x1080px
  - News cards: 800x600px
  - Logo: SVG preferred, or PNG with transparent background
  - About page image: 1200x800px

## Usage in Components

Reference assets using the folder paths:
```tsx
<img src="/logos/logo.svg" alt="Logo" />
<img src="/images/hero/hero-chapel.jpg" alt="Hero" />
<img src="/images/news/award-ceremony.jpg" alt="News" />
<img src="/images/footer/metropolis-logo.svg" alt="Metropolis" />
<img src="/images/awards/awards-poster.jpg" alt="Awards Poster" />
```

**Note:** If your components currently reference assets from the root (e.g., `/logo.svg`), you'll need to update them to use the new folder structure (e.g., `/logos/logo.svg`).

## Color Palette Reference

- **Brand Green**: `#4CAF50`
- **Brand Blue**: `#1A4B7A`
- **Text Dark**: `#333333` or `#1F2937`
- **Background White**: `#FFFFFF`
- **Background Gray**: `#F9FAFB`
