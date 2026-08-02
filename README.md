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

- **Contact info:** Update email in `components/Contact.tsx` and `components/Footer.tsx` (search for `aaronscustomcarpentry.com`). The public site does not display a phone number; visitors use `/contact`.
- **Images:** Project photos live in `public/images/`. To use your headshot in About, copy it to `public/images/aaron-headshot.png`. To show the sliders and kitchen project photos in the gallery, copy the PNGs from this project’s `assets` folder (in Cursor’s project data) into `public/images/` as `aaron-sliders.png` and `aaron-kitchen.png`. Update `components/Hero.tsx` or `components/Gallery.tsx` if you add or rename other images.
- **Contact form:** The form lives on `/contact` and posts to `/api/contact`, which emails the submitted fields (name, email, phone, message) via [Resend](https://resend.com).

### Contact email setup

1. Create a free Resend account and API key.
2. Copy `.env.example` to `.env.local` and fill in:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (defaults to `aaron@aaronscustomcarpentry.com`)
   - `CONTACT_FROM_EMAIL` (use `onboarding@resend.dev` for testing; for production, verify your domain in Resend and use an address on that domain)
3. On Vercel/hosting, add the same env vars in the project settings.
4. Restart the dev server after changing env vars.

When someone submits the form, you get an email with their fields and can reply directly (Reply-To is set to their address).

## Tech

- Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Resend.
