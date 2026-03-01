# sepsad.github.io

Sepsad's personal website. Pure HTML/CSS + [marked.js](https://marked.js.org) for markdown rendering. No build step.

## Structure

```
├── index.html / about.html / research.html
├── publications.html / blog.html / contact.html / 404.html
├── style.css
├── assets/          # CV, photos, favicon
└── content/
    ├── about.md
    ├── research.md
    ├── publications.md
    └── blog/
        ├── posts.json   # post manifest
        └── *.md         # individual posts
```

## Editing content

All page content lives in `content/*.md` — edit there, no HTML changes needed.

**Add a blog post:**
1. Create `content/blog/my-slug.md`
2. Add an entry to `content/blog/posts.json`
