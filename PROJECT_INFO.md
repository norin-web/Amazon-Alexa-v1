# BEN OLSEN・Sound Connect - Website

Premium promotional landing page for the Sound Connect mobile application, inspired by Bang & Olufsen's design language.

## 🎨 Design Features

- **Premium Color Palette**: Neutral tones (#F5F1EA, #EAE3D8, #111111) with warm accents (#B59A7A)
- **Generous Whitespace**: Clean, luxury-focused layout with ample breathing room
- **Premium Typography**: Inter font family for modern, refined text presentation
- **Smooth Animations**: Subtle Motion (Framer Motion) animations throughout
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## 📄 Website Structure

The website includes 8 pages:

1. **Home** (`/`) - Main landing page with hero, features, and CTAs
2. **Our App** (`/app`) - Detailed app information and capabilities
3. **App Store** (`/app-store`) - Download page with App Store CTA
4. **Support** (`/support`) - FAQ and help resources
5. **Contact** (`/contact`) - Contact information
6. **Feedback** (`/feedback`) - Feedback form with validation
7. **Terms** (`/terms`) - Terms of Service (placeholder content)
8. **Privacy** (`/privacy`) - Privacy Policy (placeholder content)

## 🔄 Content Updates Needed

### App Screenshots

The following sections have placeholders for actual app screenshots:

- **Home page**: "App Experience" section (3 screenshots)
- **App Store page**: Screenshot preview section (4 screenshots)

To replace placeholders:
1. Navigate to the relevant page component in `/src/app/pages/`
2. Look for elements with className containing `bg-[#D9D2C7]` (placeholder backgrounds)
3. Replace with actual screenshot images

### Legal Content

**Terms of Service** and **Privacy Policy** pages contain placeholder content. To update:

1. Edit `/src/app/pages/Terms.tsx` - Replace content in the main section
2. Edit `/src/app/pages/Privacy.tsx` - Replace content in the main section

## 🎯 Key Features

### Navigation
- Sticky header with smooth scroll behavior
- Mobile-responsive menu with slide-in animation
- Footer with comprehensive navigation and legal links

### Interactive Elements
- FAQ accordion on Support page
- Contact form with client-side validation
- Success/error states for form submission
- Smooth page transitions

### Performance
- Optimized images with lazy loading
- Smooth scroll behavior
- Fast page loads

## 🎨 Color Reference

```css
--bg-light: #F5F1EA       /* Main background */
--bg-warm: #EAE3D8        /* Warm background */
--bg-dark: #111111        /* Dark sections */
--surface-grey: #D9D2C7   /* Surface elements */
--text-dark: #121212      /* Primary text */
--text-light: #F7F5F1     /* Light text */
--accent-warm: #B59A7A    /* Warm accent */
--accent-olive: #78806E   /* Olive accent */
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔗 External Links

All App Store download buttons are currently set to `#` (no-op). To make them functional:

1. Replace `href="#"` with actual App Store URL
2. Update `onClick={(e) => e.preventDefault()}` handlers

Example locations:
- Header component (`/src/app/components/Header.tsx`)
- Footer component (`/src/app/components/Footer.tsx`)
- App Store page (`/src/app/pages/AppStore.tsx`)

## 📧 Email Addresses

Update email addresses in:
- Contact page: `support@benolsen-soundconnect.com` and `business@benolsen-soundconnect.com`
- Privacy page: `privacy@benolsen-soundconnect.com`

## 🚀 Technical Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS v4** for styling
- **Motion** (Framer Motion) for animations
- **Radix UI** for accessible components
- **Lucide React** for icons

## 💡 Notes

- The design follows Bang & Olufsen's premium aesthetic while maintaining unique branding
- All animations are subtle and luxury-focused
- Forms include validation and proper error handling
- The site is fully responsive and optimized for all devices
- Scroll behavior is smooth throughout
- All interactions follow premium UX patterns
