# Mango Spray Tan Website

A beautiful single-page website for Mango Spray Tan, built with Next.js and optimized for Cloudflare Pages.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build
```

## Deployment to Cloudflare Pages

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. In Cloudflare Dashboard:
   - Go to Pages
   - Click "Create a project"
   - Connect your Git repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
     - **Root directory**: `/` (or leave empty)

3. The site will be automatically deployed on every push to your main branch.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── public/
│   ├── images/         # Image assets
│   ├── icons/          # Icon assets
│   ├── fonts/          # Font files
│   ├── _headers        # Cloudflare Pages headers
│   └── _redirects      # Cloudflare Pages redirects
└── package.json
```

## Features

- Fully static site (no server required)
- Responsive design
- Smooth scrolling navigation
- Optimized for Cloudflare Pages
- Custom Bungasai font
- Modern UI with Tailwind CSS

