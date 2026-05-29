# Ivan Lewis Portfolio

Professional portfolio website built with React, Vite, and Tailwind CSS.

## Features
- Cinematic video backgrounds
- Interactive work showcase with dropdown details
- Responsive design (mobile to desktop)
- Custom cursor and grain effects
- Modals for script viewing and current engagements

## Tech Stack
- React 18
- Vite
- Tailwind CSS v4
- TypeScript

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Deployment

This site is configured for easy deployment to Vercel or Netlify.

### Deploy to Vercel:
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Deploy to Netlify:
1. Push code to GitHub
2. Import repository in Netlify
3. Build command: `pnpm build`
4. Publish directory: `dist`

## Making Updates

### Change Videos
- Landing page: `src/app/components/Hero.tsx` - update video import
- Thinking section: `src/app/components/SimplifiedThinkingSection.tsx`

### Update Text Content
- About: `src/app/components/AboutSection.tsx`
- Work projects: `src/app/components/WorkSection.tsx`
- Services: `src/app/components/ServicesSection.tsx`

### Change Colors
- Theme: `src/styles/theme.css`

## Contact

Ivan Lewis  
Mumbai, India  
Email: lastgoodtaste@gmail.com
