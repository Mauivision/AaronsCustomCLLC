# Aaron's Custom Carpentry LLC — Landing Page

One-page site for Aaron's Custom Carpentry LLC: painting, flooring, kitchens, bathrooms, and tongue-and-groove walls and ceilings. Design and installations for any size project.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Customize

- **Contact info:** Update phone and email in `components/Contact.tsx` and `components/Footer.tsx` (search for `555` and `aaronscustomcarpentry.com`).
- **Images:** Project photos live in `public/images/`. To use your headshot in About, copy it to `public/images/aaron-headshot.png`. To show the sliders and kitchen project photos in the gallery, copy the PNGs from this project’s `assets` folder (in Cursor’s project data) into `public/images/` as `aaron-sliders.png` and `aaron-kitchen.png`. Update `components/Hero.tsx` or `components/Gallery.tsx` if you add or rename other images.
- **Contact form:** The form posts to `/api/contact`. To send real emails, add your provider (e.g. Resend, SendGrid) in `app/api/contact/route.ts`.

## Tech

- Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS.
