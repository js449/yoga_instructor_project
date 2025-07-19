# Yoga with Jimmy — Fullstack Website

This project is a full-featured yoga instructor website for **Jimmy Gill**, built with a modern tech stack that allows for dynamic content management and a smooth user experience across all devices.

---

## 🌐 Live Stack Overview

| Layer          | Tech                         |
| -------------- | ---------------------------- |
| Frontend       | React + Tailwind CSS         |
| Animations     | Framer Motion                |
| CMS Backend    | Sanity.io (Sanity Studio v3) |
| Email Handling | EmailJS                      |
| Deployment     | GitHub, Vercel/Netlify       |

---

## 🗂️ Project Structure

```
yoga-project/
├── yoga-website/        # React frontend for website
│   ├── components/      # Reusable UI components
│   ├── pages/           # Routes (Home, About, Classes, etc)
│   ├── assets/          # Images (hero image, etc)
│   ├── App.jsx          # Main app entry
│   ├── index.css        # Tailwind CSS
│   └── ...              # Other config and utility files
│
├── yoga-website-cms/    # Sanity Studio (CMS backend)
│   ├── schemas/         # CMS schema for classes, testimonials, about
│   ├── sanity.config.ts # Sanity Studio config
│   └── ...              # CMS admin UI
│
└── README.md            # Project documentation
```

---

## 🧘 Features

### Frontend (React + Tailwind)

- Fully responsive design (mobile-first)
- Hero section with call-to-action
- Animated testimonials with star ratings
- CMS-powered yoga classes & about page
- Class gallery and testimonial submission form
- Smooth UI animations (Framer Motion)

### Backend (Sanity CMS)

- Owner can manage:

  - ✅ Testimonials
  - ✅ Yoga Classes (with images)
  - ✅ About Page (bio, mission, philosophy)
  - ✅ Gallery

- Fully decoupled: Content updates without deploying site

### Contact Form

- Powered by **EmailJS** for direct-to-email inquiries
- Environment-safe using `.env` variables for credentials

---

## 🚀 Local Development

### 1. Clone Repo

```bash
git clone https://github.com/your-username/yoga-project.git
cd yoga-project
```

### 2. Install Dependencies

```bash
# React Frontend
yarn install   # or npm install

# In separate terminal, install CMS
cd yoga-website-cms
npm install
```

### 3. Create `.env` Files

**Frontend (`yoga-website/.env`):**

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Sanity CMS (`yoga-website-cms/.env`):**

```
SANITY_STUDIO_API_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

### 4. Run the App

```bash
# Terminal 1 - React frontend
cd yoga-website
npm run dev

# Terminal 2 - Sanity Studio (CMS admin)
cd yoga-website-cms
npm run dev
```

---

## 🌍 Deployment

**Frontend:**

- Deploy on **Vercel** or **Netlify**
- Configure environment variables (same as `.env`)

**Sanity CMS:**

- Deploy with `sanity deploy`
- Use [Sanity CLI](https://www.sanity.io/docs/cli)

---

## ✨ Future Improvements

- Add authentication for CMS login
- Auto-scroll testimonials or carousel
- Add blog section with Sanity
- SEO improvements (meta tags, sitemap, etc.)

---

## 👨‍💻 Developer

Built with ❤️ by Jay Singh for Jimmy Gill Yoga.

---

## 📸 Screenshots

_(Add screenshots of Home, Testimonials, Classes, About, and Gallery pages here for better documentation)_

---

## 📄 License

MIT — free to use and modify.

👨‍💻 Author
Jay Singh
Built with ❤️ as a real-world project for a yoga instructor client.
