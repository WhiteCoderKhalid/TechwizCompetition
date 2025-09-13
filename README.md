# React + Vite + TailwindCSS + Json

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




### Acknowledgements 🙌

Me and my Team would like to express my gratitude to:

- **My Teacher(s)** – for their constant support and guidance.  
- **Aptech** – for organizing the competition and providing this opportunity.  
- **My Aptech Center** – for providing free Wi-Fi during the course, which made development smoother.  
- **ChatGPT** – for debugging assistance and problem-solving during the project.  
- **YouTube** – for quick tips and tutorials that helped improve the project.  


# CampusConnect 🎓

**Your Gateway to Campus Events**

CampusConnect is a modern, responsive web application designed to help students discover, participate in, and connect through campus events at Metropolitan College of Excellence. Built with React, TypeScript, and Tailwind CSS, it provides an intuitive platform for event management and community engagement.

## ✨ Features

### 📅 **Event Management**
- **Event Catalog**: Browse upcoming and past events with advanced filtering
- **Real-time Countdown**: Live countdown timers for upcoming events
- **Smart Filtering**: Filter by category (Technical, Cultural, Sports, Academic)
- **Intelligent Search**: Search by title, description, or venue
- **Multiple Views**: Grid and list view options
- **Registration Status**: Real-time participant tracking

### 🖼️ **Photo Gallery**
- **Organized Collections**: Events grouped by year and category
- **Lightbox Experience**: Full-screen image viewing with navigation
- **Filter System**: Easy browsing by event type
- **High-Quality Images**: Professional event photography

### 💬 **Feedback System**
- **Rating System**: 5-star rating for events
- **Detailed Forms**: Comprehensive feedback collection
- **User Categories**: Student, Faculty, Alumni, Guest options
- **Anonymous Feedback**: Privacy-focused submission options

### 📞 **Contact Directory**
- **Coordinator Profiles**: Faculty and student event coordinators
- **Interactive Map**: Embedded Google Maps location
- **Emergency Contacts**: Quick access to urgent support
- **Social Media Links**: Connect across platforms

### 🎨 **Modern Design**
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Engaging micro-interactions
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Gradient Themes**: Beautiful color schemes throughout
- **Accessibility**: WCAG compliant design patterns

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/WhiteCoderKhalid/TechwizCompetition.git
   cd campusconnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📱 Usage Guide

### Browsing Events
- **Filter Events**: Use category filters to find specific event types
- **Search**: Type keywords to find events by name, description, or venue
- **Sort Options**: Organize events by date, name, or category
- **View Modes**: Switch between grid and list views
- **Event Details**: Click "Learn More" for complete event information

### Gallery Exploration
- **Category Filters**: Browse photos by event type
- **Year Selection**: View events from specific years
- **Lightbox**: Click any image for full-screen viewing
- **Navigation**: Use arrow keys or buttons to browse through images

### Providing Feedback
- **Event Selection**: Choose from recently attended events
- **Star Ratings**: Rate your experience from 1-5 stars
- **Comments**: Share detailed feedback and suggestions
- **Submission**: Form validates input and confirms submission

## 🏗️ Project Structure

```
campusconnect/
├── public/                   # Static assets (served as-is, e.g., favicon, robots.txt)
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

## 🎯 Key Pages

### **Home Page**
- Hero banner slideshow with event highlights
- Upcoming events section with countdown timers
- College statistics and achievements
- Quick navigation to all sections

### **About Page**
- College overview and history
- Event categories with descriptions
- Mission and vision statements
- Campus highlights and statistics

### **Events Page**
- Comprehensive event catalog
- Advanced filtering and search
- Grid and list view options
- Event registration status tracking

### **Gallery Page**
- Photo collections organized by category
- Year-wise event archives
- Lightbox image viewing
- Filter and search capabilities

### **Feedback Page**
- User-friendly feedback forms
- Star rating system
- Event-specific feedback options
- Anonymous submission support

### **Contact Page**
- Event coordinator directory
- Interactive campus map
- Emergency contact information
- Social media integration

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with vite
- **Styling**: Tailwind CSS for responsive design
- **Routing**: React Router DOM for navigation
- **Icons**: Lucide React for consistent iconographys
- **Build Tool**: Vite for fast development and building
- **Package Manager**: npm for dependency management

## 🌟 Features in Detail

### Event Management
- Dynamic event loading from JSON data
- Real-time participant tracking
- Category-based organization
- Advanced search and filtering
- Responsive event cards with hover effects

### User Experience
- Intuitive onboarding for new users
- Persistent user preferences
- Smooth page transitions
- Loading states and error handling
- Accessibility-focused design

### Visual Design
- Modern gradient color schemes
- Glass morphism effects
- Responsive grid layouts
- Professional typography
- Consistent spacing and alignment

## 📞 Support

For questions, suggestions, or technical support:

- **Email**: info@campusconnect.edu
- **Phone**: +2348034345565
- **Address**: Aptech Commputer Education Center Savanna Quarry

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and suggest improvements.

---

**Made with ❤️ for the A College of Excellence community**

*CampusConnect - Connecting students through engaging campus experiences*



