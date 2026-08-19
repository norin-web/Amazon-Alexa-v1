# BEN OLSEN・Sound Connect - Deployment Guide

## Quick Start

This project is built with React, Vite, and Tailwind CSS. It's production-ready and optimized for deployment.

## Local Development

The project runs in your browser. All dependencies are already installed.

## File Structure

```
/src
  /app
    /components
      - Header.tsx (Sticky navigation)
      - Footer.tsx (Footer with links)
    /pages
      - Home.tsx (Landing page)
      - OurApp.tsx (App details)
      - AppStore.tsx (Download page)
      - Support.tsx (FAQ)
      - Contact.tsx (Contact info)
      - Feedback.tsx (Feedback form)
      - Terms.tsx (Terms of Service)
      - Privacy.tsx (Privacy Policy)
    - App.tsx (Main app entry)
    - Root.tsx (Layout wrapper)
    - routes.ts (Route configuration)
  /styles
    - fonts.css (Typography)
    - theme.css (Color palette & design tokens)
    - tailwind.css (Tailwind imports)
    - index.css (Main CSS entry)
```

## Customization Checklist

### 1. Update App Store Links
Search for `href="#"` and replace with actual App Store URL:
- `/src/app/components/Header.tsx`
- `/src/app/components/Footer.tsx`
- `/src/app/pages/AppStore.tsx`
- `/src/app/pages/Home.tsx`

### 2. Replace App Screenshots
Update placeholder screenshots in:
- `/src/app/pages/Home.tsx` - Look for `bg-[#D9D2C7]` placeholders
- `/src/app/pages/AppStore.tsx` - Screenshot grid section

Replace the placeholder `<div>` elements with actual images:
```tsx
// Replace this:
<div className="h-48 bg-[#D9D2C7] rounded-md flex items-center justify-center">
  <span className="text-[#717182] text-sm">App Screenshot Placeholder</span>
</div>

// With this:
<ImageWithFallback
  src="path/to/your/screenshot.png"
  alt="App screenshot description"
  className="w-full h-full object-cover rounded-md"
/>
```

### 3. Update Legal Content
Edit the following files with actual legal text:
- `/src/app/pages/Terms.tsx` - Terms of Service
- `/src/app/pages/Privacy.tsx` - Privacy Policy

### 4. Update Email Addresses
Replace placeholder emails in:
- `/src/app/pages/Contact.tsx`
  - `support@benolsen-soundconnect.com`
  - `business@benolsen-soundconnect.com`
- `/src/app/pages/Privacy.tsx`
  - `privacy@benolsen-soundconnect.com`

### 5. Configure Form Submission
The feedback form in `/src/app/pages/Feedback.tsx` currently logs to console. Update the `handleSubmit` function to connect to your backend API:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (validateForm()) {
    // Replace this with your API call
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitted(false);
      }, 3000);
    }
  }
};
```

## Design Tokens

All colors are defined in `/src/styles/theme.css`:

```css
--bg-light: #F5F1EA       /* Light background */
--bg-warm: #EAE3D8        /* Warm background */
--bg-dark: #111111        /* Dark sections */
--accent-warm: #B59A7A    /* Primary accent */
--accent-olive: #78806E   /* Secondary accent */
```

To adjust the color scheme, modify these CSS variables.

## Typography

The site uses **Inter** font family from Google Fonts. To change:
1. Update `/src/styles/fonts.css`
2. Import your preferred fonts
3. Update the `font-family` declarations

## Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Performance Optimization

- Images use lazy loading
- Animations are GPU-accelerated
- CSS is optimized with Tailwind
- React Router handles code splitting

## Browser Support

Tested and optimized for:
- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)

## Production Build

The project is configured for production deployment. All assets are optimized and minified.

## Analytics Integration

To add analytics, integrate your preferred service (Google Analytics, Plausible, etc.) in:
- `/src/app/App.tsx` or
- `/src/app/Root.tsx`

Track these key events:
- Page views
- App Store CTA clicks
- Feedback form submissions
- Support page visits

## Support

For questions about customization or deployment, refer to:
- React Router documentation: https://reactrouter.com
- Tailwind CSS documentation: https://tailwindcss.com
- Motion (Framer Motion) documentation: https://motion.dev

---

**Note**: This is a static React application. For dynamic features (form submission, user accounts, etc.), you'll need to set up a backend API.
