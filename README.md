# Dr. Akanksha Tiwari - Fit Aesthetic

Premium personal brand website for Dr. Akanksha Tiwari, built with modern web technologies.

## Features
- **Modern Tech Stack**: Next.js (App Router), TypeScript, Tailwind CSS
- **Premium Animations**: Framer Motion for scroll effects and micro-interactions
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Performance Optimized**: Static export configuration for lightning-fast loading
- **Dark Mode**: Built-in support for dark and light themes
- **SEO Ready**: Semantic HTML and metadata configured

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel (Free Hosting)

Since this project is built with Next.js, deploying to Vercel is the easiest and most optimized approach. It's completely free for personal projects.

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Create a free account on [GitHub](https://github.com/) if you don't have one.
2. Push this project to a new private or public GitHub repository.
3. Go to [Vercel.com](https://vercel.com/) and sign up with your GitHub account.
4. Click **Add New Project**.
5. Import the repository you just created.
6. Click **Deploy**. Vercel will automatically detect that it's a Next.js project and handle the build process.
7. Once deployed, you will get a free `.vercel.app` domain (e.g., `fit-aesthetic.vercel.app`) that you can share immediately.

### Option 2: Deploy via Vercel CLI

If you prefer to deploy directly from your terminal without pushing to GitHub:

1. Install the Vercel CLI globally:
```bash
npm i -g vercel
```
2. Run the deployment command in the project directory:
```bash
vercel
```
3. Follow the interactive prompts to log in and deploy.
4. For a production deployment, run:
```bash
vercel --prod
```

## Folder Structure

- `/app`: Next.js App Router pages and layouts
- `/components`: Reusable UI components and page sections
- `/data`: Centralized content data (easy to update text without touching components)
- `/lib`: Utilities and animation variants
- `/public`: Static assets (images, icons)
