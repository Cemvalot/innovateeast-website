# Assets Checklist

Use this checklist to ensure all required assets are in place before deployment.

## Required Assets

### Logos
- [ ] `/public/logo.svg` - Main "INNOVATE EAST" logo (green/blue stylized S with circuit lines)
- [ ] `/public/metropolis-logo.svg` - Circular logo with "IM" and Greek text around it
- [ ] `/public/break-even-logo.svg` - BREAK EVEN Consulting logo

### Hero Section
- [ ] `/public/hero-chapel.jpg` - Greek chapel image for circular graphic (left half)

### About Page
- [ ] `/public/about-breakwater.jpg` - Aerial photo of concrete breakwater

### News Images
- [ ] `/public/news/award-ceremony.jpg` - Award ceremony announcement
- [ ] `/public/news/coaching.jpg` - Coaching process image
- [ ] `/public/news/workshop.jpg` - Workshop event photo
- [ ] `/public/news/extension.jpg` - Competition extension announcement

## Optional/Additional Assets

### Event Photos (for hero section or gallery)
- [ ] Event photos from presentations/ceremonies
- [ ] Team photos
- [ ] Venue photos

### Icons (if not using SVG inline)
- [ ] Social media icons (Facebook, Instagram, LinkedIn, YouTube)
- [ ] Category icons (magnifying glass/book, graduation cap, briefcase, rocket)

## Image Specifications

### Logo Files
- **Format**: SVG preferred, PNG with transparency as fallback
- **Size**: Scalable (SVG) or minimum 200x200px (PNG)
- **Colors**: 
  - Logo: Green (#4CAF50) and Blue (#1A4B7A)
  - Footer logos: Can be monochrome or colored

### Hero Image
- **Format**: JPG or WebP
- **Size**: 800x800px minimum (square for circular crop)
- **Aspect Ratio**: 1:1 (will be cropped to circle)

### About Page Image
- **Format**: JPG or WebP
- **Size**: 1200x800px recommended
- **Aspect Ratio**: 3:2 or 16:9

### News Images
- **Format**: JPG or WebP
- **Size**: 800x600px minimum
- **Aspect Ratio**: 4:3 or 16:9

## Optimization Tips

1. **Compress Images**: Use tools like TinyPNG, ImageOptim, or Squoosh
2. **Use WebP**: Convert JPGs to WebP for better compression (modern browsers)
3. **Lazy Loading**: Already implemented in components
4. **Responsive Images**: Consider using `srcset` for different screen sizes

## Testing Checklist

After adding assets:

- [ ] Logo displays correctly in header
- [ ] Hero section circular graphic shows correctly
- [ ] Footer logos display correctly
- [ ] All news images load properly
- [ ] About page image displays correctly
- [ ] No broken image links in browser console
- [ ] Images are optimized (check file sizes)
- [ ] Images look good on mobile devices

## Notes

- All images should be optimized for web
- Use descriptive filenames
- Keep file sizes reasonable (< 500KB per image when possible)
- Test on different devices and screen sizes
- Ensure images match the design aesthetic from your Wix site
