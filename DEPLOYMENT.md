# Deployment Guide

This portfolio is production-ready and optimized for deployment. Here are the recommended deployment options:

## Quick Deploy to Vercel (Recommended)

Vercel is the creators of Next.js and provides the best hosting experience:

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website"
git remote add origin your-github-repo-url
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "Add New Project" and import your repository

4. Vercel will auto-detect Next.js settings - just click "Deploy"

5. Your portfolio will be live in ~2 minutes with:
   - Automatic HTTPS
   - Global CDN
   - Automatic deployments on git push
   - Custom domain support (free)

## Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Install the Netlify Next.js plugin (included in package.json)

## Environment Setup

No environment variables are required for the basic portfolio. If you integrate external services (analytics, form backends), add them to `.env.local`:

```env
# Example for future integrations
NEXT_PUBLIC_ANALYTICS_ID=your_id
```

## Pre-Deployment Checklist

Before deploying, customize these items:

### 1. Update Personal Information
- [ ] Update all placeholder text with your real information
- [ ] Update social media links (GitHub, LinkedIn, email)
- [ ] Add your real email addresses
- [ ] Update phone number in Contact section

### 2. Add Assets
- [ ] Add your professional headshot to `public/` directory
- [ ] Update the photo placeholder in About.tsx
- [ ] Add project screenshots to `public/projects/`
- [ ] Update project imageUrls in Projects.tsx
- [ ] Add your resume PDF to `public/resume.pdf`

### 3. Configure SEO
- [ ] Update metadata in `app/layout.tsx` with your info
- [ ] Add Open Graph image to `public/og-image.png` (1200x630px)
- [ ] Update Open Graph image URLs in metadata
- [ ] Add favicon files to `public/` directory

### 4. Test Contact Form
The contact form currently shows a toast notification. To make it functional:

**Option 1: Formspree (Easiest)**
```bash
npm install @formspree/react
```

Update Contact.tsx to use Formspree:
```typescript
import { useForm } from '@formspree/react';

const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
```

**Option 2: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 3: Custom API Route**
Create `app/api/contact/route.ts` and implement your email service.

### 5. Analytics (Optional)
Add analytics to track visitors:

**Google Analytics:**
```bash
npm install @next/third-parties
```

**Vercel Analytics (Free):**
```bash
npm install @vercel/analytics
```

### 6. Performance Optimization
- [ ] Optimize all images (use WebP format, <500KB each)
- [ ] Use Next.js Image component for project images
- [ ] Run `npm run build` locally to check bundle size
- [ ] Test on mobile devices

## Post-Deployment

After deploying:

1. **Test thoroughly:**
   - All navigation links work
   - Dark/light mode toggle works
   - All sections scroll smoothly
   - Contact form submits correctly
   - Responsive on mobile, tablet, desktop
   - All external links open correctly

2. **Set up custom domain:**
   - Purchase domain (Google Domains, Namecheap, etc.)
   - Add domain in Vercel/Netlify dashboard
   - Update DNS records as instructed
   - SSL certificate is automatic

3. **Submit to search engines:**
   - Google Search Console
   - Bing Webmaster Tools
   - Create sitemap (Next.js auto-generates)

4. **Monitor:**
   - Check analytics regularly
   - Monitor Core Web Vitals in Vercel
   - Update content regularly

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Images not showing
- Ensure images are in `public/` directory
- Update paths without leading slash: `/image.jpg` not `./image.jpg`
- Use Next.js Image component for optimization

### Hydration errors
- Check for `suppressHydrationWarning` in html tag (already added)
- Ensure no client-side only code runs during SSR

## Updating Content

To update your portfolio after deployment:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel/Netlify automatically deploys

No downtime, no manual builds needed!

## Support

For issues specific to:
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)

---

Your portfolio is now ready to showcase your work to the world!
