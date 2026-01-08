# Kishan S - Professional Portfolio

A modern, responsive, and highly performant personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper metadata and semantic HTML for better search rankings
- **Performance First**: Optimized images, lazy loading, and fast page loads
- **Interactive Projects**: Detailed project cards with modal views
- **Contact Form**: Integrated contact form with validation
- **Smooth Scrolling**: Single-page layout with smooth section navigation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── portfolio/          # Portfolio-specific components
│   │   ├── Navigation.tsx  # Navigation bar with theme toggle
│   │   ├── Hero.tsx        # Hero section with animated typing
│   │   ├── About.tsx       # About section with bio
│   │   ├── Skills.tsx      # Skills grid with categories
│   │   ├── Projects.tsx    # Featured projects with details
│   │   ├── Experience.tsx  # Experience & education timeline
│   │   ├── Certifications.tsx # Certifications display
│   │   ├── Contact.tsx     # Contact form and info
│   │   └── Footer.tsx      # Footer with links
│   ├── ui/                 # shadcn/ui components
│   └── theme-provider.tsx  # Theme context provider
└── public/                 # Static assets (add project images here)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kishans/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

Edit the content in each component file under `components/portfolio/`:

- **Hero.tsx**: Name, tagline, and CTAs
- **About.tsx**: Bio, internships, and education
- **Skills.tsx**: Technical skills by category
- **Projects.tsx**: Featured projects with details
- **Experience.tsx**: Work experience and education timeline
- **Certifications.tsx**: Certifications and credentials
- **Contact.tsx**: Contact information and social links

### Add Project Images

1. Add images to `public/projects/` directory
2. Update `imageUrl` in Projects.tsx component
3. Images should be optimized (WebP recommended, <500KB)

### Update Resume

Add your resume PDF to `public/resume.pdf`

### Update Social Links

Update social media URLs in:
- Navigation.tsx
- Hero.tsx
- Contact.tsx
- Footer.tsx

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy
4. Your site will be live with a custom domain

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Manual Build

```bash
npm run build
npm run start
```

## Performance Optimization

- Images are optimized with Next.js Image component
- Code splitting for optimal bundle size
- Lazy loading for below-the-fold content
- CSS purging for minimal stylesheet size
- Server-side rendering for fast initial load

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Kishan S. All rights reserved.

## Contact

- Email: kishan.s.220803@gmail.com
- LinkedIn: [linkedin.com/in/kishans](https://www.linkedin.com/in/kishan-s-3128222a1)
- GitHub: [github.com/kishans](https://github.com/kishus22)

---

Built with Next.js and TypeScript
