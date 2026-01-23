# Public Assets Directory

Place all your static assets here. These files will be served from the root path.

## Required Assets Based on Design

### Logo
- `logo.svg` - Main "INNOVATE EAST" logo with green/blue stylized S shape and circuit lines

### Hero Section
- `hero-chapel.jpg` - Greek chapel image for the left half of the circular graphic in hero section

### About Page
- `about-breakwater.jpg` - Aerial photo of concrete breakwater extending into water

### News Images
- `news/award-ceremony.jpg` - Award ceremony announcement image
- `news/coaching.jpg` - Coaching process image
- `news/workshop.jpg` - Workshop event image
- `news/extension.jpg` - Competition extension announcement image

### Footer Logos
- `metropolis-logo.svg` - Circular logo with "IM" in center and Greek text around it (ΙΕΡΑ ΜΗΤΡΟΠΟΛΙΣ ΜΕΣΟΓΑΙΑΣ ΚΑΙ ΛΑΥΡΕΩΤΙΚΗΣ)
- `break-even-logo.svg` - BREAK EVEN Consulting logo with geometric symbol

## Image Optimization Tips

- Use WebP format when possible for better compression
- Optimize images before adding (use tools like TinyPNG, ImageOptim)
- Recommended sizes:
  - Hero images: 1920x1080px
  - News cards: 800x600px
  - Logo: SVG preferred, or PNG with transparent background
  - About page image: 1200x800px

## Usage in Components

Reference assets like this:
```tsx
<img src="/logo.svg" alt="Logo" />
<img src="/hero-chapel.jpg" alt="Hero" />
<img src="/news/award-ceremony.jpg" alt="News" />
```

## Color Palette Reference

- **Brand Green**: `#4CAF50`
- **Brand Blue**: `#1A4B7A`
- **Text Dark**: `#333333` or `#1F2937`
- **Background White**: `#FFFFFF`
- **Background Gray**: `#F9FAFB`
