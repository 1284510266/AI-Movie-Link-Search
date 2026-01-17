# Movie Linker 🎬

A modern, high-performance web application for searching movie download links. Featuring a sleek Glassmorphism UI and a robust multi-source crawler.

## Features

- **Multi-Source Search**: Aggregates results from multiple reliable movie resource sites.
- **Glassmorphism UI**: Beautiful, interactive design with smooth animations.
- **Realistic Metadata**: Displays file sizes, quality tiers (4K, 1080p), and peer counts (seeders/leechers).
- **Magnet Link Support**: Direct access to magnet links for easy downloading.
- **Responsive Design**: Works perfectly on desktop and mobile.

## Tech Stack

- **Frontend**: React, Vite, Vanilla CSS
- **Backend**: Node.js, Express, Axios, Cheerio
- **Deployment**: Local dev server (port 5173 frontend, 3001 backend)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/1284510266/AI-Movie-Link-Search.git
   cd AI-Movie-Link-Search
   ```

2. **Setup Backend**:
   ```bash
   cd server
   npm install
   node index.js
   ```

3. **Setup Frontend**:
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

4. **Access the app**:
   Open `http://localhost:5173` in your browser.

## Project Structure

```
.
├── client/          # React frontend
│   ├── src/
│   │   ├── App.jsx  # Main UI logic
│   │   └── index.css # Styling
├── server/          # Node.js backend
│   ├── index.js     # API entry point
│   ├── crawler.js   # Scraper logic
│   └── utils.js     # Helper functions
└── .gitignore
```

## Disclaimer

This tool is for educational purposes only. Please ensure you comply with your local laws regarding copyright and content downloading.
