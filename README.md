# V Heal Physical Therapy Services Website

One-page React website for V Heal Physical Therapy Services, styled from the provided brochure logo and color palette.

## Stack

- React with Vite
- Plain CSS for the custom responsive design
- lucide-react for interface icons
- Netlify Forms for contact submissions

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build output is created in `dist/`.

## Contact Form Email Delivery

The contact form is wired for Netlify Forms. After deploying to Netlify:

1. Open the Netlify project dashboard.
2. Go to Forms and confirm the `contact` form is detected.
3. Add an email notification for `vheallpt@gmail.com`.

This avoids placing private email or SMTP credentials in browser code.
# vheal_website
