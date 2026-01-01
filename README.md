# Sustainability Lab - Year in Review 2025

LinkedIn poster and carousel for the Sustainability Lab at IIT Gandhinagar.

## Poster Versions

| Version | Theme | Files |
|---------|-------|-------|
| Version 1 | Black & Gold | `sustainability-lab-2025-review.html` / `.png` |
| Version 2 | Blue & Cyan | `version-2-blue.html` / `.png` |
| Version 3 | Light & Green | `version-3-light.html` / `.png` |

## Carousel (5 slides)

Square format (1080x1080px) for LinkedIn carousel posts:

```
carousel/
├── slide-1-cover.png      # Title slide with logo
├── slide-2-stats.png      # Big numbers (7 pubs, 6 awards, etc.)
├── slide-3-awards.png     # Key awards
├── slide-4-publications.png  # Venue badges
└── slide-5-team.png       # Milestones with photo
```

## Other Files

- `linkedin-post.md` - Post text with hashtags
- `logo_light.svg` / `logo_dark.svg` - Lab logos
- `alum.jpeg` - Alumni photo

## Preview

```bash
open sustainability-lab-2025-review.html
open version-2-blue.html
open version-3-light.html
```

## Generate All PNGs

```bash
npm install
node capture-all.js
```

## Edit

1. Edit any `.html` file in a text editor
2. Preview changes in browser
3. Run `node capture-all.js` to regenerate all PNGs
