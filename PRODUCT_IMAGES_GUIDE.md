# Product Images Setup Guide

## Current Status

✅ **Logo Added**: Your MTB logo has been copied to `public/images/logo.jpeg` and is now displayed in the header.

⚠️ **Product Images Needed**: The website is configured to use product images, but actual product photos need to be added.

## Quick Setup Options

### Option 1: Use Placeholder Images (For Testing)
The website will work with placeholder images. You can test everything locally and add real images later.

### Option 2: Add Your Product Images Now

1. **Take/Collect Product Photos**
   - Take high-quality photos of your TBM products
   - Use good lighting and neutral background
   - Capture multiple angles (front, side, detail)

2. **Name Images Correctly**
   Place images in `public/images/products/` with these names:
   - `disc-cutter-17.jpg`
   - `disc-cutter-19.jpg`
   - `main-bearing.jpg`
   - `thrust-bearing.jpg`
   - `cutter-ring.jpg`
   - `seal-kit.jpg`
   - `cutter-block.jpg`
   - `gripper-pad.jpg`
   - `conveyor-blade.jpg`

3. **Optimize Images**
   - Resize to ~1200x800 pixels
   - Compress to under 500KB each
   - Use JPG format for photos

### Option 3: Extract from PDF (If Available)

If your project report PDF contains product images:
1. Open the PDF
2. Export/save images from the PDF
3. Rename them according to the naming convention above
4. Place them in `public/images/products/`

## Image Paths in Code

The product data files reference images like:
- `/images/products/disc-cutter-17.jpg`
- `/images/products/main-bearing.jpg`
- etc.

These paths are relative to the `public` folder, so:
- File location: `public/images/products/disc-cutter-17.jpg`
- Code reference: `/images/products/disc-cutter-17.jpg`

## Testing Without Images

The website will work even without product images - Next.js will show a broken image icon or you can use placeholder services. The site is fully functional for testing and development.

## Next Steps

1. ✅ Contact information updated
2. ✅ Product data created
3. ✅ Logo added
4. ⏳ Add product images (when ready)
5. ⏳ Test locally with `npm run dev`
6. ⏳ Deploy to production

