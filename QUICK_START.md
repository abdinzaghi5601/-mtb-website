# ⚡ Quick Start - Get Running in 15 Minutes

This is the fast track to get your website fully functional!

---

## ✅ Step 1: Get Resend API Key (5 min)

1. Go to: **https://resend.com**
2. Sign up (FREE account)
3. Click **"API Keys"** → **"Create API Key"**
4. Copy the key (starts with `re_`)
5. **Save it** - you'll need it in Step 3

---

## ✅ Step 2: Get Google Analytics ID (5 min)

1. Go to: **https://analytics.google.com**
2. Sign in with your Google account
3. Create new property: **"TBM Machines and Manufacturing Services Website"**
4. Get **Measurement ID** (starts with `G-`)
5. **Save it** - you'll need it in Step 3

---

## ✅ Step 3: Create .env.local File (2 min)

1. Open your project folder: `C:\Users\abdul\Desktop\MTB website`
2. Create new file named: `.env.local`
3. Add this (replace X's with YOUR actual keys):

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=yaseen_md99@yahoo.com
```

4. **Save the file**

---

## ✅ Step 4: Restart Server (1 min)

In your terminal:

1. Press `Ctrl + C` to stop the server
2. Run: `npm run dev`
3. Wait for: "✓ Ready in X seconds"
4. **Done!**

---

## ✅ Step 5: Test It! (2 min)

1. Open: **http://localhost:3000/contact**
2. Fill out the form
3. Click "Send Message"
4. Check your email: **yaseen_md99@yahoo.com**
5. You should receive the message!

---

## 🎉 You're Done!

Your website is now **100% functional**:
- ✅ Contact form sends emails
- ✅ Google Analytics tracking visitors
- ✅ All pages working
- ✅ Mobile responsive
- ✅ SEO optimized

---

## 📸 Optional: Add Product Images

Add 9 images to: `public/images/products/`

Names needed:
- disc-cutter-17.jpg
- disc-cutter-19.jpg
- main-bearing.jpg
- thrust-bearing.jpg
- cutter-ring.jpg
- seal-kit.jpg
- cutter-block.jpg
- gripper-pad.jpg
- conveyor-blade.jpg

---

## 🚀 Optional: Deploy to Production

**Easiest way - Vercel (FREE):**

1. Push code to GitHub
2. Go to: **https://vercel.com**
3. Click "Import Project"
4. Select your GitHub repo
5. Add the same 3 environment variables
6. Click "Deploy"
7. **Your site is LIVE!** 🎉

See `DEPLOYMENT_GUIDE.md` for detailed steps.

---

## ❓ Having Issues?

**Contact form not working?**
- Check `.env.local` exists in project root
- Verify Resend API key is correct (no spaces)
- Restart the server

**Google Analytics not tracking?**
- Wait 5 minutes after first visit
- Check "Realtime" report in GA dashboard
- Verify GA ID is correct in `.env.local`

**Still stuck?**
- Check `STEP_BY_STEP_SETUP.md` for detailed instructions
- Look for errors in terminal (red text)
- Verify you restarted the server after creating `.env.local`

---

## 📚 More Resources

- **Complete Setup Guide:** `STEP_BY_STEP_SETUP.md`
- **Deployment Guide:** `DEPLOYMENT_GUIDE.md`
- **Features Added:** `ENHANCEMENTS_ADDED.md`
- **Website Status:** `WEBSITE_STATUS.md`

---

**Total time to full functionality: ~15 minutes!** ⚡
