# Nurul Shaikh - Premium Developer Portfolio

A highly interactive, visually stunning, and single-page scrollable developer portfolio built to showcase backend engineering expertise with a modern, Gen-Z, macOS-inspired aesthetic.

## 🚀 Overview

This portfolio is engineered with **Next.js 14+ (App Router)**, styled with **Tailwind CSS**, and brought to life with **Framer Motion**. It features a continuous scrolling narrative, a sleek floating navigation dock, and a dark-themed premium design that emphasizes performance, scale, and modern web architecture.

## 🌟 Features

- **Single-Page Architecture**: Seamlessly scroll through all sections (About, Education, Skills, Services, Projects, Certificates, FAQ, Contact) without page reloads.
- **Premium Aesthetics**: High-contrast dark theme, glassmorphism, dynamic gradients, and refined typography.
- **Advanced Animations**: Powered by Framer Motion for scroll-triggered reveals, micro-interactions, and a living interface.
- **macOS-Style Navigation Dock**: A sleek, floating, scroll-aware dock for quick section access.
- **Fully Responsive**: Perfectly scaled for mobile, tablet, and desktop viewing.
- **Backend-Focused Narrative**: Tailored content emphasizing Node.js, API architecture, and database optimization.

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 📦 Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3005](http://localhost:3005) to view the application.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── about/         # About section content
│   │   ├── certificates/  # Certifications showcase
│   │   ├── contact/       # Contact form & info
│   │   ├── education/     # Academic background
│   │   ├── faq/           # Frequently asked questions
│   │   ├── projects/      # Work portfolio
│   │   ├── services/      # Offered services
│   │   ├── skills/        # Technical skills matrix
│   │   ├── layout.tsx     # Root layout & providers
│   │   └── page.tsx       # Main page aggregating all sections
│   ├── components/        # Reusable UI components (e.g., NavigationDock)
│   └── lib/               # Utility functions and shared logic
├── public/                # Static assets (images, fonts, etc.)
├── package.json           # Dependencies and scripts
└── tailwind.config.ts     # Tailwind CSS configuration
```

## 🎨 Customization

To personalize this portfolio:
- Update the content within the respective folder in `src/app/`.
- Modify the global styles or color palette in `src/app/globals.css` and `tailwind.config.ts`.
- Replace the images in the `public/` directory with your own assets.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
