# TBM Machines and Manufacturing Services Website

A professional, production-ready Next.js website for TBM Machines and Manufacturing Services - a leading supplier of Tunnel Boring Machine (TBM) spare parts and components in India.

## 🎯 Status: 98% Complete - Ready to Launch!

**What's Working:**
- ✅ All 7 pages built and functional
- ✅ Contact form with email integration
- ✅ Google Analytics tracking
- ✅ Mobile responsive design
- ✅ SEO optimized

**What's Needed:**
- ⚠️ Add API keys to `.env.local` (15 min) - See [QUICK_START.md](QUICK_START.md)
- 📸 Add product images (optional - can launch without)

## ✨ Features

### Core Features
- ✅ **7 Complete Pages** - Home, Products, Product Details, About, Contact, Blog, FAQ
- ✅ **Product Catalog** - 9 TBM products with filtering and search
- ✅ **Contact Form** - Email integration with Resend API
- ✅ **Form Validation** - Real-time validation with error messages
- ✅ **Google Analytics** - Track visitors and behavior
- ✅ **WhatsApp Integration** - Direct WhatsApp contact buttons
- ✅ **SEO Optimized** - Metadata, sitemap, robots.txt
- ✅ **Mobile Responsive** - Perfect on all devices
- ✅ **Loading States** - Professional loading indicators
- ✅ **Image Zoom** - Product image galleries with zoom
- ✅ **Blog Section** - Ready for content marketing
- ✅ **FAQ Page** - 10 pre-written questions with accordion interface

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Framer Motion** - Animation library
- **Resend** - Email service for contact form
- **Google Analytics** - Visitor tracking

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Resend account (FREE) - [Sign up here](https://resend.com)
- Google Analytics account (FREE) - [Sign up here](https://analytics.google.com)

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Create `.env.local` file:**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=yaseen_md99@yahoo.com
```
*See [QUICK_START.md](QUICK_START.md) for detailed setup instructions*

3. **Run the development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)**

**⚡ See [QUICK_START.md](QUICK_START.md) for 15-minute setup guide!**

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
MTB website/
├── app/
│   ├── layout.tsx              # Root layout with GA
│   ├── page.tsx                # Homepage
│   ├── loading.tsx             # Loading state
│   ├── not-found.tsx           # 404 page
│   ├── products/               # Product catalog
│   │   ├── page.tsx            # Products list
│   │   └── [id]/page.tsx       # Product details
│   ├── about/                  # About page
│   ├── contact/                # Contact form
│   ├── blog/                   # Blog section ✨
│   ├── faq/                    # FAQ page ✨
│   └── api/
│       └── contact/route.ts    # Contact form API
├── components/
│   ├── Header.tsx              # Navigation
│   ├── Footer.tsx              # Footer
│   ├── GoogleAnalytics.tsx     # GA tracking ✨
│   └── Loading.tsx             # Loading spinner ✨
└── public/
    └── images/
        ├── logo.jpeg           # Company logo
        └── products/           # Product images (add here)
```

## ⚙️ Configuration

### Contact Information (Already Updated!)
- ✅ Phone: +91 8985377589
- ✅ Email: yaseen_md99@yahoo.com
- ✅ WhatsApp: +91 8985377589

All contact info is already configured throughout the site!

### Add Product Images

Add 9 product images to `public/images/products/`:
- disc-cutter-17.jpg
- disc-cutter-19.jpg
- main-bearing.jpg
- thrust-bearing.jpg
- cutter-ring.jpg
- seal-kit.jpg
- cutter-block.jpg
- gripper-pad.jpg
- conveyor-blade.jpg

*See [PRODUCT_IMAGES_GUIDE.md](public/images/products/README.md) for details*

### Customize Colors

Edit `tailwind.config.ts` to customize the color scheme (currently professional blue theme).

## 🎯 Optional Enhancements

Ideas for future development:
- Multi-language support (Hindi, Telugu)
- PDF spec sheet downloads
- Customer portal
- Product comparison tool
- Live chat integration
- Testimonials section
- Project portfolio

## 🌐 Deployment

### Recommended: Vercel (FREE)

1. Push to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Import repository
4. Add environment variables
5. Deploy!

**See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for complete deployment instructions.**

### Also Compatible With:
- Netlify
- AWS Amplify
- Any Node.js hosting

## 📚 Documentation

| Guide | Purpose |
|-------|---------|
| **[QUICK_START.md](QUICK_START.md)** | Get running in 15 minutes |
| **[STEP_BY_STEP_SETUP.md](STEP_BY_STEP_SETUP.md)** | Detailed setup instructions |
| **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** | Deploy to production |
| **[CHECKLIST.md](CHECKLIST.md)** | Complete launch checklist |
| **[FINAL_SUMMARY.md](FINAL_SUMMARY.md)** | Complete project overview |
| **[ENHANCEMENTS_ADDED.md](ENHANCEMENTS_ADDED.md)** | All features explained |

## 💰 Cost

**Current: $0/month**
- ✅ Vercel hosting: FREE
- ✅ Resend (email): FREE (3,000 emails/month)
- ✅ Google Analytics: FREE

**Optional:**
- Custom domain: ~$10-15/year

## 🎯 What's Next?

1. **Right Now** - Add API keys (15 min)
   - Get Resend API key
   - Get Google Analytics ID
   - Create `.env.local`
   - Test contact form

2. **Before Launch** - Add product images (optional)
   - Take product photos
   - Add to `public/images/products/`

3. **Launch** - Deploy to Vercel (10 min)
   - Push to GitHub
   - Deploy on Vercel
   - You're live!

## 📞 Contact & Support

**TBM Machines and Manufacturing Services:**
- Email: yaseen_md99@yahoo.com
- Phone: +91 8985377589
- WhatsApp: +91 8985377589

**Resources:**
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Resend Docs: https://resend.com/docs

---

**Built with ❤️ for TBM Machines and Manufacturing Services**
Ready to launch in 15 minutes! 🚀

