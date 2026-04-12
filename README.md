# 📱 PH Play — App Store Platform

A modern app discovery and installation platform built with Next.js, where users can browse, install, and manage popular social and utility apps like Facebook, Instagram, Twitter, and more.

🌐 **Live Demo:** ph-play-final.vercel.app
---

## ✨ Features

- 🔍 **Browse Apps** — Discover trending social and utility apps
- 📦 **Install Apps** — One-click app installation with toast notifications
- 🗑️ **Uninstall Apps** — Easily remove installed apps
- 📊 **Dashboard** — Visual pie chart showing installed vs uninstalled apps
- 📋 **App Detail Page** — View detailed info including downloads, ratings, reviews, size, and description
- 📈 **Rating Chart** — Horizontal bar chart showing star-by-star rating breakdown
- 📱 **Responsive Design** — Works on all screen sizes

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| [Next.js 14](https://nextjs.org/) | React framework with App Router |
| [React](https://react.dev/) | UI library |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [DaisyUI](https://daisyui.com/) | UI components |
| [Recharts](https://recharts.org/) | Charts and data visualization |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [Vercel](https://vercel.com/) | Deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/salman-ibn-riyaj/ph-play-final.git

# Navigate to project directory
cd ph-play-final

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open ph-play-final.vercel.app in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (main)/                 # Main route group
│   │   ├── layout.jsx          # Main layout with Navbar & Footer
│   │   ├── home/               # Home page
│   │   ├── apps/
│   │   │   └── [appId]/        # Dynamic app detail page
│   │   ├── installations/      # Installed apps page
│   │   └── lib/
│   │       └── providers/      # Context providers
│   └── (dashboard)/            # Dashboard route group
│       ├── layout.jsx          # Dashboard layout with Sidebar
│       └── dashboard/          # Dashboard with charts
├── components/
│   ├── AppCard/                # App card component
│   ├── Banner/                 # Hero banner
│   ├── Navbar/                 # Navigation bar
│   ├── Footer/                 # Footer
│   ├── TrendingApps/           # Trending apps section
│   └── StateSection/           # Stats section
└── Context/
    └── Context.jsx             # Global state management
```

---

## 🌍 Deployment

This project is deployed on **Vercel**.

```bash
# Build for production
npm run build
```

Push to GitHub and connect your repository to [Vercel](https://vercel.com) for automatic deployments.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
