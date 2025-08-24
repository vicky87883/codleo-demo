# Codleo - IT Solutions Website

A modern, responsive website for Codleo IT Solutions built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Interactive Components**: Hero slider, features slider, projects showcase
- **Professional Design**: Clean, modern interface with primary color #683bf2

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About page
│   │   ├── blog/page.tsx      # Blog page
│   │   ├── contact/page.tsx   # Contact page
│   │   ├── services/page.tsx  # Services page
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable components
│   │   ├── layout/           # Layout components (Header, TopNavbar)
│   │   ├── HeroSlider.tsx    # Hero section slider
│   │   ├── FeaturesSlider.tsx # Features showcase
│   │   └── ProjectsSlider.tsx # Projects showcase
│   ├── constants/            # App constants and data
│   │   └── index.ts         # Site config, navigation, etc.
│   ├── lib/                 # Utility libraries
│   │   └── utils.ts         # Helper functions
│   └── types/               # TypeScript type definitions
│       └── index.ts         # Type definitions
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## 🛠️ Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 🎨 Design System

- **Primary Color**: #683bf2 (Purple)
- **Secondary Color**: #5a2fd8 (Dark Purple)
- **Background**: White, Gray-50, #EDECFD (Light Purple)
- **Typography**: Inter font family

## 📱 Pages

1. **Home Page** (`/`) - Main landing page with hero, features, about, services, team, and projects
2. **About Page** (`/about`) - Company information and team details
3. **Services Page** (`/services`) - IT services offered
4. **Contact Page** (`/contact`) - Contact information and form
5. **Blog Page** (`/blog`) - Blog posts and articles

## 🔧 Key Components

- **Header**: Navigation with dropdown menus and mobile responsive
- **TopNavbar**: Mini navbar with contact info and social links
- **HeroSlider**: Animated hero section with content slider
- **FeaturesSlider**: Continuous moving features showcase
- **ProjectsSlider**: Projects showcase with glass morphism effects

## 📦 Dependencies

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **ESLint**: Code quality

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

This project is created for demonstration purposes.
