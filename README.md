# AInav - AI Navigator (Zenith Edition)

![Project Status](https://img.shields.io/badge/Status-Active-success) ![License](https://img.shields.io/badge/License-MIT-blue) ![Language](https://img.shields.io/badge/Language-React%20%7C%20Vite%20%7C%20Tailwind-blue)

**Global AI Directory & News Aggregator**  
Connects users to the latest AI technologies and real-time news.  
최신 AI 기술과 실시간 뉴스를 연결하는 글로벌 AI 디렉토리입니다.

---

## 🚀 Key Features (주요 기능)

### 1. Smart Search & Filters (스마트 검색 및 필터)
- **Real-time Search**: instantly find tools by name or description keywords.
  - *실시간 검색*: 이름이나 설명 키워드로 도구를 즉시 찾을 수 있습니다.
- **Pricing Filter**: Filter by **Free**, **Freemium**, or **Paid**.
  - *가격 필터*: **무료**, **부분 유료**, **유료** 도구만 골라볼 수 있습니다.
- **Collapsible Categories**: Clean UI with toggleable category filters.
  - *접이식 카테고리*: 기본적으로 숨겨져 있어 화면이 깔끔하며, 필요할 때만 펼쳐서 상세 필터를 적용할 수 있습니다.
- **Multi-Select Tags**: Select multiple categories (e.g., "Image" + "Video") simultaneously.
  - *다중 선택 태그*: "이미지"와 "영상" 등 여러 카테고리를 동시에 선택하여 교차 검색이 가능합니다.

### 2. Favorites System (즐겨찾기 시스템) ❤️
- **Personalized List**: Click the **Heart icon** on any tool to save it.
  - *나만의 목록*: 도구 카드의 **하트 아이콘**을 클릭하여 저장할 수 있습니다.
- **My Favorites View**: Toggle the "My Favorites" filter to see only saved items.
  - *모아보기*: '나의 즐겨찾기' 필터를 켜면 찜한 도구들만 따로 볼 수 있습니다.
- **Auto-Save**: Favorites are persisted in the browser (LocalStorage).
  - *자동 저장*: 브라우저에 자동 저장되어 재접속 시에도 목록이 유지됩니다.

### 3. Localization (다국어 지원) 🌍
- **4 Languages**: Full support for **Korean (Default)**, English, Japanese, and Chinese.
  - *4개 국어 지원*: **한국어(기본)**, 영어, 일본어, 중국어를 완벽 지원합니다.
- **Smart Switching**: UI text, categories, and news content adapt instantly.
  - *스마트 전환*: UI 텍스트, 카테고리명, 뉴스 콘텐츠가 즉시 해당 언어로 최적화됩니다.

### 4. Content Expansion (콘텐츠 확장) 📂
- **New Categories**: Added **Documents** (ChatPDF, Humata) and **Editing** (Descript, Canva).
  - *새로운 카테고리*: **서류/문서** 및 **편집** 카테고리가 추가되어 더 다양한 도구를 찾을 수 있습니다.
- **Refined Data**: All tools now include specific pricing and localized descriptions.
  - *데이터 보강*: 모든 도구에 가격 정보와 번역된 설명이 포함되었습니다.

### 5. Modern UI/UX (최신 디자인) 🎨
- **Dark Mode**: Seamless toggle between Light and Dark themes.
  - *다크 모드*: 눈이 편안한 다크 모드를 지원합니다.
- **Responsive Design**: Optimized for Desktop, Tablet, and Mobile.
  - *반응형 디자인*: 데스크탑, 태블릿, 모바일 등 모든 기기에서 최적화된 화면을 제공합니다.
- **Clean Layout**: Minimized clutter by hiding complex filters by default.
  - *깔끔한 레이아웃*: 복잡한 필터는 숨기고 필요한 정보만 보여주는 직관적인 디자인입니다.

---

## 🛠 Tech Stack (기술 스택)
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Framer Motion (Animations)
- **Icons**: Lucide React + Google Favicons
- **State Management**: React `useState`, `useEffect`, `localStorage`
- **Data**: RSS-to-JSON (News), Mock Data (Tools)

---

## 📂 Project Structure (프로젝트 구조)
```bash
src/
├── components/       # UI Components (UI 컴포넌트)
│   ├── SearchAndFilter.jsx # Search, Pricing, Category Tags, Favorites Toggle
│   ├── ToolGrid.jsx        # Tool Cards with Heart Icon
│   ├── CategoryGrid.jsx    # Hero Section Categories
│   ├── Navbar.jsx          # Navigation & Settings
│   └── ...
├── data/
│   ├── mockData.js       # Tool Data (Categories, Pricing, URLs)
│   ├── translations.js   # Multi-language Dictionary (EN/KO/JA/ZH)
├── App.jsx           # Main Application Logic
└── main.jsx          # Entry Point
```

---

## 🚀 How to Run (실행 방법)

1.  **Install Dependencies (의존성 설치)**:
    ```bash
    npm install
    ```
2.  **Start Development Server (개발 서버 실행)**:
    ```bash
    npm run dev
    ```
3.  **Build for Production (배포용 빌드)**:
    ```bash
    npm run build
    ```

## 💸 Zero Cost Deployment (무료 배포 안내)
This project is designed to be **100% Free** for personal use.
이 프로젝트는 개인 사용 목적으로 **완전 무료**로 운영되도록 설계되었습니다.

- **Hosting**: Free on [Vercel](https://vercel.com/) (Hobby Plan).
- **Domain**: Free `.vercel.app` subdomain provided.
- **Database**: Uses `localStorage` (No server cost).
- **API**: Uses free public RSS feeds (No subscription needed).

---
*Created by AInav Team (2026)*
