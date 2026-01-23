# DNS Configuration Guide for Papaki

This guide explains exactly which DNS records you need to create at Papaki for your domain `innovateeast.gr` when deploying to Vercel or Netlify.

---

## Understanding DNS Record Types

- **A Record**: Points a domain to an IPv4 address (used for apex domains)
- **CNAME Record**: Points a domain to another domain name (used for subdomains like www)
- **ALIAS/ANAME Record**: Points an apex domain to another domain name (if supported by your registrar)

---

## Option A: DNS Configuration for Vercel

### Step 1: Get DNS Records from Vercel

1. After adding your domain in Vercel, go to **Settings** → **Domains**
2. Click on your domain (`innovateeast.gr`)
3. You'll see the DNS records you need to add

### Step 2: Configure at Papaki

#### For Apex Domain (innovateeast.gr)

**If Papaki supports ALIAS/ANAME records (recommended):**
- **Record Type**: ALIAS (or ANAME)
- **Host/Name**: @ (or leave blank, or `innovateeast.gr`)
- **Value/Target**: `cname.vercel-dns.com` (or the value provided by Vercel)
- **TTL**: 3600 (or default)

**If ALIAS is not supported, use A records:**
- **Record Type**: A
- **Host/Name**: @ (or leave blank, or `innovateeast.gr`)
- **Value/Target**: [IP addresses provided by Vercel - usually 4 IPs]
  - Example: `76.76.21.21`
  - Example: `76.76.21.22`
  - Example: `76.76.21.23`
  - Example: `76.76.21.24`
- **TTL**: 3600 (or default)

**Note**: You'll need to create **4 separate A records**, one for each IP address provided by Vercel.

#### For WWW Subdomain (www.innovateeast.gr)

- **Record Type**: CNAME
- **Host/Name**: www
- **Value/Target**: `cname.vercel-dns.com` (or the CNAME value provided by Vercel)
- **TTL**: 3600 (or default)

### Step 3: Verify Configuration

After adding records, wait 5-60 minutes and check:
- Vercel dashboard should show "Valid Configuration"
- Test: `https://innovateeast.gr` and `https://www.innovateeast.gr`

---

## Option B: DNS Configuration for Netlify

### Step 1: Get DNS Records from Netlify

1. After adding your domain in Netlify, go to **Site settings** → **Domain management**
2. Click on your domain (`innovateeast.gr`)
3. You'll see the DNS records you need to add

### Step 2: Configure at Papaki

#### For Apex Domain (innovateeast.gr)

**If Papaki supports ALIAS/ANAME records (recommended):**
- **Record Type**: ALIAS (or ANAME)
- **Host/Name**: @ (or leave blank, or `innovateeast.gr`)
- **Value/Target**: Your Netlify site URL (e.g., `your-site-name.netlify.app`)
- **TTL**: 3600 (or default)

**If ALIAS is not supported, use A records:**
- **Record Type**: A
- **Host/Name**: @ (or leave blank, or `innovateeast.gr`)
- **Value/Target**: [IP addresses provided by Netlify - usually 4 IPs]
  - Example: `75.2.60.5`
  - Example: `99.83.190.102`
  - Example: `18.245.0.30`
  - Example: `18.245.0.31`
- **TTL**: 3600 (or default)

**Note**: You'll need to create **4 separate A records**, one for each IP address provided by Netlify.

#### For WWW Subdomain (www.innovateeast.gr)

- **Record Type**: CNAME
- **Host/Name**: www
- **Value/Target**: Your Netlify site URL (e.g., `your-site-name.netlify.app`) or `www.your-site-name.netlify.app`
- **TTL**: 3600 (or default)

### Step 3: Verify Configuration

After adding records, wait 5-60 minutes and check:
- Netlify dashboard should show "DNS configuration detected"
- Test: `https://innovateeast.gr` and `https://www.innovateeast.gr`

---

## Step-by-Step Instructions for Papaki

### Accessing DNS Management

1. Log in to your Papaki account
2. Navigate to **Domain Management** or **DNS Management**
3. Select your domain: `innovateeast.gr`
4. Find the **DNS Records** or **Zone Editor** section

### Adding Records

1. Click **"Add Record"** or **"New Record"**
2. Select the record type (A, CNAME, or ALIAS)
3. Fill in the fields:
   - **Host/Name**: Use `@` for apex domain, or `www` for subdomain
   - **Value/Target**: Enter the value from your hosting provider
   - **TTL**: Use 3600 (1 hour) or default
4. Click **"Save"** or **"Add"**
5. Repeat for all required records

### Example: Adding A Record for Apex Domain

```
Record Type: A
Host: @
Value: 76.76.21.21
TTL: 3600
```

### Example: Adding CNAME Record for WWW

```
Record Type: CNAME
Host: www
Value: cname.vercel-dns.com (or your Netlify site URL)
TTL: 3600
```

---

## Important Notes

### ALIAS vs A Records

- **ALIAS/ANAME**: Preferred for apex domains as it's easier to manage (single record)
- **A Records**: Required if ALIAS is not supported (multiple records needed)
- Check Papaki's documentation to see if ALIAS/ANAME is supported

### TTL (Time To Live)

- **3600 seconds (1 hour)**: Recommended for faster updates
- **Default/86400 (24 hours)**: Acceptable but slower propagation
- Lower TTL = faster DNS changes, but more DNS queries

### DNS Propagation

- Changes can take **5 minutes to 48 hours** to propagate globally
- Usually completes within **1-2 hours**
- Use [whatsmydns.net](https://www.whatsmydns.net) to check propagation status

### Removing Old Records

- Before adding new records, check if there are existing A or CNAME records for your domain
- Remove or update conflicting records
- Common conflicts: existing A records pointing to old hosting

---

## Troubleshooting

### "Invalid DNS Configuration" Error

- Double-check record values match exactly what your hosting provider shows
- Ensure no typos in IP addresses or domain names
- Wait for DNS propagation (can take up to 48 hours)

### WWW Not Working

- Verify CNAME record for `www` is correctly configured
- Ensure the target value matches your hosting provider's requirements
- Check for conflicting records

### Apex Domain Not Working

- If using A records, ensure all 4 IPs are added
- If using ALIAS, verify the target domain is correct
- Check for existing conflicting records

### SSL Certificate Not Issuing

- DNS must be fully propagated first
- Ensure both apex and www are correctly configured
- Wait 10-15 minutes after DNS propagation for SSL to activate

---

## Quick Reference Table

| Domain | Record Type | Host/Name | Value/Target | Platform |
|--------|-------------|-----------|--------------|----------|
| innovateeast.gr | ALIAS (preferred) or A | @ | Provider-specific | Vercel/Netlify |
| www.innovateeast.gr | CNAME | www | Provider-specific | Vercel/Netlify |

**Note**: Replace "Provider-specific" with the actual values from your Vercel or Netlify dashboard.

---

## Need Help?

- **Papaki Support**: Contact Papaki support for DNS management assistance
- **Vercel DNS Docs**: [vercel.com/docs/concepts/projects/domains](https://vercel.com/docs/concepts/projects/domains)
- **Netlify DNS Docs**: [docs.netlify.com/domains-https/custom-domains](https://docs.netlify.com/domains-https/custom-domains)
