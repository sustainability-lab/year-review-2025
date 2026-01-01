# Sustainability Lab - Year in Review 2025

LinkedIn poster and carousel for the Sustainability Lab at IIT Gandhinagar.

## Theme Options (Vote!)

We have 3 theme options. Vote for your favorite!

### Theme 1: Black & Gold (Classic)
Dark elegant theme with gold accents.
- Poster: `sustainability-lab-2025-review.html`
- Carousel: `carousel/` folder

### Theme 2: Blue & Cyan (Tech)
Modern tech-inspired theme with blue/cyan gradients.
- Poster: `version-2-blue.html`
- Carousel: `carousel-blue/` folder

### Theme 3: Light & Green (Sustainability)
Fresh light theme with green accents.
- Poster: `version-3-light.html`
- Carousel: `carousel-light/` folder

## File Structure

```
year-review-2025/
├── sustainability-lab-2025-review.html  # Theme 1 poster
├── version-2-blue.html                  # Theme 2 poster
├── version-3-light.html                 # Theme 3 poster
├── carousel/                            # Theme 1 carousel (5 slides)
│   ├── slide-1-cover.html
│   ├── slide-2-stats.html
│   ├── slide-3-awards.html
│   ├── slide-4-publications.html
│   └── slide-5-team.html
├── carousel-blue/                       # Theme 2 carousel (5 slides)
│   └── ...
├── carousel-light/                      # Theme 3 carousel (5 slides)
│   └── ...
├── logo_light.svg / logo_dark.svg       # Lab logos
├── alum.jpeg                            # Alumni photo
└── linkedin-post.md                     # Post text
```

## Preview All Themes

```bash
# Theme 1 - Black & Gold
open sustainability-lab-2025-review.html
open carousel/slide-1-cover.html

# Theme 2 - Blue & Cyan
open version-2-blue.html
open carousel-blue/slide-1-cover.html

# Theme 3 - Light & Green
open version-3-light.html
open carousel-light/slide-1-cover.html
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
