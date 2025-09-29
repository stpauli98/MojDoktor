# DoktorOnline Project Overview

## Purpose
Landing page for DoktorOnline - medical platform connecting patients with doctors in Bosnia & Herzegovina. Positioned as "Booking.com for doctors" with waitlist signup functionality.

## Tech Stack
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS + Radix UI components  
- **Backend**: Google Sheets API + Gmail for waitlist management
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm (based on pnpm-lock.yaml)

## Key Features
- Responsive landing page with hero section
- Email waitlist signup with Google Sheets integration
- Email notifications via Gmail
- Toast notifications for user feedback
- Mobile-responsive design

## Project Structure
```
├── app/              # Next.js 14 app directory
├── components/       # React components (ui/ and sections/)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and API integrations
├── styles/           # Global styles
└── public/           # Static assets
```