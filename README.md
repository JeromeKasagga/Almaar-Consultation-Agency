# Almaar Consultation Agency

A premium, high-converting corporate website designed for **Almaar + Companies**, a high-end business consultation agency based in Kampala, Uganda, driving growth and engagement strategies across East Africa.

## 🚀 Features

- **Premium Modern Design**: Sleek aesthetic alternating between deep charcoal (`#0D0D0D`) and off-white (`#F9F9F9`) themes, accented by warm gold (`#E5B869`).
- **Tailwind CSS v4 Engine**: Built entirely with a mobile-first philosophy using the cutting-edge Tailwind CSS v4 Vite plugin.
- **Cinematic GSAP Animations**: Features high-performance, scroll-driven animations utilizing the GreenSock Animation Platform (GSAP) and ScrollTrigger.
  - Staggered service row reveals.
  - Dynamic statistic counters.
  - Smooth hero cascades on load.
  - Animations are strictly bypassed on mobile viewports for maximum battery and touch performance.
- **Flawless Mobile Interactions**: Custom animated hamburger drawer and touch-swipeable carousels.

## 🛠 Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) (Vanilla JS template)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [GSAP](https://gsap.com/) & ScrollTrigger
- **Assets**: AI-generated premium East African corporate photography.

## 💻 Running Locally

To get a local development server running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JeromeKasagga/Almaar-Consultation-Agency.git
   cd Almaar-Consultation-Agency
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the localhost URL provided in your terminal (usually `http://localhost:5173/`).

## 📁 Project Structure

- `index.html`: The core semantic HTML structure and content.
- `src/style.css`: The central Tailwind v4 `@theme` configuration and root styles.
- `src/main.js`: Mobile interaction logic and GSAP ScrollTrigger animation definitions.
- `public/`: All static image assets.
