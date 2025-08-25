# Skethnotes

A website built with HTML, CSS, and JavaScrip. Made by Sodofi <3

## Project Structure

```
Skethnotes-website/
├── index.html              # Main entry point
├── pages/                  # Page content
│   ├── home.html          # Home page
│   ├── about.html         # About page
│   ├── contact.html       # Contact form
│   └── ...
├── css/
│   └── main.css           # Main stylesheet
├── scripts/
│   ├── main.js            # Main JavaScript functionality
│   ├── assets.js          # Asset management
│   └── assets.min.js      # Minified assets
├── api/
│   └── contact.js         # Contact form API (Vercel)
└── success.html           # Form submission success page
```

## Deployment

### Local Development
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Production Deployment
- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag and drop or connect repository
- **GitHub Pages**: Enable in repository settings

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive functionality
- **jQuery** - DOM manipulation and AJAX
- **Three.js** - 3D graphics and animations

## Customization

### Colors
Edit CSS custom properties in `css/main.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
}
```

### Fonts
Replace font files and update `@font-face` declarations in CSS.

### Animations
Modify keyframe animations in `css/main.css` for custom effects.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

