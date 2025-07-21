# 🧘 Yoga with Jimmy — Fullstack Website

A professional, full-featured yoga instructor website for **Jimmy Gill**, built using a modern fullstack architecture. The site is fully CMS-managed, mobile responsive, SEO-friendly, and designed to grow with the instructor’s needs.

---

## 🔧 Tech Stack Overview

| Layer       | Tech                   |
| ----------- | ---------------------- |
| Frontend    | React + Tailwind CSS   |
| Animations  | Framer Motion          |
| CMS Backend | Sanity.io (v3 Studio)  |
| Contact     | EmailJS                |
| Hosting     | GitHub, Vercel/Netlify |

---

## 🗂️ Project Structure

yoga-project/
├── yoga-website/ # React SPA (Frontend)
│ ├── components/ # Reusable components (e.g. Navbar, TestimonialCard)
│ ├── pages/ # Routes: Home, About, Classes, Gallery, Contact
│ ├── assets/ # Static assets (images, icons)
│ ├── App.jsx # Route layout and page logic
│ ├── index.css # TailwindCSS config
│ └── ... # EmailJS config, utils, etc.
│
├── yoga-website-cms/ # Sanity CMS Studio
│ ├── schemas/ # CMS models: classes, testimonials, about, gallery
│ ├── sanity.config.ts # CMS configuration
│ ├── studio/ # Admin interface
│ └── ... # CMS customizations
│
├── .gitignore # Protects node_modules, .env, and more
└── README.md # Project documentation

---

## 🌟 Key Features

### 🔸 Frontend (React)

- ⚡ Blazing fast Single Page App (SPA)
- ✅ Fully responsive across devices
- 💬 Dynamic testimonials with star ratings
- 📸 CMS-powered classes & gallery
- 🧾 “Read More / Show Less” logic for long content
- ✉️ Contact form with EmailJS (secure using `.env`)
- 🎨 Smooth animations with Framer Motion

### 🔹 Backend (Sanity CMS)

The instructor can manage all dynamic content **without code changes**:

- ✅ Testimonials (image, stars, quote, author)
- ✅ Yoga Classes (title, time, description, image)
- ✅ About Page (bio, mission, philosophy)
- ✅ Gallery (upload session images)

---

## 🚀 Getting Started (Local Development)

### 1. Clone the Repository

git clone https://github.com/your-username/yoga-project.git
cd yoga-project

### 2. Install Dependencies

# React App

cd yoga-website
npm install

# Sanity CMS

cd ../yoga-website-cms
npm install

### 3. Configure Environment Variables

Create .env files in both folders:

Frontend — yoga-website/.env

REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

### 4. Run Locally

# Terminal 1 — React app

cd yoga-website
npm run dev

# Terminal 2 — Sanity Studio

cd yoga-website-cms
npm run dev

Open:

React frontend: http://localhost:5173

Sanity CMS: http://localhost:3333

### 🌐 Deployment

🖥️ Frontend (React)
Deploy to Vercel or Netlify

Add environment variables from .env

🗃️ CMS (Sanity Studio)

# Deploy CMS backend

cd yoga-website-cms
npx sanity deploy

Sanity will give you a live URL for the CMS.

✅ Best Practices Used
.gitignore to prevent leaking sensitive files (e.g. .env, node_modules)

Folder separation for frontend and CMS

Sanity project keys are public-safe (only editable if you expose token)

SPA routing via React Router

Clean, accessible UI

Mobile-first responsive TailwindCSS

Lazy-loading and scroll animations with Framer Motion

🧩 Potential Enhancements
🔐 Admin auth for CMS access (with Sanity roles)

📰 Blog section (Sanity schema + frontend route)

🔄 Carousel for testimonials

📈 Analytics and event tracking (Google, PostHog, etc.)

🛡️ SEO improvements (metadata, OG tags, sitemap)

👨‍💻 Developer
Built with ❤️ by Jay Singh
Designed & developed for yoga instructor Jimmy Gill

📄 License
MIT — Free to use, modify, and adapt.
