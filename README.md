# AInav - AI Navigator (Zenith Edition)

![Project Status](https://img.shields.io/badge/Status-Active-success) ![License](https://img.shields.io/badge/License-MIT-blue) ![Language](https://img.shields.io/badge/Language-React%20%7C%20Vite%20%7C%20Tailwind-blue)

## 🚀 Mission
**"Your Gateway to the AI Universe."**  
AInav (formerly known as Zenith) connects users to the latest AI technologies and news. It serves as a comprehensive directory and real-time news aggregator for the rapidly evolving world of Artificial Intelligence.

## ✨ Key Features (v2.0 Updates)

### 1. 🌍 Multi-language Support (Global Ready)
- **4 Languages**: Full UI translation for **English**, **Korean (한국어)**, **Japanese (日本語)**, and **Chinese (中文)**.
- **Dynamic Switching**: Instantly toggle languages via the Navbar globe icon.
- **Localized Content**: All menus, categories, and static text are adapted for each region.

### 2. 📰 Real-time AI News Engine
- **Live Updates**: Integrated with **TechCrunch Artificial Intelligence RSS Feed** (via rss2json).
- **Auto-Fetch**: Latest news articles are fetched automatically upon loading.
- **Direct Links**: 'Read Original' button connects users directly to the source article.
- **Fallback Mechanism**: Displays high-quality curated 2026 future-tech news if the live feed is unavailable.

### 3. 🎨 Modern Minimalist Design (Zenith Style)
- **Refined Typography**: Professional `Outfit` & `Inter` fonts with **Extrabold** headings for strong visual hierarchy.
- **Adaptive Dark Mode**: 
    - Seamless toggle between **Light (Slate-900)** and **Dark (Slate-900/Black)** themes.
    - Optimized specific components (Hero text, Empty states) for perfect visibility in both modes.
- **Visual Polish**:
    - **Glassmorphism** effects on modals and cards.
    - **Soft Shadows** and rounded corners (`rounded-2xl`) for a premium feel.
    - **Google Favicon Service** integration for reliable, high-quality tool icons.

### 4. 📂 Comprehensive AI Tool Directory
- **Categorized Hub**: Tools organized by **Image, Video, Audio, UI/UX, Chat, Coding, Writing, 3D/VR, Productivity, etc.**
- **Smart Filtering**: Filter tools instantly by clicking category cards.
- **Direct Access**: 'Go to Site' pill buttons for quick navigation to AI services.

---

## 🛠 Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Icons**: Lucide React (UI) + Google Favicons (External Sites)
- **Animation**: Framer Motion (Smooth layout transitions)
- **Data Fetching**: Native `fetch` API + RSS-to-JSON
- **Localization**: Custom `translations.js` dictionary managed via React State

## 📂 Project Structure
```bash
src/
├── components/       # UI Components
│   ├── CategoryGrid.jsx  # Tool Categories (Image, Video...)
│   ├── Navbar.jsx        # Navigation + Language/Theme Toggles
│   ├── NewsFeed.jsx      # Slide-out News Modal (Live RSS)
│   ├── ToolGrid.jsx      # AI Service Cards
├── data/
│   ├── mockData.js       # Fallback News & Tool Data
│   ├── translations.js   # Multi-language strings (EN, KO, JA, ZH)
├── App.jsx           # Main logic (State, Routing, API Calls)
├── index.css         # Global Styles & Tailwind Directives
└── main.jsx          # Entry Point
```

## 📝 Latest Changelog (v2.0)
- **[Feature]** Added Real-time RSS News Integration (TechCrunch).
- **[Feature]** Implemented Multi-language System (EN/KO/JA/ZH).
- **[Design]** Overhauled Hero Section typography (`font-extrabold`, `tracking-tighter`).
- **[Fix]** Resolved text visibility issues in Light/Dark modes using inline style overrides for critical headers.
- **[Fix]** Fixed 'Read Original' links in NewsFeed.
- **[Fix]** Navbar Logo now refreshes the application.
- **[Cleanup]** Removed legacy `landing_page` static files to unify the project.

---

## 🚀 How to Run
1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```

---
*Created by AInav Team (2026)*
