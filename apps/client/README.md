# GLM Quote System

A modern, responsive Next.js application for getting instant motor insurance quotes.

## Features

- Landing page with product selection (Motor Private and Motor Commercial)
- Comprehensive quote form with all required fields
- Vehicle age calculation based on year of manufacture
- Additional benefits selection
- Modern UI with white and orange color scheme
- Fully responsive design

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   └── quote/
│       ├── motor-private/  # Motor Private quote form
│       └── motor-commercial/ # Motor Commercial quote form
├── package.json
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Build for Production

```bash
npm run build
npm start
```

