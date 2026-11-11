# Jamaica Jerk Spot — Website

Authentic Jamaican food truck, events & catering · Reno/Sparks, NV · (775) 470-3704

Static site (HTML/CSS/JS, no build step) plus one Vercel serverless function for the booking form.

## Deploy (Vercel)
1. Import this repo in Vercel → Framework preset **Other** → no build command, output = root.
2. For the booking form to email the business, add these Environment Variables:
   - `RESEND_API_KEY` – from https://resend.com
   - `CONTACT_TO_EMAIL` – the business inbox (comma-separate for several)
   - `CONTACT_FROM_EMAIL` – optional verified sender, e.g. `Jamaica Jerk Spot <bookings@yourdomain.com>`
   Until these are set, the form falls back to a pre-filled text message to 775-470-3704.

## Weekly updates (2 minutes)
Everything lives at the top of `app.js`:
- **`SCHEDULE`** – one line per stop: `date` (YYYY-MM-DD), `kind` (`truck` or `trailer`), `title`, `place`, `start`/`end` (24h, Reno time). Use `private: true` for closed events.
  The "Open now / opens in / next stop" cards and the hero pill update automatically. When all stops have passed, the site points visitors to Instagram.
- **`MENU`** – names, prices, photos and descriptions per tab.
- **`LINKS`** – DoorDash, Instagram, Facebook, TikTok, Yelp, Linktree.

## Features
- Logo-based theme (island gold, flag green, brush-stroke black), animated hero with truck video
- Tabbed menu with real photos and prices
- **Build Your Plate** – pick mains/rice/side, matches the real combo price, texts the order to the truck
- **Find the Truck** – live "open now" status for the Food Truck and Food Trailer, weekly list with directions
- **Flavor Match** quiz, tap-to-play reels, Patois flip cards
- Booking/contact form (event, catering, question) with guest slider and dish picks
- Mobile quick-action dock (Call · Find · DoorDash · Book), SEO + schema.org markup

Built by [Nexora Digital](https://www.nexoradigital.live).
