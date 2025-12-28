# ✅ Setup Checklist

## 🔴 Critical (Must Do Before Launch)

### 1. Contact Form Email Service
- [ ] Sign up for Resend: https://resend.com
- [ ] Get API key from Resend dashboard
- [ ] Create `.env.local` file
- [ ] Add `RESEND_API_KEY=re_xxxxx` to `.env.local`
- [ ] Add `CONTACT_EMAIL=yaseen_md99@yahoo.com` to `.env.local`
- [ ] Test contact form submission
- [ ] Verify email is received

**Status**: ⚠️ Not configured yet  
**Time**: 5-10 minutes  
**Guide**: See `RESEND_SETUP.md`

---

### 2. Google Analytics
- [ ] Sign up for Google Analytics: https://analytics.google.com
- [ ] Create property for your website
- [ ] Get Measurement ID (format: G-XXXXXXXXXX)
- [ ] Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to `.env.local`
- [ ] Restart dev server
- [ ] Verify tracking works (check GA dashboard)

**Status**: ⚠️ Component ready, needs GA ID  
**Time**: 5 minutes  
**Note**: Component already created, just needs ID

---

### 3. Product Images
- [ ] Take/collect product photos
- [ ] Optimize images (resize, compress)
- [ ] Add to `public/images/products/` with correct names:
  - `disc-cutter-17.jpg`
  - `disc-cutter-19.jpg`
  - `main-bearing.jpg`
  - `thrust-bearing.jpg`
  - `cutter-ring.jpg`
  - `seal-kit.jpg`
  - `cutter-block.jpg`
  - `gripper-pad.jpg`
  - `conveyor-blade.jpg`

**Status**: ⚠️ Placeholder images currently  
**Time**: 30-60 minutes (when photos available)  
**Guide**: See `PRODUCT_IMAGES_GUIDE.md`

---

## 🟡 Important (Should Do)

### 4. Domain & Email Setup
- [ ] Register domain name (if not done)
- [ ] Set up email with domain (optional)
- [ ] Verify domain in Resend (for production)
- [ ] Update sender email in `app/api/contact/route.ts`

**Status**: ⏳ Optional  
**Time**: 15-30 minutes

---

### 5. Content Review
- [ ] Review all text on homepage
- [ ] Check product descriptions match actual products
- [ ] Verify company information in About page
- [ ] Review contact information (phone, email, address)
- [ ] Check all specifications are accurate

**Status**: ⏳ Needs review  
**Time**: 30 minutes

---

### 6. Testing
- [ ] Test all pages load correctly
- [ ] Test on mobile device (or browser dev tools)
- [ ] Test contact form submission
- [ ] Test WhatsApp links (opens WhatsApp with your number)
- [ ] Test product filtering (Cutters, Bearings, Spares)
- [ ] Test product detail pages
- [ ] Check all navigation links work
- [ ] Verify logo displays correctly
- [ ] Test 404 page (visit a non-existent URL)

**Status**: ⏳ Ready to test  
**Time**: 15 minutes

---

## 🟢 Optional (Nice to Have)

### 7. SEO Enhancements
- [ ] Update `app/sitemap.ts` with actual domain
- [ ] Update `public/robots.txt` with actual domain
- [ ] Submit sitemap to Google Search Console
- [ ] Add structured data (Schema.org markup)

**Status**: ⏳ Optional  
**Time**: 15 minutes

---

### 8. Additional Features
- [ ] Add social media links (if you have profiles)
- [ ] Add favicon (logo as browser icon)
- [ ] Add testimonials section
- [ ] Add blog/news section
- [ ] Add FAQ page

**Status**: ⏳ Optional  
**Time**: Varies

---

## 📋 Quick Setup Commands

### Create .env.local file:
```bash
# Copy the example file
copy .env.local.example .env.local

# Then edit .env.local and add your actual values
```

### Required .env.local content:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=yaseen_md99@yahoo.com
```

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] All critical items above completed
- [ ] Test contact form works
- [ ] Test on multiple devices
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Review all content
- [ ] Set up production environment variables
- [ ] Configure domain DNS
- [ ] Set up SSL certificate (usually automatic on Vercel/Netlify)

---

## 📊 Current Status

| Item | Status | Priority |
|------|--------|----------|
| Contact Form Email | ⚠️ Needs Setup | 🔴 Critical |
| Google Analytics | ⚠️ Needs GA ID | 🔴 Critical |
| Product Images | ⚠️ Placeholders | 🔴 Critical |
| Content Review | ⏳ Pending | 🟡 Important |
| Testing | ⏳ Ready | 🟡 Important |
| Domain Setup | ⏳ Optional | 🟢 Optional |

---

## 🎯 Next Steps

1. **Set up Resend** (5-10 min) - See `RESEND_SETUP.md`
2. **Add Google Analytics ID** (5 min)
3. **Test everything** (15 min)
4. **Add product images** (when available)
5. **Deploy!** 🚀

---

**You're almost there! Just need to configure email and add your GA ID!** ✨

