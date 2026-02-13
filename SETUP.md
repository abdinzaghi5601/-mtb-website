# Quick Setup Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Contact Information

**Important:** Replace placeholder contact information with your actual details:

#### Files to Update:
- `components/Header.tsx` - Line 20, 25, 35: Replace `XXXXXXXXXX` with your phone number
- `components/Footer.tsx` - Line 60, 65: Replace `XXXXXXXXXX` with your phone number
- `app/page.tsx` - Line 30, 50: Replace `XXXXXXXXXX` with your phone number
- `app/products/[id]/page.tsx` - Line 95: Replace `XXXXXXXXXX` with your phone number
- `app/contact/page.tsx` - Line 30, 35, 60: Replace `XXXXXXXXXX` with your phone number

#### Email Address:
- Replace `info@tbmmachines.com` with your actual email address in all files

### 3. Add Product Images

1. Create product images directory:
```bash
mkdir -p public/images/products
```

2. Add your product images to `public/images/products/`

3. Update product data in:
   - `app/products/page.tsx` - Update image paths (currently using placeholder)
   - `app/products/[id]/page.tsx` - Update image paths in productData object

### 4. Customize Company Information

Update the following files with your actual company details:
- `app/about/page.tsx` - Company story and information
- `app/page.tsx` - Homepage content
- `components/Footer.tsx` - Company address

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your website.

## 📝 Next Steps

1. **Add Real Product Data**: Replace mock product data with your actual products
2. **Connect Contact Form**: Set up email service (e.g., SendGrid, Resend) for contact form submissions
3. **Add Analytics**: Add Google Analytics or similar tracking
4. **Optimize Images**: Replace placeholder images with actual product photos
5. **Deploy**: Deploy to Vercel (recommended) or your preferred hosting

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme.

### Content
All content is in the component files - edit directly to customize text and information.

## 📞 Support

For questions or issues, refer to the main README.md file.

