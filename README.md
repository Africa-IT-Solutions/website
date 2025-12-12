# Africa IT Solutions - Website

A modern, responsive website for Africa IT Solutions, a Mozambican-based IT services provider headquartered in Maputo. The website showcases comprehensive IT services including networking, software development, hardware sales & support, and IT training.

## 🌟 Features

- **Modern & Responsive Design** - Fully responsive layout that works seamlessly on all devices
- **Multi-page Routing** - Built with React Router for smooth navigation
- **Parallax Effects** - Smooth, optimized parallax scrolling on background images
- **Animations** - Beautiful fade-in and slide-up animations throughout
- **Professional UI** - Clean design with grey, black, and white color scheme
- **FAQ Section** - Comprehensive FAQ page with accordion-style questions
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Netlify** - Deployment platform

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Africa-IT-Solutions/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
africanit-web/
├── public/
│   ├── favicon.png          # Site favicon
│   └── _redirects           # Netlify SPA routing
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── ...
│   ├── pages/               # Page components
│   │   ├── Home.tsx        # Homepage with hero and sections
│   │   ├── Services.tsx     # Services page
│   │   ├── About.tsx        # About page
│   │   ├── Contact.tsx      # Contact page
│   │   └── FAQ.tsx          # FAQ page
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── netlify.toml             # Netlify configuration
└── vite.config.ts           # Vite configuration
```

## 🌐 Deployment

### Netlify Deployment

The project is configured for automatic deployment on Netlify:

1. **Automatic Deployment**: Connect your GitHub repository to Netlify
2. **Build Settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **SPA Routing**: All routes redirect to `index.html` for client-side routing
4. **MIME Types**: Proper headers configured for JavaScript modules

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files
3. Deploy the `dist` folder to your hosting provider

## 📄 Pages

- **Home** (`/`) - Hero section, stats, services preview, benefits, and CTA
- **Services** (`/services`) - Detailed information about all IT services
- **About** (`/about`) - Company information, mission, vision, and statistics
- **Contact** (`/contact`) - Contact form and business information
- **FAQ** (`/faq`) - Frequently asked questions with expandable answers

## 🎨 Design Features

- **Color Scheme**: Grey, black, and white
- **Typography**: Modern, clean fonts with proper hierarchy
- **Animations**: Smooth fade-in and slide-up effects
- **Parallax**: Optimized parallax scrolling using `requestAnimationFrame`
- **Hover Effects**: Interactive hover states on cards and buttons
- **Responsive**: Mobile-first design approach

## 📞 Contact Information

- **Address**: Av. Vladimir Lenine, 1 Floor, Millenium Park Building, Maputo, Mozambique
- **Phone**: +258 86 108 5811 8
- **Email**: info@africait.co.mz
- **Website**: africait.co.mz

## 🔧 Configuration Files

- `netlify.toml` - Netlify deployment configuration
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config` - Tailwind CSS configuration (inline in index.css)

## 📝 License

This project is private and proprietary to Africa IT Solutions.

## 👥 Contributing

This is a private project. For updates or changes, please contact the development team.

---

Built with ❤️ for Africa IT Solutions
