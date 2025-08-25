# 3E LABS Website

A modern, interactive website built with HTML, CSS, and JavaScript featuring a 3D video carousel, e-commerce functionality, and dynamic content management. Made for Louie with love by Sodofi <3

## Features

- **3D Video Carousel** - Interactive video gallery with smooth animations
- **E-commerce Shop** - Product catalog with cart functionality [IN PROGRESS]
- **Contact Form** - Netlify Forms integration for reliable email sending
- **Responsive Design** - Mobile-first approach with touch gestures
- **Dynamic Content** - Easy-to-edit video titles, descriptions, and media
- **Share Functionality** - Social media integration with custom links
- **Modern UI/UX** - Glitch effects, animations, and custom cursors

## Project Structure

```
3elabs-website/
├── index.html              # Main entry point
├── pages/                  # Page content
│   ├── home.html          # Home page
│   ├── about.html         # About page
│   ├── videos.html        # Video carousel page
│   ├── shop.html          # E-commerce page
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

## Video Carousel Editing

To edit video content, modify the `videos` object in `scripts/main.js`:

```javascript
var videos = {
    1: {
        link: "https://your-video-url.mp4",     // Video URL
        gif: "https://your-thumbnail.gif",      // GIF thumbnail
        title: "Video Title",                   // Display title
        desc: "Video description"               // Display description
    },
    // Add more videos...
}
```

## Shop Configuration

Edit shop products in `scripts/main.js`:

```javascript
var shopItems = {
    shirts: [
        {
            name: "Product Name",
            price: 29.99,
            image: "product-image.jpg",
            sizes: ["S", "M", "L", "XL"]
        }
    ]
}
```

## Contact Form

The contact form uses Netlify Forms for reliable email delivery. Configure in `pages/contact.html`:

```html
<form name="contact" netlify>
    <input name="email" type="email" required>
    <textarea name="message" required></textarea>
</form>
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

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive functionality
- **jQuery** - DOM manipulation and AJAX
- **Three.js** - 3D graphics and animations
- **Netlify Forms** - Form handling and email delivery

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

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

## 📄 License

© 2025 3E LABS. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, contact: sodofi# skethnotes
# skethnotes
# skethnotes
