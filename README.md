# Folio Blog

A clean, minimal blog built with pure HTML, CSS, and JavaScript. No frameworks, no build tools — just open `index.html` and go.

## Project Structure

```
myblog/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Interactivity & blog data
└── README.md
```

## Features

- Responsive design (mobile & desktop)
- Live search across articles
- Category filter tabs
- Article modal reader
- Contact form
- Mobile hamburger nav

---

## 🚀 Deploy on GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click **"New repository"**
3. Name it `myblog` (or anything you like)
4. Set it to **Public**
5. Click **"Create repository"**

### Step 2 — Push your code
```bash
cd myblog
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose branch: `main`, folder: `/ (root)`
5. Click **Save**

Your site will be live at:
`https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## 🚀 Deploy on Render

### Step 1 — Push to GitHub (see above)

### Step 2 — Create a Render account
Go to [render.com](https://render.com) and sign up (free).

### Step 3 — New Static Site
1. Click **"New +"** → **"Static Site"**
2. Connect your GitHub account and select your repo
3. Fill in the settings:
   - **Name:** `myblog` (or any name)
   - **Branch:** `main`
   - **Publish directory:** `.` (just a dot — the root folder)
   - **Build command:** *(leave empty)*
4. Click **"Create Static Site"**

Render will deploy your site and give you a URL like:
`https://myblog.onrender.com`

Any time you push to GitHub, Render auto-deploys. ✅

---

## Customization

### Add a new post
Open `js/main.js` and add an object to the `posts` array:

```js
{
  id: 7,
  category: "design",        // design | tech | life
  title: "Your Post Title",
  excerpt: "A short summary shown on the card...",
  date: "May 7, 2026",
  readTime: "4 min",
  content: [
    "First paragraph...",
    "Second paragraph..."
  ]
}
```

### Change colors
Edit the CSS variables at the top of `css/style.css`:

```css
:root {
  --bg: #faf9f7;       /* page background */
  --accent: #c8541a;   /* orange highlight color */
  --text: #1a1714;     /* main text */
}
```

### Update author info
Edit the About section in `index.html`.
