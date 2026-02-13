# 🚀 Complete Setup Guide - Step by Step

Follow these steps in order to get your website 100% functional!

---

## Step 1: Get Resend API Key (5 minutes)

### What is Resend?
Resend is a free email service that will send contact form submissions to your email.

### How to Get Your API Key:

1. **Go to Resend**
   - Open: https://resend.com
   - Click "Start Building" or "Sign Up"

2. **Create Free Account**
   - Sign up with your email (yaseen_md99@yahoo.com or any email)
   - Verify your email address
   - Complete registration

3. **Get Your API Key**
   - After login, you'll see the dashboard
   - Click on "API Keys" in the left menu
   - Click "Create API Key"
   - Name it: "TBM Machines Website Contact Form"
   - Copy the key (starts with `re_`)
   - **IMPORTANT:** Save this key somewhere safe - you can only see it once!

4. **Verify Your Sending Email**
   - Go to "Domains" in left menu
   - For now, you can use Resend's test domain (onboarding@resend.dev)
   - Later, you can add your own domain for professional emails

**Your API key looks like:**
```
re_123456789abcdefghijklmnopqrstuvwxyz
```

---

## Step 2: Get Google Analytics ID (5 minutes)

### What is Google Analytics?
It tracks visitors to your website - how many people visit, which pages they view, etc.

### How to Get Your GA ID:

1. **Go to Google Analytics**
   - Open: https://analytics.google.com
   - Sign in with your Google account

2. **Create Property** (if you don't have one)
   - Click "Admin" (gear icon at bottom left)
   - Click "Create Property"
   - Property name: "TBM Machines and Manufacturing Services Website"
   - Select time zone: India
   - Currency: INR
   - Click "Next"

3. **Business Details**
   - Industry: Manufacturing
   - Business size: Small
   - Click "Create"

4. **Get Measurement ID**
   - After creation, you'll see "Data Streams"
   - Click "Web"
   - Website URL: (your domain or localhost for testing)
   - Stream name: "TBM Machines Website"
   - Click "Create stream"
   - **Copy the Measurement ID** (starts with `G-`)

**Your GA ID looks like:**
```
G-XXXXXXXXXX
```

---

## Step 3: Create .env.local File (2 minutes)

### What is .env.local?
It's a file that stores your secret keys. It's NOT uploaded to GitHub (already in .gitignore).

### How to Create It:

**Option A - Using Terminal (if you're comfortable):**
```bash
cd "/mnt/c/Users/abdul/Desktop/TBM website"
nano .env.local
```

Then paste:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=yaseen_md99@yahoo.com
```

Press `Ctrl+X`, then `Y`, then `Enter` to save.

**Option B - Using File Explorer (easier):**
1. Open File Explorer
2. Navigate to: `C:\Users\abdul\Desktop\TBM website`
3. Right-click → New → Text Document
4. Name it: `.env.local` (yes, with the dot at the start)
5. If Windows complains about the filename, that's OK, click Yes
6. Right-click the file → Open with → Notepad
7. Paste this:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=yaseen_md99@yahoo.com
```
8. **Replace the X's with your actual keys:**
   - Replace `G-XXXXXXXXXX` with your GA Measurement ID
   - Replace `re_xxxxxxxxxxxxxxxxxxxxx` with your Resend API key
   - Email should already be correct (yaseen_md99@yahoo.com)
9. Save and close

### Example of completed .env.local:
```
NEXT_PUBLIC_GA_ID=G-ABC123XYZ789
RESEND_API_KEY=re_abcdef123456789xyz
CONTACT_EMAIL=yaseen_md99@yahoo.com
```

---

## Step 4: Restart the Server (1 minute)

### Why Restart?
Next.js only reads .env.local when it starts, so you need to restart.

### How to Restart:

1. **Stop the current server:**
   - Go to your terminal where `npm run dev` is running
   - Press `Ctrl + C`
   - Wait for it to stop

2. **Start it again:**
   ```bash
   npm run dev
   ```

3. **Wait for it to compile:**
   - You'll see: "✓ Ready in X seconds"
   - Then: "○ Compiling / ..."
   - Finally: "✓ Compiled / in X seconds"

4. **Open your browser:**
   - Go to: http://localhost:3000

---

## Step 5: Test Everything (5 minutes)

### Test Contact Form:

1. **Go to Contact Page:**
   - http://localhost:3000/contact

2. **Fill Out the Form:**
   - Name: Test User
   - Email: your-email@example.com
   - Phone: 9876543210
   - Company: Test Company
   - Subject: Product Inquiry
   - Message: This is a test message from my contact form

3. **Submit:**
   - Click "Send Message"
   - You should see "Thank you! Your message has been sent successfully"

4. **Check Your Email:**
   - Check yaseen_md99@yahoo.com
   - You should receive an email from onboarding@resend.dev
   - Email will contain all the form details

**If email doesn't arrive:**
- Check spam folder
- Wait 2-3 minutes
- Verify your Resend API key is correct
- Check terminal for any errors

### Test Google Analytics:

1. **Check Real-Time Reports:**
   - Go to: https://analytics.google.com
   - Click on your property
   - Go to "Reports" → "Realtime"

2. **Visit Your Website:**
   - Open: http://localhost:3000
   - Click around different pages

3. **See Yourself:**
   - You should see "1 user" in the Realtime report
   - You'll see which pages you're viewing

**Note:** Full analytics data takes 24-48 hours to appear in standard reports.

---

## Step 6: Add Product Images (When Available)

### Where to Add Images:

```
TBM website/
  └── public/
      └── images/
          └── products/
              ├── disc-cutter-17.jpg
              ├── disc-cutter-19.jpg
              ├── main-bearing.jpg
              ├── thrust-bearing.jpg
              ├── cutter-ring.jpg
              ├── seal-kit.jpg
              ├── cutter-block.jpg
              ├── gripper-pad.jpg
              └── conveyor-blade.jpg
```

### Image Requirements:
- **Format:** JPG or PNG
- **Size:** 800x600 pixels (recommended)
- **File size:** Under 500KB each
- **Names:** Must match exactly (lowercase, hyphens)

### How to Add:
1. Rename your photos to match the names above
2. Copy them to `public/images/products/` folder
3. Refresh your website - images appear automatically!

---

## Step 7: Deploy to Production (10 minutes)

### Recommended: Vercel (Free & Easy)

1. **Create Vercel Account:**
   - Go to: https://vercel.com
   - Click "Sign Up"
   - Sign up with GitHub (recommended) or email

2. **Install Vercel CLI** (optional - or use web):
   ```bash
   npm install -g vercel
   ```

3. **Deploy via Web** (easiest):
   - Push your code to GitHub first
   - In Vercel dashboard, click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - **Important:** Add environment variables:
     - `NEXT_PUBLIC_GA_ID`
     - `RESEND_API_KEY`
     - `CONTACT_EMAIL`
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live! 🎉

4. **Get Your URL:**
   - Vercel gives you: `your-site.vercel.app`
   - You can add a custom domain later

---

## Troubleshooting

### Contact Form Not Sending Emails:

**Check 1:** Verify .env.local file exists
```bash
ls -la .env.local
```

**Check 2:** Verify Resend API key is correct
- Check for spaces or extra characters
- Key should start with `re_`

**Check 3:** Check terminal for errors
- Look for red error messages
- Common error: "RESEND_API_KEY is not defined"

**Check 4:** Restart server after changing .env.local
```bash
# Stop: Ctrl+C
npm run dev
```

### Google Analytics Not Tracking:

**Check 1:** Verify GA ID in .env.local
- Should start with `G-`
- No spaces or quotes

**Check 2:** Wait 24-48 hours for data
- Realtime works immediately
- Full reports take time

**Check 3:** Check browser console
- Open DevTools (F12)
- Look for gtag errors

### Images Not Showing:

**Check 1:** Verify image filenames match exactly
- Lowercase, hyphens, .jpg extension

**Check 2:** Check image location
```bash
ls public/images/products/
```

**Check 3:** Clear browser cache
- Hard refresh: Ctrl+Shift+R

---

## Quick Reference

### File Locations:
```
.env.local                          ← Your API keys (in project root)
public/images/products/             ← Product images go here
app/api/contact/route.ts           ← Email API endpoint
components/GoogleAnalytics.tsx     ← GA component
```

### Important URLs:
- Website: http://localhost:3000
- Resend Dashboard: https://resend.com/home
- Google Analytics: https://analytics.google.com
- Vercel: https://vercel.com

### Environment Variables:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=yaseen_md99@yahoo.com
```

---

## What's Next?

After completing all steps above:

### Immediate:
- ✅ Test contact form thoroughly
- ✅ Add product images
- ✅ Review all content

### Before Launch:
- ✅ Test on mobile device
- ✅ Check all links work
- ✅ Verify email address is correct

### After Launch:
- ✅ Monitor Google Analytics
- ✅ Check contact form emails
- ✅ Add blog posts
- ✅ Update FAQ as needed
- ✅ Add custom domain (optional)

---

## Need Help?

If you get stuck on any step:
1. Check the troubleshooting section above
2. Check terminal for error messages
3. Verify all spellings and filenames
4. Make sure you restarted the server

---

**Your website is ready! Just add the API keys and you're live! 🚀**
