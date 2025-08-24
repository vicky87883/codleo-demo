# Codleo Project Structure

## 🏗️ Clean & Simple Architecture

This project follows a clean, easy-to-understand structure perfect for presentations.

### 📁 Main Directories

```
frontend/
├── src/
│   ├── app/           # Pages (Next.js App Router)
│   ├── components/    # Reusable UI Components
│   ├── constants/     # App Data & Configuration
│   ├── lib/          # Utility Functions
│   └── types/        # TypeScript Types
├── public/           # Static Files (images, etc.)
└── package.json      # Dependencies
```

### 🎯 Key Files

#### Pages (`src/app/`)
- `page.tsx` - **Home Page** (Main landing page)
- `about/page.tsx` - **About Page** (Company info)
- `services/page.tsx` - **Services Page** (IT services)
- `contact/page.tsx` - **Contact Page** (Contact form)
- `blog/page.tsx` - **Blog Page** (Articles)
- `layout.tsx` - **Root Layout** (Header, Footer)

#### Components (`src/components/`)
- `layout/Header.tsx` - **Navigation Header**
- `layout/TopNavbar.tsx` - **Top Mini Navbar**
- `HeroSlider.tsx` - **Hero Section Slider**
- `FeaturesSlider.tsx` - **Features Showcase**
- `ProjectsSlider.tsx` - **Projects Display**

#### Configuration (`src/constants/`)
- `index.ts` - **Site Configuration** (branding, navigation, data)

### 🎨 Design System

- **Primary Color**: #683bf2 (Purple)
- **Font**: Inter (Google Fonts)
- **Framework**: Next.js 14 + TypeScript + Tailwind CSS

### 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:3000
```

### 📱 Responsive Design

- **Mobile First**: All components work on mobile
- **Tablet**: Optimized for iPad and tablets
- **Desktop**: Full desktop experience

### 🔧 Key Features

1. **Hero Slider** - Animated content with company images
2. **Features Slider** - Continuous moving feature cards
3. **Projects Showcase** - Glass morphism project cards
4. **Responsive Navigation** - Mobile-friendly menu
5. **Company Branding** - Consistent Codleo branding

### 📄 File Naming Convention

- **Components**: PascalCase (e.g., `HeroSlider.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Constants**: camelCase (e.g., `siteConfig`)

### 🎯 Presentation Ready

This structure is:
- ✅ **Easy to understand**
- ✅ **Well organized**
- ✅ **Professional looking**
- ✅ **Ready for demo**
- ✅ **Clean code**

Perfect for your final presentation! 🎉
