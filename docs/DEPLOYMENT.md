# Deployment Guide for InnovateEast

This guide provides step-by-step instructions for deploying your InnovateEast React application to both Vercel and Netlify with a custom domain (innovateeast.gr).

---

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- Your code pushed to a repository
- Access to your domain registrar (Papaki) for DNS configuration
- Node.js installed locally (for testing builds)

---

## Option A: Deploy to Vercel

### Step 1: Prepare Your Project

1. Ensure your project builds successfully:
   ```bash
   npm install
   npm run build
   ```

2. Verify the `dist` folder is created and contains your built files.

### Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (you can use GitHub, GitLab, or Bitbucket)
3. Complete the onboarding process

### Step 3: Import Your Project

1. Click **"Add New..."** → **"Project"**
2. Import your Git repository (GitHub/GitLab/Bitbucket)
3. Vercel will auto-detect:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. Verify these settings are correct, then click **"Deploy"**

### Step 4: Configure Custom Domain

1. After deployment, go to your project dashboard
2. Navigate to **Settings** → **Domains**
3. Click **"Add Domain"**
4. Enter your domain: `innovateeast.gr`
5. Vercel will also automatically add `www.innovateeast.gr`
6. You'll see DNS records that need to be configured (see DNS section below)

### Step 5: Configure DNS at Papaki

Vercel provides you with specific DNS records. Typically:

**For apex domain (innovateeast.gr):**
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: Vercel's IP addresses (usually 4 IPs provided)
- **TTL**: 3600 (or default)

**For www subdomain (www.innovateeast.gr):**
- **Type**: CNAME
- **Name**: www
- **Value**: `cname.vercel-dns.com` (or the CNAME provided by Vercel)
- **TTL**: 3600 (or default)

**Note**: Vercel may also provide an ALIAS record option for the apex domain. If Papaki supports ALIAS/ANAME records, use that instead of A records.

### Step 6: Verify DNS Propagation

1. Wait 5-60 minutes for DNS propagation
2. In Vercel dashboard, check domain status (should show "Valid Configuration")
3. Test your domain: `https://innovateeast.gr` and `https://www.innovateeast.gr`

### Step 7: SSL Certificate

Vercel automatically provisions SSL certificates via Let's Encrypt. Once DNS is configured, SSL will be active within minutes.

### Step 8: Environment Variables (if needed)

If you have environment variables:
1. Go to **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy if needed

---

## Option B: Deploy to Netlify

### Step 1: Prepare Your Project

1. Ensure your project builds successfully:
   ```bash
   npm install
   npm run build
   ```

2. Create a `netlify.toml` file in your project root (optional but recommended):
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. Verify the `dist` folder is created

### Step 2: Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in (you can use GitHub, GitLab, or Bitbucket)
3. Complete the onboarding process

### Step 3: Import Your Project

1. Click **"Add new site"** → **"Import an existing project"**
2. Connect to your Git provider and select your repository
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **"Deploy site"**

### Step 4: Configure Custom Domain

1. After deployment, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain: `innovateeast.gr`
4. Netlify will automatically add `www.innovateeast.gr`
5. You'll see DNS records that need to be configured (see DNS section below)

### Step 5: Configure DNS at Papaki

Netlify provides you with specific DNS records. Typically:

**For apex domain (innovateeast.gr):**
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: Netlify's IP addresses (usually 4 IPs provided, e.g., 75.2.60.5)
- **TTL**: 3600 (or default)

**Alternative for apex domain (if Papaki supports ALIAS/ANAME):**
- **Type**: ALIAS (or ANAME)
- **Name**: @ (or leave blank)
- **Value**: Your Netlify site URL (e.g., `your-site.netlify.app`)
- **TTL**: 3600 (or default)

**For www subdomain (www.innovateeast.gr):**
- **Type**: CNAME
- **Name**: www
- **Value**: Your Netlify site URL (e.g., `your-site.netlify.app`) or `www.your-site.netlify.app`
- **TTL**: 3600 (or default)

### Step 6: Verify DNS Propagation

1. Wait 5-60 minutes for DNS propagation
2. In Netlify dashboard, check domain status (should show "DNS configuration detected")
3. Test your domain: `https://innovateeast.gr` and `https://www.innovateeast.gr`

### Step 7: SSL Certificate

Netlify automatically provisions SSL certificates via Let's Encrypt. Once DNS is configured, SSL will be active within minutes.

### Step 8: Environment Variables (if needed)

If you have environment variables:
1. Go to **Site settings** → **Environment variables**
2. Add your variables
3. Redeploy if needed

---

## Post-Deployment Checklist

- [ ] Verify both `innovateeast.gr` and `www.innovateeast.gr` work
- [ ] Check SSL certificate is active (HTTPS)
- [ ] Test all routes/pages
- [ ] Verify images and assets load correctly
- [ ] Test mobile responsiveness
- [ ] Check Lighthouse scores (Performance, SEO, Accessibility)
- [ ] Set up custom 404 page (optional)
- [ ] Configure redirects if needed

---

## Troubleshooting

### DNS Not Propagating
- Wait up to 48 hours (usually much faster)
- Use DNS checker tools: [whatsmydns.net](https://www.whatsmydns.net)
- Clear your DNS cache: `sudo dscacheutil -flushcache` (macOS)

### SSL Certificate Issues
- Ensure DNS is correctly configured
- Wait 10-15 minutes after DNS propagation
- Check domain status in your hosting dashboard

### Build Errors
- Test build locally: `npm run build`
- Check build logs in deployment dashboard
- Verify all dependencies are in `package.json`

### 404 Errors on Routes
- Ensure redirect rules are configured (see `netlify.toml` for Netlify)
- For Vercel, this is handled automatically

---

## Continuous Deployment

Both platforms support automatic deployments:
- **Vercel**: Automatically deploys on every push to your main branch
- **Netlify**: Automatically deploys on every push to your main branch

You can configure branch previews and deploy contexts in both platforms' settings.

---

## Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Netlify Support**: [netlify.com/support](https://www.netlify.com/support)


---

## Security Hardening (Production)

Use this checklist before going live:

- Enable strict security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
- Keep source maps disabled in production builds so browser users cannot easily inspect original source files.
- Force HTTPS and redirect all HTTP traffic to HTTPS.
- Keep dependencies updated (`npm outdated`) and run security checks in CI.
- Cache static assets aggressively and HTML conservatively.

### Rate Limiting Guidance

This project is a static frontend (no exposed backend API routes in this repository), so app-level rate limiting is **not required** here.

If you later add API endpoints or serverless functions, enable rate limits at the edge:

- **Netlify**: place APIs behind a gateway/provider that supports per-IP limits.
- **Cloudflare (recommended)**: add WAF/rate-limit rules for `/api/*`, login forms, and contact form endpoints.
- Start with a conservative baseline, e.g. `60 requests/minute/IP` on sensitive routes, then tune using real traffic.

---

## Best Free Deployment Option

For a zero-cost production setup with strong security controls:

1. Deploy the static site on **Cloudflare Pages (Free)**.
2. Put your domain on Cloudflare DNS (orange-cloud/proxied mode).
3. Enable:
   - Always Use HTTPS
   - Automatic HTTPS Rewrites
   - Bot Fight Mode (free)
   - WAF managed rules (where available)
4. Add custom rate-limit rules for sensitive paths if/when backend APIs are introduced.
5. Keep your `_headers` file in `public/` so security headers are deployed automatically.

This gives you global CDN delivery, TLS, and strong edge protections without cost for typical early-stage traffic.
