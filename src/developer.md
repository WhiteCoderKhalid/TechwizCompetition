# CampusConnect - Developer Documentation 🚀

## Table of Contents
- [CampusConnect - Developer Documentation 🚀](#campusconnect---developer-documentation-)
  - [Table of Contents](#table-of-contents)
    - [Acknowledgements 🙌](#acknowledgements-)
  - [Development Setup](#development-setup)
    - [Prerequisites](#prerequisites)
    - [Environment Setup](#environment-setup)
  - [Architecture Overview](#architecture-overview)
    - [Tech Stack](#tech-stack)
    - [Project Structure](#project-structure)
      - [Feature Components (`src/components/`)](#feature-components-srccomponents)
  - [Data Management](#data-management)
  - [Styling Guidelines](#styling-guidelines)
  - [Testing Strategy](#testing-strategy)
    - [Development Tools](#development-tools)
    - [Learning Resources](#learning-resources)


### Acknowledgements 🙌

Me and my Team would like to express my gratitude to:

- **My Teacher(s)** – for their constant support and guidance.  
- **Aptech** – for organizing the competition and providing this opportunity.  
- **My Aptech Center** – for providing free Wi-Fi during the course, which made development smoother.  
- **ChatGPT** – for debugging assistance and problem-solving during the project.  
- **YouTube** – for quick tips and tutorials that helped improve the project.  


## Development Setup

### Prerequisites
```bash
Node.js >= 20.0.0
npm >= 8.0.0
Git
```

### Environment Setup
```bash
# Clone repository
git clone https://github.com/your-org/campusconnect.git
cd campusconnect

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Architecture Overview

### Tech Stack
- **Framework**: React 18 
- **Build Tool**: Vite 5.x
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router DOM 6.x
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Hooks + Context API

### Project Structure


```
campusconnect/
│
├── src/
│   ├── assets/               # App assets (bundled & optimized by Vite/Webpack)
│   │   ├── logo1.jpg         # Your logo image
│   │   └── index.ts          # Asset exports for cleaner imports
│   │
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.tsx        # Navigation component
│   │   ├── Footer.tsx        # Footer component
│   │   └── EventCard.tsx     # Event display component
│   │
│   ├── pages/                # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Events.tsx
│   │   ├── Gallery.tsx
│   │   ├── Feedback.tsx
│   │   └── Contact.tsx
│   │
│   ├── data/                 # JSON data files
│   │   ├── events.json
│   │   ├── gallery.json
│   │   ├── contacts.json
│   │   └── banners.json
│   │
│   └── App.tsx               # Main application component
│
├── package.json
└── README.md

```
```
## Component Structure

```
#### Feature Components (`src/components/`)
- **Navbar**: Main navigation
- **Footer**: Site footer
- **EventCard**: Event display card

```
#### Page Components (`src/pages/`)
- Each page is a complete route component
- Handle their own state and data fetching
- Compose smaller components for functionality

```
## Data Management

```
### JSON Data Structure
 - we have the  four  json which are
- Banner json working in the home page {hero section}
- Contact json used in the contact page
- Events json used in the events page
- Gallery json used in the gallery page



```
## Styling Guidelines
   Tailwind CSS Configuration
   // Note try using the verson 3 causing version 4 is not fully working
   // cause we had to delete it and instal tailwind css v3

```
### Component Styling Best Practices
1. **Utility-First**: Use Tailwind utilities over custom CSS
2. **Responsive Design**: Mobile-first approach with responsive prefixes
3. **Consistent Spacing**: Use standardized spacing scale
4. **Color System**: Stick to defined color palette
5. **Hover States**: Include interactive states for all clickable elements

```
## Testing Strategy
   // no time for testing
   // just use chrome to fix error from console to know what wrong
```
## Deployment

### Build Configuration
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});

```

### Development Tools
- **VS Code Extensions**: ES7+ React/Redux/React-Native snippets, Tailwind CSS IntelliSense
- **Browser Extensions**: React Developer Tools, Redux DevTools
- **Design Tools**: Figma for design collaboration


### Learning Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

-

**Happy coding! 🚀**
