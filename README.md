# Personal Portfolio (Data Analyst / Data Science Student)

Clean, minimal, responsive single-page portfolio website with:
- Home, About, Skills (categorized), Projects (main focus), Dashboards/Visualizations
- Resume section with downloadable PDF
- Certifications/Achievements, optional Blog, and Contact (links + mailto form)

## Run locally

Option A (VS Code / Cursor): open `index.html` in a browser.

Option B (recommended): run a local server from this folder:

```powershell
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Customize (quick checklist)

### 1) Update your name + role
- **File**: `index.html`
- Search for: `Arjun`, `Aspiring Data Analyst`
- Update the title tag and Home section text.

### 2) Add your real links
- **GitHub**: replace `https://github.com/your-username/...`
- **LinkedIn**: replace `https://linkedin.com/in/your-handle`
- **Email**: replace `you@example.com` (also in `assets/js/main.js` for the mailto form)

### 3) Replace the resume PDF
- Replace: `assets/resume/resume.pdf`
- Keep the same filename so the download button keeps working.

### 4) Embed Power BI / Tableau dashboards
- **File**: `index.html`
- Section: `Dashboards & Visualizations`
- Replace the iframe `src="about:blank"` with your embed URLs.

If you prefer screenshots, put images in `assets/img/` and swap the `<iframe>` for `<img>`.

### 5) Edit projects (most important)
- **File**: `index.html`
- Section: `Projects`
- For each project, update:
  - Title + one-line summary
  - Problem statement, dataset, tools, key insights
  - GitHub link
  - Replace visuals in `assets/img/` if you have your own charts/screenshots

## Files
- `index.html` — all content/sections
- `assets/css/style.css` — styling (minimal + responsive)
- `assets/js/main.js` — mobile nav, sticky header shadow, mailto contact form, footer year
- `assets/img/` — SVG placeholders for project visuals + favicon
- `assets/resume/resume.pdf` — placeholder PDF (replace with your real resume)

