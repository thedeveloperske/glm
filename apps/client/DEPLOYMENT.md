# Vercel Deployment Guide

## Step-by-Step Setup Instructions

### Prerequisites
- GitHub account
- Your code pushed to a GitHub repository
- Vercel account (free)

### Step 1: Prepare Your Code

1. Make sure your code is in a GitHub repository
2. Ensure you have a `package.json` file
3. Make sure your app builds successfully locally:
   ```bash
   npm install
   npm run build
   ```

### Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your GitHub account

### Step 3: Deploy Your Project

1. After signing in, click "Add New..." → "Project"
2. You'll see a list of your GitHub repositories
3. Find your repository (e.g., "GLM 2" or your repo name)
4. Click "Import" next to your repository

### Step 4: Configure Project Settings

Vercel will auto-detect Next.js, but you can verify:

- **Framework Preset**: Next.js (should be auto-detected)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### Step 5: Add Environment Variables (if needed)

If you have environment variables (like database URLs):

1. In the project settings, go to "Environment Variables"
2. Add your variables:
   - `DATABASE_URL` (if using database)
   - `NEXT_PUBLIC_*` (for public variables)
3. Click "Save"

### Step 6: Deploy

1. Click "Deploy" button
2. Wait 2-3 minutes for build to complete
3. Your app will be live at: `your-project-name.vercel.app`

### Step 7: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Click "Add Domain"
3. Enter your domain: `quote.yourdomain.com`
4. Follow DNS instructions:
   - Add a CNAME record
   - Point to: `cname.vercel-dns.com`
5. Wait for DNS propagation (5-30 minutes)
6. SSL certificate will be auto-generated

## After Deployment

### Viewing Your App
- Production URL: `https://your-project-name.vercel.app`
- Dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)

### Updating Your App
- Just push to GitHub main branch
- Vercel automatically redeploys
- Takes 2-3 minutes

### Viewing Logs
- Go to your project dashboard
- Click on a deployment
- View "Function Logs" for API routes
- View "Build Logs" for build process

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Make sure `npm run build` works locally
3. Check for missing dependencies in `package.json`

### Environment Variables Not Working
1. Make sure variables are added in Vercel dashboard
2. Redeploy after adding variables
3. Use `NEXT_PUBLIC_*` prefix for client-side variables

### Database Connection Issues
1. Check database allows connections from Vercel IPs
2. Verify `DATABASE_URL` is correct
3. Check database firewall settings

## Useful Commands

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy from command line
vercel

# Deploy to production
vercel --prod
```

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Test your app on the Vercel URL
3. ✅ Set up custom domain (optional)
4. ✅ Add environment variables
5. ✅ Link from your main website

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Discord: [vercel.com/discord](https://vercel.com/discord)
- GitHub Issues: Check your repository issues

