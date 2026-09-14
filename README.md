# Charles n Charge - Business Website

## Overview
A fully functional business website for Charles n Charge, a professional lawn and property maintenance company serving Grant County, Indiana.

**Location:** 1708 W Euclid Ave, Marion, IN 46952  
**Phone:** 765-661-6867  
**Email:** finedeals765@gmail.com

## Services
1. Lawn Maintenance
2. Pressure Washing
3. Handyman Services
4. Moving & Hauling
5. Pest Control
6. Tree Trimming
7. Stump Grinding

## Features
✅ Professional Business Website  
✅ Service Showcase  
✅ Before & After Gallery  
✅ Customer Reviews Section  
✅ Invoice Maker Tool  
✅ Calculator Tool  
✅ Contact Form  
✅ Mobile Responsive  
✅ Neon Green, Black & White Design  
✅ SEO Optimized  

## Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Icons:** React Icons
- **PDF Generation:** jsPDF
- **Deployment:** Vercel

## Installation

```bash
# Clone the repository
git clone https://github.com/charlesbrady33/charles-n-charge.git
cd charles-n-charge

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## Pages

### Home (`/`)
Main landing page with:
- Hero section
- All 7 services
- About section
- Before & After gallery
- Customer reviews
- Contact form

### Invoice Maker (`/invoice-maker`)
Fully functional invoice generator with:
- Client information input
- Line item management
- PDF download capability
- Professional formatting

### Calculator (`/calculator`)
Feature-rich calculator with:
- Basic operations (+, -, ×, ÷)
- Decimal support
- Clear and backspace functions
- Professional UI

## Deployment to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import this repository
4. Connect your domain `charlesncharge.com`
5. Deploy!

## Domain Setup

1. Register domain at your registrar (Namecheap, GoDaddy, Google Domains, etc.)
2. Update nameservers to Vercel's:
   - `ns1.vercel.com`
   - `ns2.vercel.com`
3. Add domain to Vercel project settings
4. Vercel will auto-generate SSL certificate

## Environment Variables
Create `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=https://charlesncharge.com
```

## File Structure
```
charles-n-charge/
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js (Home)
│   ├── invoice-maker.js
│   └── calculator.js
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── Services.js
│   ├── About.js
│   ├── Gallery.js
│   ├── Reviews.js
│   ├── Contact.js
│   └── Footer.js
├── styles/
│   └── globals.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── vercel.json
```

## Customization

### Change Colors
Edit `tailwind.config.js` to modify the neon-green color:
```js
'neon-green': '#39FF14', // Change this hex code
```

### Add More Services
Edit `components/Services.js` and add to the services array.

### Update Business Info
Update contact info in `components/Header.js`, `components/About.js`, and `components/Contact.js`

### Add Real Images
Add image files to `public/images/` and reference in components.

## SEO Optimization
- Meta tags configured in `pages/_document.js`
- Semantic HTML structure
- Mobile responsive design
- Fast loading with Next.js

## Support
For questions or issues, contact: finedeals765@gmail.com

## License
All rights reserved © 2024 Charles n Charge
