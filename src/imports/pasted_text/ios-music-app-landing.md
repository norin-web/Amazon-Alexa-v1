# Technical Design Brief  
## Figma Make Landing Page for an iOS Music App  
### Reference-Driven by Bose Home

## 1. Project Goal

Design a premium promotional landing page in **Figma Make** for an **iOS music listening app** that drives users to the **App Store**.

The site should borrow the **visual language, emotional tone, layout rhythm, and premium retail feel** of the Bose reference, while being fully adapted to an **app promo-landing** format rather than an e-commerce store.

The result must feel:
- premium
- minimal
- modern
- performance-driven
- editorial, not generic
- polished enough to support a paid traffic campaign and organic brand traffic

The final design must clearly communicate:
1. what the app does
2. why it is better
3. what the interface looks like
4. why users should trust it
5. where to download it

---

## 2. Reference Analysis Summary

The Bose reference uses a structure built around:
- a strong **hero-first commercial presentation**
- bold and compact headlines
- large premium imagery
- modular content sections with clear spacing
- repeated but controlled CTAs
- product/story blocks mixed with reassurance content
- dark/light contrast with a very restrained palette
- minimal but high-confidence typography
- clean hierarchy with strong visual breathing room
- trust/reassurance sections near the lower part of the page
- footer utility and support structure  [oai_citation:0‡bose.com](https://www.bose.com/home?srsltid=AfmBOoq2c2dMXhlNeBzu5gnncR1U0zqViqGZVNicIzFlwEynZTg1_i1Y)

The homepage also mixes:
- promotional banners,
- editorial/product storytelling,
- “trending products” cards,
- focused callout sections,
- “Why buy from Bose” trust modules,
- and sign-up/footer utility areas.  [oai_citation:1‡bose.com](https://www.bose.com/home?srsltid=AfmBOoq2c2dMXhlNeBzu5gnncR1U0zqViqGZVNicIzFlwEynZTg1_i1Y)

This means the landing page we design should not feel like a single flat scroll. It should feel like a **premium sequence of content blocks**, where each section has a clear role and momentum.  [oai_citation:2‡bose.com](https://www.bose.com/home?srsltid=AfmBOoq2c2dMXhlNeBzu5gnncR1U0zqViqGZVNicIzFlwEynZTg1_i1Y)

---

## 3. Core Design Direction

### 3.1 Overall Creative Direction

Use a **premium audio-tech aesthetic** inspired by Bose:
- strong black / white / soft gray foundation
- restrained accent usage
- large-scale visual confidence
- luxury-tech minimalism
- clean surfaces
- precise spacing
- understated elegance instead of decorative noise

The mood should feel like:
- immersive sound
- focus
- control
- clarity
- emotional connection to music
- modern premium hardware/software ecosystem

### 3.2 Design Personality

The interface should feel:
- **confident, not loud**
- **minimal, not empty**
- **premium, not cold**
- **editorial, not corporate**
- **commercial, not cluttered**

### 3.3 What to Avoid

Do **not** design this like:
- a startup template
- a SaaS dashboard site
- a playful lifestyle landing page
- an over-animated gradient-heavy concept
- an App Store screenshot dump on a blank page
- an e-commerce clone with fake product cards

This is a **premium app brand landing page**, not a gadget shop.

---

## 4. Brand & Visual System

### 4.1 Color System

Base palette:
- **Primary background:** deep black / graphite
- **Secondary background:** warm white / soft off-white
- **Surface gray:** muted light gray for content separation
- **Primary text on dark:** white
- **Primary text on light:** near-black
- **Secondary text:** neutral medium gray
- **Accent color:** one restrained accent only, ideally tied to the app brand

Accent usage should be sparse. Bose uses strong restraint and lets typography, imagery, and spacing do most of the work. Promotional emphasis exists, but the overall visual system stays controlled.  [oai_citation:3‡bose.com](https://www.bose.com/home?srsltid=AfmBOoq2c2dMXhlNeBzu5gnncR1U0zqViqGZVNicIzFlwEynZTg1_i1Y)

### 4.2 Typography

The Bose reference visually suggests a **modern neo-grotesk / grotesk sans-serif system** with:
- compact bold headlines
- clean body copy
- high readability
- slightly technical but premium character

Because the public page content does not expose a trustworthy official font spec in the accessible page text, the font recommendation below is a **design inference**, not a claim about Bose’s exact internal brand font:

**Recommended font direction for Figma:**
- **Primary option:** Neue Haas Grotesk Display / Text
- **Alternative:** Helvetica Now
- **Fallback:** Inter or Manrope only if licensing or environment requires it

Recommended usage:
- H1/H2: bold, compact, tight optical alignment
- body: regular/medium, highly readable
- labels/eyebrows: uppercase or small caps with disciplined tracking
- CTA labels: medium to bold, very clear

Typography must be one of the main style carriers. It should do a lot of the premium work.

### 4.3 Corners, Shapes, and Surfaces

Use:
- mostly rectangular or softly rounded cards
- restrained radius
- sharp composition lines
- minimal visual gimmicks
- premium surface contrast instead of decorative borders

Avoid excessive glassmorphism, oversized blur effects, neon edges, floating blobs, or over-rounded consumer-app clichés.

### 4.4 Image Treatment

Visuals should feel:
- cinematic
- premium
- quiet
- intentional
- contrast-rich
- product-first

Use large, elegant compositions.
Do not overload sections with too many competing images.

For app-related sections, the screenshots must be treated as hero assets, not as small supporting thumbnails.

---

## 5. UX Principles

## 5.1 No Dead-End Flows

This is mandatory.

There must be **no dead-end flows** anywhere in the design.

That means:
- every CTA must lead somewhere meaningful
- every visual teaser must connect to either:
  - App Store download,
  - an anchored content section,
  - a modal/gallery,
  - feature explanation,
  - FAQ,
  - or trust/conversion content
- users should never click/tap into nothing
- no “Learn more” buttons without a real destination
- no carousel arrows unless the carousel is real
- no pseudo-navigation items that do not map to real sections
- no isolated cards that visually imply interaction but do nothing

Every section should answer at least one of these:
- Why should I care?
- What does the app do?
- How does it look?
- Why should I trust it?
- How do I get it?

## 5.2 Conversion Logic

The page should create a smooth funnel:

1. **Hook**  
2. **Value proposition**  
3. **Visual proof through app UI**  
4. **Feature understanding**  
5. **Trust/reassurance**  
6. **Final App Store conversion**

The user should always know the next best action.

## 5.3 Navigation Logic

Top navigation should be simple and useful.

Recommended header items:
- Features
- Interface
- Why It’s Better
- Reviews / Trust
- FAQ
- Download

Header behavior:
- sticky on scroll
- compact on desktop
- simplified on mobile
- primary CTA always visible: **Download on the App Store**

Avoid overbuilding navigation. This is a landing page, not a content portal.

## 5.4 Screenshot UX Requirement

The site must intentionally include several sections where **real app interface screenshots** can be inserted.

These areas must not feel like placeholders. They must be designed into the UX architecture from the beginning.

The screenshots should appear in at least these roles:
- hero device presentation
- feature explanation
- interface gallery
- step-by-step usage explanation
- proof of polish / usability

Each screenshot block must support:
- portrait iPhone screens
- clean framing
- sufficient safe margins
- optional captions
- optional zoom/lightbox behavior

---

## 6. Required Site Structure

## 6.1 Hero Section

Purpose:
- immediate emotional hook
- instant understanding
- first conversion point

Must include:
- bold headline
- short supporting copy
- iPhone mockup with real app screen
- App Store CTA
- optional secondary CTA: “See how it works”
- subtle premium background treatment

Content direction:
- focus on music experience, immersion, convenience, quality, and modern UX

Design direction:
- large-scale, cinematic, premium
- strong contrast
- controlled composition
- no clutter

The Bose homepage opens with large promotional storytelling and strong call-to-action framing; this landing page should translate that same confidence into an app-first hero.  [oai_citation:4‡bose.com](https://www.bose.com/home?srsltid=AfmBOoq2c2dMXhlNeBzu5gnncR1U0zqViqGZVNicIzFlwEynZTg1_i1Y)

## 6.2 Key Value Props Section

Purpose:
- quickly explain why the app matters

Format options:
- 3 to 4 horizontally aligned value cards
- or editorial strip with icon + text pairs

Example content areas:
- high-quality listening experience
- smart playlists / discovery
- offline or background listening
- intuitive player and library management

This section should be compact and scannable.

## 6.3 Interface Showcase Section

Purpose:
- show the actual product clearly

This is one of the most important UX sections.

Must include:
- large iPhone mockups
- real interface screens
- descriptive captions
- visual focus on core app flows

Possible layout:
- one featured screenshot + supporting thumbnails
- alternating image/text blocks
- horizontal gallery with snap logic
- editorial showcase grid

Important:
The screenshots must be central, not decorative.

## 6.4 Feature Storytelling Section

Purpose:
- explain main capabilities through a sequence of premium content modules

Recommended structure:
- alternating text and screenshot/image layout
- dark/light background alternation for rhythm
- one feature per block

Each block should include:
- eyebrow label
- concise headline
- short explanatory text
- visual proof
- contextual CTA if needed

This mirrors how the Bose homepage uses multiple themed callout sections after the hero and trending area to continue the story in digestible blocks.  [oai_citation:5‡bose.com](https://www.bose.com/home?srsltid=AfmBOoq2c2dMXhlNeBzu5gnncR1U0zqViqGZVNicIzFlwEynZTg1_i1Y)

## 6.5 “Why This App” / Comparison Section

Purpose:
- help users understand differentiation

Possible formats:
- comparison table
- visual side-by-side
- premium checklist section

Keep it elegant and not overly technical.

Use this section to frame the app as:
- more intuitive
- cleaner
- more immersive
- better organized
- more premium

## 6.6 Trust / Reassurance Section

Purpose:
- reduce friction before conversion

Inspired by the logic of Bose’s “Why buy from Bose” section, which highlights return policy, price match, shipping, and member perks as reassurance content.  [oai_citation:6‡bose.com](https://www.bose.com/home?srsltid=AfmBOoq2c2dMXhlNeBzu5gnncR1U0zqViqGZVNicIzFlwEynZTg1_i1Y)

For the music app, adapt this pattern into:
- easy start
- privacy-friendly
- clear subscription logic if relevant
- polished iOS experience
- trusted by users
- regular updates / reliability

Possible content cards:
- Clean iPhone-first experience
- Fast onboarding
- Privacy-conscious design
- Favorite playlists and listening made simple
- Transparent premium access
- Ongoing support / updates

This section should feel calm and confidence-building.

## 6.7 Reviews / Social Proof Section

Purpose:
- show credibility

Possible elements:
- user quotes
- rating summary
- editorial style testimonials
- “Loved by listeners” style module

Design should remain premium and restrained.
No fake badges, noisy stars everywhere, or low-quality review-wall patterns.

## 6.8 FAQ Section

Purpose:
- remove objections
- support conversion
- prevent dead ends

Recommended questions:
- Is the app free to download?
- Does it require an account?
- Does it work offline?
- Is there a premium version?
- Which devices are supported?
- How do I start listening?

Use accordion behavior.
Ensure it is accessible and easy to scan.

## 6.9 Final CTA Section

Purpose:
- close the page strongly

Must include:
- strong final headline
- one concise supporting sentence
- App Store button
- optional secondary trust note

This section should feel decisive, clean, and conversion-focused.

## 6.10 Footer

Purpose:
- utility without clutter

Include:
- logo
- App Store CTA
- Privacy Policy
- Terms of Use
- Support / Contact
- optional social links

The Bose reference footer is utility-rich and brand-consistent; our version should be simpler, but still feel complete and intentional.  [oai_citation:7‡bose.com](https://www.bose.com/home?srsltid=AfmBOoq2c2dMXhlNeBzu5gnncR1U0zqViqGZVNicIzFlwEynZTg1_i1Y)

---

## 7. Layout & Grid

### 7.1 Desktop

Use a strong modern grid with generous spacing.
Target feel:
- wide
- balanced
- premium
- modular

Recommended:
- max content width around 1280–1440 px
- generous horizontal padding
- large vertical rhythm between sections

### 7.2 Mobile

Mobile is critical.
The landing page must be designed responsively, not just reduced.

Mobile priorities:
- compact sticky CTA
- headline readability
- screenshot legibility
- fast section comprehension
- clean stacking
- no cramped cards

### 7.3 Spacing Philosophy

Spacing should do a lot of brand work.
Use:
- large section spacing
- confident negative space
- disciplined alignment
- restrained density

The page should breathe.

---

## 8. Components to Design in Figma

Required components:
- sticky header
- App Store CTA button
- secondary ghost button
- hero media block
- screenshot frame system
- feature content module
- trust/reassurance card
- review/testimonial card
- FAQ accordion
- footer links
- section label / eyebrow style
- device mockup component
- responsive content cards

All components should be prepared for reuse and responsive behavior.

---

## 9. Motion & Interaction Direction

Figma Make prototype should suggest motion logic, even if not fully production-animated.

Recommended motion style:
- subtle
- smooth
- premium
- restrained

Suggested interactions:
- gentle fade/slide on scroll reveal
- screenshot hover emphasis
- clean accordion expansion
- sticky header transformation on scroll
- anchor scroll behavior
- lightbox or focused screenshot expansion if used

Avoid:
- flashy parallax
- noisy transitions
- excessive floating animations
- gimmicky movement

Motion should reinforce polish, not distract.

---

## 10. Content Tone

Copy tone should be:
- concise
- premium
- emotionally controlled
- user-centered
- modern
- music-first

Avoid:
- exaggerated marketing claims
- startup buzzwords
- technical overload
- loud hype language

The tone should sound like a premium consumer tech brand.

---

## 11. Deliverables Required from Designer

The Figma Make output should include:

### 11.1 Main Screens
- desktop landing page
- tablet adaptation
- mobile adaptation

### 11.2 UI States
- default header
- sticky header
- CTA hover states
- FAQ open/closed states
- screenshot gallery states if applicable

### 11.3 Design System Lite
- color tokens
- typography styles
- spacing system
- buttons
- cards
- grid rules
- image treatment rules
- icon style direction

### 11.4 Screenshot Placement Logic
Explicitly show where app screenshots will be inserted:
- hero
- interface showcase
- feature modules
- usage walkthrough

This is mandatory.

---

## 12. Accessibility & Usability Requirements

The design must:
- maintain strong contrast
- keep text readable on dark backgrounds
- support keyboard-friendly structure in the intended future build
- avoid tiny labels over complex imagery
- keep CTA clarity high
- ensure mobile tap targets are comfortable
- avoid hidden critical information

Premium must not reduce usability.

---

## 13. Success Criteria

The design is successful if:
- it clearly feels inspired by Bose without becoming a copy
- it looks premium and conversion-ready
- it presents the app UI as a core selling asset
- it avoids all dead-end flows
- it is easy to scroll and understand
- it gives a strong App Store conversion path
- it works equally well for marketing traffic and brand traffic
- it feels like a high-end music product, not a generic mobile app site

---

## 14. Final Quality Control Checklist

Before finalizing, the designer must verify:

- Does the page communicate the app’s purpose in the first screen?
- Is the App Store CTA always easy to find?
- Are there any decorative sections with no UX purpose?
- Are there any fake or dead-end interactive cues?
- Are screenshots integrated meaningfully, not randomly?
- Does the layout feel premium through spacing and typography?
- Does mobile still feel premium and readable?
- Is the trust/reassurance layer strong enough before final conversion?
- Is the footer complete enough to avoid an unfinished impression?
- Does the design feel closer to premium audio-tech editorial design than to a generic SaaS landing page?

---

## 15. Refined Creative Interpretation Notes

This design should **translate**, not copy, the Bose reference.

What should be translated:
- premium confidence
- high-contrast visual discipline
- large-format storytelling
- modular luxury-tech layout
- restrained typography
- strong product presentation
- reassurance content architecture
- polished retail-grade UX clarity

What should not be copied literally:
- store taxonomy
- shopping mechanics
- hardware merchandising patterns
- unnecessary commerce structure

The final landing page should feel like:
**“a premium music product brand site for an iOS app”**.

That is the target.