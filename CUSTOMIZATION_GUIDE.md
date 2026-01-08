# Customization Guide

Quick reference for personalizing your portfolio.

## Priority Updates (Do These First)

### 1. Personal Links & Contact Info

**Hero.tsx** (line ~145-165)
```typescript
// Update social media URLs
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_USERNAME" ...>
<a href="mailto:YOUR_EMAIL@example.com">
```

**Contact.tsx** (line ~45-60)
```typescript
const contactInfo = [
  { label: 'Email', value: 'YOUR_EMAIL@example.com', href: 'mailto:YOUR_EMAIL@example.com' },
  { label: 'Phone', value: '+91 YOUR_PHONE', href: 'tel:+91XXXXXXXXXX' },
  { label: 'Location', value: 'Your City, India' },
];

const socialLinks = [
  { href: 'https://github.com/YOUR_USERNAME' },
  { href: 'https://linkedin.com/in/YOUR_USERNAME' },
  { href: 'mailto:YOUR_EMAIL@example.com' },
];
```

**Footer.tsx** (line ~45-65)
```typescript
// Update all social links
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_USERNAME" ...>
<a href="mailto:YOUR_EMAIL@example.com">
```

### 2. Resume & Profile Photo

**Add Resume:**
- Place your PDF in: `public/resume.pdf`
- Hero.tsx already links to `/resume.pdf`

**Add Profile Photo:**
- Save photo as: `public/profile-photo.jpg`
- Update About.tsx (line ~60):
```typescript
<div className="relative aspect-square rounded-2xl overflow-hidden">
  <Image
    src="/profile-photo.jpg"
    alt="Kishan S"
    fill
    className="object-cover"
  />
</div>
```

### 3. Project Images

**Add Project Screenshots:**
- Create folder: `public/projects/`
- Add images: `face-swap.jpg`, `fraud-detection.jpg`, etc.
- Projects.tsx already references these paths
- Images will automatically display

## Content Customization

### Modify Your Bio

**About.tsx** (line ~75-95)
Update the two paragraphs with your personal story and experience.

### Update Skills

**Skills.tsx** (line ~20-60)
Add or remove skills from each category:
```typescript
{
  title: 'Frontend Development',
  skills: ['HTML', 'CSS', 'React', /* add more */],
},
```

### Customize Projects

**Projects.tsx** (line ~25-120)
Each project object contains:
```typescript
{
  title: 'Project Name',
  description: 'Short description',
  problem: 'What problem did it solve?',
  impact: 'Metrics/results',
  features: ['Feature 1', 'Feature 2'],
  techStack: ['Tech 1', 'Tech 2'],
  githubUrl: 'https://github.com/...',  // optional
  liveUrl: 'https://demo.com',           // optional
  imageUrl: '/projects/image.jpg',       // optional
}
```

### Update Experience Timeline

**Experience.tsx** (line ~15-75)
Add, remove, or modify timeline entries:
```typescript
{
  type: 'work',  // or 'education'
  title: 'Your Job Title',
  organization: 'Company Name',
  location: 'City, Country',
  period: 'Jan 2025 - Present',
  description: ['Bullet 1', 'Bullet 2'],
  icon: Briefcase,  // or GraduationCap
  color: 'from-blue-600 to-cyan-500',
}
```

### Modify Certifications

**Certifications.tsx** (line ~15-50)
```typescript
{
  title: 'Certification Name',
  issuer: 'Organization',
  date: '2025',
  skills: ['Skill 1', 'Skill 2'],
  color: 'from-blue-600 to-cyan-500',
}
```

## Visual Customization

### Change Color Scheme

The portfolio uses blue-cyan gradients. To change:

**Find and replace across all files:**
- `from-blue-600 to-cyan-500` → your gradient
- `text-blue-600` → your primary color
- `bg-blue-600` → your primary color

**Recommended color combinations:**
- Blue/Cyan (current): Professional, tech
- Green/Emerald: Growth, eco-friendly
- Orange/Amber: Energetic, creative
- Slate/Gray: Minimal, sophisticated

### Modify Typography

**app/layout.tsx** (line ~5)
```typescript
import { Inter } from 'next/font/google';
// Change to: Poppins, Roboto, Outfit, etc.
```

### Adjust Animations

Each section component uses Framer Motion. To adjust:

**Speed:**
```typescript
transition={{ duration: 0.6 }}  // Increase for slower
```

**Delay:**
```typescript
transition={{ delay: 0.2 }}  // Add pause before animation
```

**Disable specific animations:**
```typescript
// Remove or comment out motion wrapper
<motion.div variants={itemVariants}> → <div>
```

## Adding New Sections

### Create a New Section Component

1. Create file: `components/portfolio/NewSection.tsx`
```typescript
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function NewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="new-section" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. Import in page.tsx:
```typescript
import NewSection from '@/components/portfolio/NewSection';

export default function Home() {
  return (
    <main>
      {/* ... other sections */}
      <NewSection />
    </main>
  );
}
```

3. Add to navigation (Navigation.tsx line ~30):
```typescript
{ label: 'New Section', id: 'new-section' }
```

## SEO Customization

### Update Metadata

**app/layout.tsx** (line ~9-46)
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your custom description',
  keywords: ['your', 'keywords', 'here'],
  // ... update all fields
};
```

### Add Structured Data

Create `app/structured-data.json`:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kishan S",
  "url": "https://your-domain.com",
  "sameAs": [
    "https://github.com/YOUR_USERNAME",
    "https://linkedin.com/in/YOUR_USERNAME"
  ],
  "jobTitle": "Software Engineer"
}
```

## Advanced Customizations

### Add Blog Section
Consider adding a blog with MDX:
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

### Add Analytics
```bash
npm install @vercel/analytics
```

### Add Contact Form Backend
Integrate Formspree, EmailJS, or create API route

### Add CMS
Use Contentful, Sanity, or Strapi for easy content updates

## Testing Your Changes

After each customization:

```bash
# Development
npm run dev
# Open http://localhost:3000

# Production build
npm run build
npm run start
```

Test on:
- Desktop (1920px, 1366px)
- Tablet (768px)
- Mobile (375px, 414px)
- Both light and dark modes

## Need Help?

- **Component Documentation**: Check comments in each component file
- **Tailwind Classes**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion/)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

---

Happy customizing! Your portfolio, your way.
