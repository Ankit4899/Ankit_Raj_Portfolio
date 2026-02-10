# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Installation (2 minutes)

```bash
# Navigate to the project
cd portfolio

# Install dependencies
npm install
```

## Step 2: Run Development Server (30 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## Step 3: Customize Your Content (2 minutes)

Open `data/portfolio.json` and update:

1. **Name and Title** (Line 3-4)
   ```json
   "name": "Your Name",
   "title": "Your Job Title",
   ```

2. **Contact Info** (Lines 5-11)
   ```json
   "email": "your@email.com",
   "phone": "your-phone",
   "github": "your-github-url",
   "linkedin": "your-linkedin-url"
   ```

3. **Experience** (Lines 6-11 years)
   ```json
   "yearsOfExperience": 10,
   ```

Save the file and watch the changes appear instantly! 🎉

## What's Next?

### Add Your Story (5 minutes)
- Update the `about.description` with your introduction
- Add your career `objective`
- Write your `profileSummary`

### Add Your Skills (3 minutes)
- Update the `skills` array with your technologies
- Organize them by category (Frontend, Backend, etc.)

### Add Your Experience (10 minutes)
- Update the `experience` array with your work history
- Add roles, responsibilities, and technologies used

### Add Your Projects (10 minutes)
- Update the `projects` array with your work
- Add live URLs and GitHub links

### Add Images (Optional)
- Place your images in `public/images/`
- Update image paths in `portfolio.json`

## Need Help?

- **Configuration Guide**: See `CONFIGURATION.md` for detailed customization
- **README**: See `README.md` for full documentation
- **Component Files**: Check `components/` folder to modify layouts

## Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

## Deploy to Vercel (1 minute)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your portfolio is live! 🌟

---

**Pro Tips:**

- Keep `portfolio.json` as your single source of truth
- Use the glass effects and animations already built-in
- The site is fully responsive - test on mobile!
- All sections scroll smoothly automatically
- Dark mode friendly colors included

Enjoy your new portfolio! 🎨✨
