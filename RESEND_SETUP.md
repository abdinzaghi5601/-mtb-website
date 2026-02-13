# 📧 Resend Email Service Setup Guide

## Quick Setup (5 minutes)

### Step 1: Sign Up for Resend
1. Go to https://resend.com
2. Click "Sign Up" (free account available)
3. Verify your email address

### Step 2: Get API Key
1. After logging in, go to **API Keys** section
2. Click **Create API Key**
3. Give it a name (e.g., "MTB Website")
4. Copy the API key (starts with `re_`)

### Step 3: Configure Domain (Optional but Recommended)
For production, you'll want to verify your domain:
1. Go to **Domains** section
2. Click **Add Domain**
3. Follow the DNS setup instructions
4. Once verified, you can use `noreply@yourdomain.com` as sender

**For testing**, you can use Resend's test domain without verification.

### Step 4: Add to .env.local
1. Create `.env.local` file in the root directory (if it doesn't exist)
2. Add your API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   CONTACT_EMAIL=yaseen_md99@yahoo.com
   ```

### Step 5: Update Sender Email
In `app/api/contact/route.ts`, update the `from` field:
- For testing: Use `onboarding@resend.dev` (Resend's test domain)
- For production: Use your verified domain email like `noreply@yourdomain.com`

### Step 6: Test
1. Restart your dev server: `npm run dev`
2. Go to contact page
3. Submit the form
4. Check your email inbox!

---

## Resend Pricing

- **Free Tier**: 3,000 emails/month, 100 emails/day
- **Pro Tier**: $20/month for 50,000 emails
- Perfect for small to medium businesses

---

## Alternative: Other Email Services

If you prefer a different service:

### Option 1: SendGrid
- Similar setup
- Free tier: 100 emails/day
- Update API endpoint in `app/api/contact/route.ts`

### Option 2: Nodemailer (Gmail/SMTP)
- Use Gmail SMTP
- Free but less reliable
- Requires app password setup

### Option 3: Form Submission Services
- Formspree
- FormSubmit
- Web3Forms

---

## Troubleshooting

### Emails not sending?
1. Check `.env.local` file exists and has correct API key
2. Restart dev server after adding env variables
3. Check browser console for errors
4. Check Resend dashboard for delivery status

### Getting 401 Unauthorized?
- Verify your API key is correct
- Make sure there are no extra spaces in `.env.local`

### Emails going to spam?
- Verify your domain in Resend
- Use a custom domain email (not test domain)
- Add SPF/DKIM records (Resend provides instructions)

---

## Current Configuration

The contact form is set up to:
- Send to: `yaseen_md99@yahoo.com` (or value in CONTACT_EMAIL env var)
- Reply-to: Customer's email address
- Subject: "New Inquiry: [Subject from form]"
- Include: Name, Email, Phone, Company, Subject, Message

---

## Next Steps

1. ✅ Sign up for Resend
2. ✅ Get API key
3. ✅ Add to `.env.local`
4. ✅ Update sender email in code (if needed)
5. ✅ Test form submission
6. ✅ Verify emails are received

**That's it! Your contact form will be fully functional!** 🎉


