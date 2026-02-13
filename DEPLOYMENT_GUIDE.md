# 🚀 Deployment Guide - Launch Your Website

This guide will help you deploy your MTB website to production.

---

## Recommended Platform: Vercel (FREE)

### Why Vercel?
- ✅ **FREE** for personal/small business sites
- ✅ Built by the creators of Next.js (optimized)
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificate (HTTPS)
- ✅ Global CDN (fast worldwide)
- ✅ Easy custom domain setup
- ✅ Automatic preview deployments

---

## Method 1: Deploy with Vercel (Recommended - Easiest)

### Prerequisites:
1. GitHub account (free)
2. Your code pushed to GitHub
3. Vercel account (free)

### Step 1: Push to GitHub

If you haven't already:

```bash
# Navigate to your project
cd "/mnt/c/Users/abdul/Desktop/MTB website"

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - MTB website ready for deployment"

# Create repository on GitHub.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/mtb-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

**Option A - Via Vercel Website (Easiest):**

1. **Go to Vercel:**
   - Visit: https://vercel.com
   - Click "Sign Up" (use GitHub account)

2. **Import Project:**
   - Click "Add New Project"
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** .next (auto-filled)

4. **Add Environment Variables:**
   Click "Environment Variables" and add:

   ```
   Name: NEXT_PUBLIC_GA_ID
   Value: G-XXXXXXXXXX (your actual GA ID)

   Name: RESEND_API_KEY
   Value: re_xxxxxxxxxxxxxxxxxxxxx (your actual key)

   Name: CONTACT_EMAIL
   Value: yaseen_md99@yahoo.com
   ```

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - 🎉 Your site is live!

6. **Get Your URL:**
   - Vercel gives you: `mtb-website-xyz.vercel.app`
   - You can customize the subdomain in settings

**Option B - Via Vercel CLI:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - What's your project's name? mtb-website
# - In which directory is your code? ./
# - Want to override settings? N

# Add environment variables
vercel env add NEXT_PUBLIC_GA_ID
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL

# Deploy to production
vercel --prod
```

---

## Method 2: Deploy with Netlify (Alternative)

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. **Go to Netlify:**
   - Visit: https://netlify.com
   - Click "Sign Up" (use GitHub)

2. **Import Project:**
   - Click "Add new site"
   - Click "Import an existing project"
   - Choose GitHub
   - Select your repository

3. **Configure Build:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

4. **Add Environment Variables:**
   - Go to "Site settings"
   - Click "Environment variables"
   - Add the same 3 variables as Vercel

5. **Deploy:**
   - Click "Deploy site"
   - Your site is live at: `your-site.netlify.app`

---

## Method 3: Deploy with Your Own Server (Advanced)

If you have a VPS or dedicated server:

### Build for Production:

```bash
# Build the app
npm run build

# Start production server
npm start
```

### Using PM2 (recommended for production):

```bash
# Install PM2
npm install -g pm2

# Start app
pm2 start npm --name "mtb-website" -- start

# Save PM2 config
pm2 save

# Set up auto-restart on server reboot
pm2 startup
```

### Nginx Configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Custom Domain Setup

### For Vercel:

1. **Buy a Domain** (optional):
   - GoDaddy, Namecheap, Google Domains, etc.
   - Example: `tbmmachines.com`

2. **Add Domain in Vercel:**
   - Go to your project settings
   - Click "Domains"
   - Enter your domain name
   - Click "Add"

3. **Configure DNS:**
   Vercel will show you DNS records to add:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Add to Domain Provider:**
   - Go to your domain registrar
   - Find DNS settings
   - Add the records Vercel provided
   - Wait 24-48 hours for DNS propagation

5. **SSL Certificate:**
   - Vercel automatically adds HTTPS
   - No action needed!

---

## Post-Deployment Checklist

### Immediate (After Deploy):

- [ ] Visit your live URL
- [ ] Test all pages load correctly
- [ ] Test contact form (send yourself a test message)
- [ ] Check images load properly
- [ ] Test on mobile device
- [ ] Verify Google Analytics is tracking (check Realtime)

### First Week:

- [ ] Monitor contact form emails
- [ ] Check Google Analytics daily
- [ ] Fix any issues reported
- [ ] Share URL with test users

### Ongoing:

- [ ] Add blog posts
- [ ] Update product information
- [ ] Monitor analytics
- [ ] Respond to inquiries promptly

---

## Automatic Deployments

### Set Up (Recommended):

With Vercel/Netlify connected to GitHub:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update products"
   git push
   ```

2. **Automatic Deploy:**
   - Vercel/Netlify detects the push
   - Automatically rebuilds
   - Deploys new version
   - Takes 2-3 minutes

3. **Preview Deployments:**
   - Each push to a branch gets a preview URL
   - Test before merging to main

---

## Environment Variables in Production

### Important:

Your `.env.local` file is NOT uploaded to GitHub (it's in `.gitignore`).

You MUST add environment variables in your deployment platform:

**Vercel/Netlify Dashboard:**
1. Go to Project Settings
2. Environment Variables
3. Add each variable:
   - `NEXT_PUBLIC_GA_ID`
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`

**Without these, contact form won't work in production!**

---

## Monitoring Your Live Site

### Google Analytics:
- Daily visitors
- Popular pages
- Traffic sources
- User behavior

### Vercel/Netlify Analytics:
- Page load times
- Bandwidth usage
- Error rates
- Function calls

### Email Monitoring:
- Check yaseen_md99@yahoo.com regularly
- Respond to inquiries within 24 hours
- Set up email notifications

---

## Common Issues & Solutions

### Issue 1: Site Builds But Shows 404

**Solution:**
- Check if all pages are committed to GitHub
- Verify build completed successfully
- Clear browser cache

### Issue 2: Contact Form Not Working

**Solution:**
- Verify environment variables are set
- Check Vercel/Netlify function logs
- Test Resend API key in dashboard

### Issue 3: Images Not Loading

**Solution:**
- Verify images are in `public/` folder
- Check image paths are correct
- Ensure images are committed to GitHub

### Issue 4: Slow Loading

**Solution:**
- Optimize images (compress, resize)
- Enable caching
- Use Next.js Image component (already done)

---

## Rollback (If Something Breaks)

### Vercel:
1. Go to project deployments
2. Find last working deployment
3. Click "Promote to Production"

### Netlify:
1. Go to "Deploys"
2. Find previous successful deploy
3. Click "Publish deploy"

---

## Performance Optimization

### After Launch:

1. **Image Optimization:**
   - Compress images: https://tinypng.com
   - Use WebP format
   - Lazy load images (already implemented)

2. **Caching:**
   - Vercel handles this automatically
   - No action needed

3. **Analytics:**
   - Monitor Google PageSpeed Insights
   - Aim for 90+ score

---

## Cost Breakdown

### Vercel Free Tier:
- ✅ Unlimited personal projects
- ✅ 100GB bandwidth/month
- ✅ Unlimited team members
- ✅ Free SSL
- ✅ Free previews

**Your site will easily fit in free tier!**

### Costs to Consider:
- **Domain:** $10-15/year (optional)
- **Resend:** FREE for 3,000 emails/month
- **Google Analytics:** FREE
- **Hosting:** FREE (Vercel)

**Total monthly cost: $0** (or $1-2/month if you buy a domain)

---

## Next Steps After Deployment

### Week 1:
- Monitor analytics
- Test all features
- Share with colleagues
- Gather feedback

### Month 1:
- Add blog posts (SEO)
- Update FAQ based on questions
- Optimize based on analytics
- Consider custom domain

### Ongoing:
- Regular content updates
- Monitor competitors
- Track conversions
- Improve based on data

---

## Support & Resources

### Documentation:
- Vercel: https://vercel.com/docs
- Next.js: https://nextjs.org/docs
- Resend: https://resend.com/docs

### Communities:
- Next.js Discord
- Vercel Community
- Stack Overflow

---

## Quick Deploy Checklist

Before you deploy:

- [ ] Code pushed to GitHub
- [ ] All environment variables noted
- [ ] Product images added (or ready to add)
- [ ] Contact email verified
- [ ] Tested locally (npm run build && npm start)
- [ ] .gitignore includes .env.local
- [ ] README updated

Ready to deploy:

- [ ] Created Vercel/Netlify account
- [ ] Connected GitHub repository
- [ ] Added environment variables
- [ ] Triggered first deployment
- [ ] Tested live site
- [ ] Contact form working
- [ ] Google Analytics tracking

Post-deployment:

- [ ] Custom domain added (optional)
- [ ] SSL certificate verified
- [ ] Shared URL with stakeholders
- [ ] Monitoring set up

---

**You're ready to go live! 🚀**

Choose Vercel for the easiest deployment, and you'll be live in 10 minutes!
