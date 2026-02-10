# Portfolio Configuration Guide

This guide will help you customize the portfolio to make it your own.

## Quick Start Checklist

- [ ] Update personal information in `data/portfolio.json`
- [ ] Add your profile photo (optional)
- [ ] Update experience section with your companies
- [ ] Add your projects
- [ ] Replace placeholder images
- [ ] Update contact information
- [ ] Customize colors (optional)
- [ ] Test all links

## Detailed Configuration

### 1. Personal Information

Edit `data/portfolio.json` → `personal` section:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Job Title",
    "yearsOfExperience": 10,
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, State",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "portfolio": "https://yourwebsite.com"
  }
}
```

### 2. About Section

Update the `about` section with your story:

```json
{
  "about": {
    "title": "About Me",
    "description": "Your professional introduction...",
    "quote": "Your personal quote or motto",
    "highlights": [
      "Highlight 1",
      "Highlight 2",
      "Highlight 3",
      "Highlight 4"
    ]
  }
}
```

### 3. Objective

Write your career objective in the `objective` section:

```json
{
  "objective": {
    "title": "Objective",
    "content": "Your career goals and what you're looking for..."
  }
}
```

### 4. Profile Summary

Add your professional summary:

```json
{
  "profileSummary": {
    "title": "Profile Summary",
    "content": "A comprehensive overview of your experience and expertise..."
  }
}
```

### 5. Skills

Organize your skills by category:

```json
{
  "skills": [
    {
      "category": "Frontend",
      "items": ["React", "Next.js", "TypeScript", "etc."]
    },
    {
      "category": "Backend",
      "items": ["Python", "FastAPI", "Node.js", "etc."]
    }
  ]
}
```

Supported skill icons:
- React, Next.js, TypeScript, Tailwind CSS, Redux
- Python, FastAPI, Node.js, PostgreSQL, MongoDB
- Docker, Azure, AWS, Kubernetes, Terraform
- Git, GitHub Actions

### 6. Experience

Add your work history:

```json
{
  "experience": [
    {
      "id": 1,
      "company": "Company Name",
      "position": "Your Position",
      "duration": "2020 - Present",
      "startDate": "Jan 2020",
      "endDate": "Present",
      "location": "City, State",
      "image": "/images/company-1.jpg",
      "roles": [
        "Achievement or responsibility 1",
        "Achievement or responsibility 2"
      ],
      "technologies": ["Tech1", "Tech2", "Tech3"]
    }
  ]
}
```

### 7. Projects

Showcase your work:

```json
{
  "projects": [
    {
      "id": 1,
      "name": "Project Name",
      "description": "Brief project description",
      "image": "/images/project-1.jpg",
      "technologies": ["Tech1", "Tech2"],
      "liveUrl": "https://project-demo.com",
      "githubUrl": "https://github.com/you/project",
      "featured": true
    }
  ]
}
```

Set `featured: true` for your best projects to display a badge.

### 8. Contact Section

Update contact information:

```json
{
  "contact": {
    "title": "Let's Connect",
    "subtitle": "Your message to potential contacts",
    "callToAction": "Feel free to reach out!"
  }
}
```

## Image Guidelines

### Adding Images

1. Place images in `public/images/` directory
2. Recommended sizes:
   - Company images: 800x600px or 16:9 aspect ratio
   - Project screenshots: 1200x800px or 3:2 aspect ratio
   - Profile photo: 500x500px square

3. Supported formats: JPG, PNG, WebP
4. Optimize images before uploading (use tools like TinyPNG)

### Image Placeholders

If you don't have images yet, the components will display:
- Gradient backgrounds with icons
- Company/project names
- Fallback designs

## Color Customization

### Changing the Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette (blues)
    500: '#0ea5e9',
    // ... other shades
  },
  accent: {
    // Your accent color palette (purples/pinks)
    500: '#d946ef',
    // ... other shades
  },
}
```

### Pre-defined Color Schemes

**Professional Blue** (current):
- Primary: Blues (#0ea5e9)
- Accent: Purple/Pink (#d946ef)

**Tech Green**:
- Primary: Emerald (#10b981)
- Accent: Cyan (#06b6d4)

**Creative Orange**:
- Primary: Orange (#f97316)
- Accent: Rose (#f43f5e)

## Typography

### Changing Fonts

Edit `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}

.font-display {
  font-family: 'YourDisplayFont', serif;
}
```

Recommended font pairs:
- Inter + Playfair Display (current)
- Poppins + Merriweather
- Montserrat + Lora
- Work Sans + Crimson Pro

## Animation Customization

### Adjusting Animation Speed

In component files, modify Framer Motion `transition` props:

```typescript
transition={{ duration: 0.8 }} // Slower
transition={{ duration: 0.3 }} // Faster
```

### Disabling Animations

To reduce animations, edit individual components and remove or simplify `motion` props.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Custom Domain

1. Add domain in Vercel dashboard
2. Update DNS records
3. Enable SSL (automatic)

### Environment Variables

If you add backend functionality:

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your-api-url
EMAIL_SERVICE_KEY=your-key
```

## Performance Optimization

### Image Optimization

- Use WebP format when possible
- Compress images before uploading
- Use Next.js Image component for automatic optimization

### Code Splitting

Next.js automatically code-splits. To manually optimize:

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

### Analytics

Add analytics by installing the package:

```bash
npm install @vercel/analytics
```

Then in `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## SEO Optimization

### Meta Tags

Edit `app/layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your professional description',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Your description',
    images: ['/og-image.jpg'],
  },
}
```

### Sitemap

Create `app/sitemap.ts`:

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://yoursite.com',
      lastModified: new Date(),
    },
  ]
}
```

## Troubleshooting

### Build Errors

1. Clear cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run build`

### Image Issues

- Verify image paths match JSON configuration
- Ensure images are in `public/images/`
- Check file names are exact matches (case-sensitive)

### Animation Performance

If animations are choppy:
- Reduce number of animated elements
- Use `transform` and `opacity` (GPU-accelerated)
- Add `will-change` CSS property

## Support

For issues or questions:
1. Check the README.md
2. Review component documentation
3. Consult Next.js and Framer Motion docs

## Updates

Keep dependencies updated:

```bash
npm update
npm audit fix
```

---

Happy customizing! 🚀
