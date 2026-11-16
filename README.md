# Sayanox Official Website

Official website for the **Sayanox** programming language (.sa) — created by Sayan Mahata (sayan9168).

## Features of this site

- Full language overview, features, syntax examples
- Creator section with official photo and bio of Sayan Mahata
- Get Started guide linking to the GitHub repo
- Ecosystem / Libraries section (ready for future updates)
- Strong SEO: meta tags, Open Graph, Twitter cards, Schema.org structured data (SoftwareApplication + Person)
- robots.txt + sitemap.xml
- Responsive dark design, mobile menu, smooth scroll

## Deploy options

### 1. GitHub Pages (recommended for free static hosting)

1. Create a new repository, e.g. `sayanox-website` or use a custom domain repo.
2. Push all files in this folder to the `main` (or `gh-pages`) branch.
3. Go to **Settings → Pages** → Source: Deploy from a branch → `main` / root.
4. (Optional) Add a custom domain `sayanox.dev` or `sayanox.sayan9168.github.io` and update the canonical / sitemap / OG URLs accordingly.

### 2. Vercel / Netlify / Cloudflare Pages

- Connect the GitHub repo and deploy as a static site (no build step needed).
- Or drag-and-drop this folder.

### 3. Custom domain + SEO tips

After deploying:

1. Update every occurrence of `https://sayanox.dev` in:
   - `index.html` (canonical, OG, Twitter, JSON-LD)
   - `robots.txt`
   - `sitemap.xml`
2. Submit the sitemap in Google Search Console.
3. Add the site to Bing Webmaster Tools.
4. Link this site from your GitHub profile, portfolio (sayan9168.github.io), and the main sayanox README.

## Updating libraries later

When you or others publish libraries:

1. Edit the `#ecosystem` section in `index.html`.
2. Add new `.eco-card` entries with name + short description + link.
3. Re-deploy. The section is already prepared for community libraries.

## Local preview

Just open `index.html` in a browser, or run a simple static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

Built for Sayan Mahata / Sayanox Private Limited · 2026
