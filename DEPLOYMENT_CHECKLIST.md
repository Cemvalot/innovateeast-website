# Deployment Checklist for innovateeast.gr

## ✅ Pre-Deployment Verification

### Build Status
- ✅ **Build successful**: `npm run build` completes without errors
- ✅ **Output directory**: `dist/` folder created correctly
- ✅ **Assets**: All images, logos, and static files are in place

### Configuration Files
- ✅ **netlify.toml**: Properly configured with:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - SPA redirects: `/*` → `/index.html`
  - Security headers configured
  - Cache headers for assets
- ✅ **vite.config.ts**: Production build optimized
- ✅ **package.json**: Build scripts configured correctly

### Code Quality
- ✅ **No hardcoded localhost URLs**: All external links use proper URLs
- ✅ **External links**: All external links (YouTube, PDFs, LinkedIn, etc.) use `https://`
- ✅ **Email**: Contact email uses `mailto:` protocol
- ✅ **Fonts**: Google Fonts (Nunito Sans) properly loaded
- ✅ **No environment variables needed**: Static site, no API keys required

### Security Headers
- ✅ **CSP**: Content Security Policy configured
- ✅ **HSTS**: Strict Transport Security enabled
- ✅ **X-Frame-Options**: DENY (prevents clickjacking)
- ✅ **X-Content-Type-Options**: nosniff
- ✅ **Referrer-Policy**: strict-origin-when-cross-origin

---

## 📋 Deployment Steps

### Option 1: Deploy to Netlify (Recommended - Already Configured)

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Build Settings** (Auto-detected from `netlify.toml`)
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20

3. **Add Custom Domain**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `innovateeast.gr`
   - Netlify will auto-add `www.innovateeast.gr`

4. **Configure DNS at Papaki**
   - See `docs/DNS_PAPAKI.md` for detailed instructions
   - **For apex domain (innovateeast.gr)**:
     - Type: ALIAS (if supported) or A records
     - Value: Netlify IPs (provided in dashboard)
   - **For www subdomain**:
     - Type: CNAME
     - Value: Your Netlify site URL (e.g., `your-site.netlify.app`)

5. **Wait for DNS Propagation**
   - Usually 5-60 minutes
   - Check status in Netlify dashboard
   - SSL certificate will auto-provision after DNS is configured

### Option 2: Deploy to Vercel

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

2. **Build Settings** (Auto-detected)
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Add Custom Domain**
   - Settings → Domains
   - Add: `innovateeast.gr`

4. **Configure DNS at Papaki**
   - See `docs/DNS_PAPAKI.md` for detailed instructions
   - Use A records or ALIAS for apex domain
   - Use CNAME for www subdomain

---

## 🔍 Post-Deployment Checklist

After deployment, verify:

- [ ] **Domain Access**
  - [ ] `https://innovateeast.gr` loads correctly
  - [ ] `https://www.innovateeast.gr` loads correctly
  - [ ] HTTP redirects to HTTPS automatically

- [ ] **SSL Certificate**
  - [ ] SSL certificate is active (green lock icon)
  - [ ] No mixed content warnings

- [ ] **Routes & Navigation**
  - [ ] Home page loads
  - [ ] All navigation links work
  - [ ] All routes accessible (no 404s)
  - [ ] Browser back/forward buttons work

- [ ] **Content & Assets**
  - [ ] All images load correctly
  - [ ] Fonts (Nunito Sans) load correctly
  - [ ] Videos embed correctly (YouTube)
  - [ ] PDF links open correctly

- [ ] **Functionality**
  - [ ] Contact form/email links work
  - [ ] External links open correctly
  - [ ] Terms PDF opens in new window
  - [ ] Mobile menu works
  - [ ] Cookie consent appears

- [ ] **Performance**
  - [ ] Page loads quickly
  - [ ] Images optimized
  - [ ] No console errors
  - [ ] Lighthouse score acceptable

- [ ] **Mobile Responsiveness**
  - [ ] Site works on mobile devices
  - [ ] Navigation menu works on mobile
  - [ ] All content readable on small screens

---

## 🚨 Common Issues & Solutions

### DNS Not Propagating
- **Solution**: Wait up to 48 hours (usually faster)
- **Check**: Use [whatsmydns.net](https://www.whatsmydns.net)
- **Clear cache**: `sudo dscacheutil -flushcache` (macOS)

### SSL Certificate Not Issuing
- **Solution**: Ensure DNS is fully configured first
- **Wait**: 10-15 minutes after DNS propagation
- **Check**: Domain status in hosting dashboard

### 404 Errors on Routes
- **Solution**: Ensure redirect rules are configured
- **Netlify**: Already configured in `netlify.toml`
- **Vercel**: Handled automatically

### Build Errors
- **Solution**: Test build locally first: `npm run build`
- **Check**: Build logs in deployment dashboard
- **Verify**: All dependencies in `package.json`

---

## 📝 Notes

- **No environment variables needed**: This is a static site
- **No API keys**: All external services use public URLs
- **Domain**: `innovateeast.gr` is configured in documentation
- **Email**: `info@innovateeast.gr` is used in Contact page
- **External Links**: All properly configured with `target="_blank"` where needed

---

## ✅ Ready to Deploy!

Your project is ready for deployment. All configuration files are in place, the build is successful, and there are no blocking issues.

**Next Steps:**
1. Choose your hosting platform (Netlify recommended - already configured)
2. Connect your repository
3. Add custom domain
4. Configure DNS at Papaki
5. Wait for DNS propagation
6. Verify everything works

For detailed DNS configuration instructions, see: `docs/DNS_PAPAKI.md`
For general deployment guide, see: `docs/DEPLOYMENT.md`
