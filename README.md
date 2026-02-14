# AInav - AI Navigator (Zenith Edition v2.1)

![Project Status](https://img.shields.io/badge/Status-Optimized-success) ![License](https://img.shields.io/badge/License-MIT-blue) ![Performance](https://img.shields.io/badge/Performance-High-brightgreen)

**Global AI Directory & Real-time News Aggregator**  
Connects users to the latest AI technologies and real-time news with high performance.  
최신 AI 기술과 실시간 뉴스를 연결하는 고성능 글로벌 AI 디렉토리입니다.

---

## 🚀 Key Features (주요 기능)

### 1. High-Performance Architecture (고성능 아키텍처) ⚡
- **Code Splitting**: Used `React.lazy` & `Suspense` for heavy modals (NewsFeed, ToolDetail).
  - *코드 분할*: 무거운 모달 컴포넌트를 지연 로딩하여 초기 로딩 속도를 획기적으로 개선했습니다.
- **Render Optimization**: Implemented `React.memo` & `useMemo` to minimize re-renders.
  - *렌더링 최적화*: 메모이제이션을 통해 불필요한 리렌더링을 방지하고 반응 속도를 높였습니다.
- **Lazy Image Loading**: Images load only when visible in the viewport.
  - *이미지 지연 로딩*: 화면에 보일 때만 이미지를 로드하여 데이터 사용량과 로딩 시간을 줄였습니다.

### 2. Smart Search & Filters (스마트 검색 및 필터)
- **Real-time Search**: instantly find tools by name or description keywords.
  - *실시간 검색*: 이름이나 설명 키워드로 도구를 즉시 찾을 수 있습니다.
- **Pricing Filter**: Filter by **Free**, **Freemium**, or **Paid**.
  - *가격 필터*: **무료**, **부분 유료**, **유료** 도구만 골라볼 수 있습니다.
- **Multi-Select Tags**: Select multiple categories simultaneously.
  - *다중 선택 태그*: 여러 카테고리를 동시에 선택하여 교차 검색이 가능합니다.

### 3. Real-time AI News (실시간 AI 뉴스) 📰
- **Time Filtering**: Filter news by **Today**, **Week**, or **Month**.
  - *기간 필터*: **오늘**, **이번 주**, **이번 달**의 최신 뉴스만 골라볼 수 있습니다.
- **Contextual Linking**: News items automatically link to related AI tools.
  - *문맥 연결*: 뉴스 내용에 언급된 AI 도구로 바로 이동할 수 있는 스마트 링크를 제공합니다.

### 4. Favorites System (즐겨찾기 시스템) ❤️
- **Personalized List**: Click the **Heart icon** on any tool to save it.
  - *나만의 목록*: 도구 카드의 **하트 아이콘**을 클릭하여 저장할 수 있습니다.
- **Auto-Save**: Favorites are persisted in `localStorage`.
  - *자동 저장*: 브라우저에 자동 저장되어 재접속 시에도 목록이 유지됩니다.

### 5. Localization (다국어 지원) 🌍
- **4 Languages**: Full support for **Korean**, **English**, **Japanese**, and **Chinese**.
  - *4개 국어 지원*: 한국어, 영어, 일본어, 중국어를 완벽 지원합니다.
- **SEO Optimized**: Dynamic HTML `lang` attribute updates for better search engine indexing.
  - *SEO 최적화*: 선택한 언어에 맞춰 HTML 태그 설정이 동적으로 변경됩니다.

---

## 🛠 Tech Stack (기술 스택)
- **Framework**: React 18 + Vite (Fast Build)
- **Styling**: Tailwind CSS + Framer Motion (Animations)
- **Icons**: Lucide React + Google Favicons
- **Optimization**: `React.lazy`, `Suspense`, `React.memo`, `useMemo`
- **Security & SEO**: `DOMPurify`, `react-helmet-async`, `vite-plugin-sitemap`
- **Analytics**: Vercel Analytics & Speed Insights
- **Data**: RSS-to-JSON (News), Mock Data (Tools)

---

## 📂 Project Structure (프로젝트 구조)
```bash
src/
├── assets/        # Static assets (images, favicons)
├── components/    # Reusable UI Components
│   ├── SearchAndFilter.jsx # Filtering Logic & Tags
│   ├── ToolGrid.jsx        # Visualization of Tools
│   ├── ToolDetailModal.jsx # Detailed View & Comments
│   ├── NewsFeed.jsx        # News Modal & RSS Feed
│   ├── Navbar.jsx          # Navigation & Multi-language Toggle
│   ├── ...
├── context/       # Global State Contexts
│   ├── AuthContext.jsx     # Authentication Logic (Firebase)
├── utils/         # Utility Helpers
│   ├── helpers.js          # Shared Utils (UUID, Time)
│   ├── supabaseClient.js   # Supabase Initialization
│   ├── sanitizer.js        # DOMPurify Sanitization
├── data/          # Static Data & Locales
│   ├── mockData.js         # Tool Database
│   ├── translations.js     # i18n Dictionary
├── App.jsx        # Main Application Logic
└── main.jsx       # Application Entry Point

Root Files:
├── supabase_schema.sql     # Database Schema Definitions
├── supabase_triggers.sql   # Real-time Counter Triggers
├── index.html              # Entry HTML
└── vite.config.js          # Vite Configuration
```

---

## 🚀 How to Run (실행 방법)

1.  **Install Dependencies (의존성 설치)**:
    ```bash
    npm install
    # or
    yarn install
    ```
2.  **Start Development Server (개발 서버 실행)**:
    ```bash
    npm run dev
    ```
3.  **Build for Production (배포용 빌드)**:
    ```bash
    npm run build
    ```
4.  **Preview Build (빌드 미리보기)**:
    ```bash
    npm run preview
    ```

---

## 🛡️ Security & Performance (보안 및 성능)
- **Sanitization**: Uses `DOMPurify` to clean RSS feed content and prevent XSS attacks.
- **Analytics**: Integrated with **Vercel Analytics** and **Speed Insights** for real-time monitoring.
- **SEO**: Dynamic meta tags via `react-helmet-async` and automated sitemap generation.

---

## �️ Database Setup (Supabase)

1.  **Create Supabase Project**:
    - Sign up at [Supabase](https://supabase.com/).
    - Create a new project.

2.  **Environment Variables (`.env`)**:
    - Create a `.env` file in the root directory.
    - Add your project credentials:
    ```env
    VITE_SUPABASE_URL=https://your-project.supabase.co
    VITE_SUPABASE_ANON_KEY=your-anon-key
    ```

3.  **Database Schema**:
    - Go to the **SQL Editor** in Supabase dashboard.
    - Run the contents of `supabase_schema.sql` to create tables and policies.
    - Run `supabase_triggers.sql` to enable real-time counters (comments, favorites).

---

## 🔮 Future Roadmap (향후 확장성)
- **PWA Support**: Implementing **Progressive Web App** features for offline access and installability.
- **Image Optimization**: Adopting **Next-gen formats (WebP/AVIF)** for faster loading speeds.
- **Virtualization**: Implementing `react-window` for efficiently rendering large lists of tools.

---

## 💸 Zero Cost Deployment (무료 배포 안내)
This project is designed to be **100% Free** for personal use.
이 프로젝트는 개인 사용 목적으로 **완전 무료**로 운영되도록 설계되었습니다.

- **Hosting**: Free on [Vercel](https://vercel.com/) (Hobby Plan).
- **Database**: Uses `localStorage` (No server cost).
- **API**: Uses free public RSS feeds (No subscription needed).

---
*Created by AInav Team (2026)*
