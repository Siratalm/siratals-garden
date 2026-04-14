# Siratal's Garden 🌱

A personal digital garden built with [Next.js](https://nextjs.org/) — a curated space on the web that grows over time with projects, writing, reading notes, and hobbies.

## Sections

| Page | Description |
|------|-------------|
| **Home** | Hero intro + bento grid of cards from all sections |
| **Projects** | Web apps, websites, and automation tools I've built |
| **Writing** | Blog posts — essays, reviews, and reflections |
| **Reading** | Books I'm reading, have read, and want to read |
| **Hobbies** | Coffee, plants, climbing, film photography, and keyboards |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Build:** Static export (SSG)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page (bento grid of all cards)
│   ├── layout.tsx            # Root layout + metadata
│   ├── globals.css           # Global styles
│   ├── projects/page.tsx     # Projects page
│   ├── writing/page.tsx      # Writing/blog page
│   ├── reading/page.tsx      # Reading/books page
│   └── hobbies/page.tsx      # Hobbies page (coffee, plants, etc.)
├── components/
│   ├── Navbar.tsx            # Top navigation bar
│   ├── Hero.tsx              # Home page intro section
│   ├── BentoGrid.tsx         # Masonry-style grid layout
│   ├── Card.tsx              # Reusable card component
│   └── Footer.tsx            # Footer component
├── public/
│   ├── project/              # Project screenshots/images
│   └── reading_books/        # Book cover images
└── next.config.ts            # Next.js config (static export)
```

## Adding Content

Each card on a page is defined in its respective `app/<section>/page.tsx` file as a data object:

```tsx
{
  category: "Projects",
  subcategory: "Website",
  title: "My Project",
  description: "A brief description.",
  imageHeight: "h-64",
  imageUrl: "/project/my-image.png",
  href: "https://example.com",
  external: true,
}
```

Cards added to section pages automatically appear on the home page's bento grid.

## Deployment

This project uses static export (`output: "export"`). Build with `npm run build` and deploy the `out/` directory to any static host (Vercel, GitHub Pages, Netlify, etc.).

## License

MIT
