# GLM Backend API

Backend API for managing insurance master data (vehicle types, benefits, cover types, etc.)

## Features

- ✅ Authentication with email and hashed password (bcrypt)
- ✅ JWT-based session management
- ✅ Admin dashboard with side menu
- ✅ Dummy pages for all management sections
- ✅ Orange/White theme matching frontend project

## Prerequisites

- Node.js 18+ installed
- npm package manager

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
PORT=4000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=24h
FRONTEND_URL=http://localhost:3000
```

## Running the Application

### Development Mode
```bash
npm run dev
```

The application will start on `http://localhost:4000`

### Production Mode
```bash
npm run build
npm run start:prod
```

## Default Login Credentials

- **Email:** `admin@mua.co.ke`
- **Password:** `admin123`

⚠️ **Important:** Change these credentials in production!

## Project Structure

```
glm-backend-api/
├── src/
│   ├── auth/              # Authentication module
│   │   ├── dto/           # Data transfer objects
│   │   ├── guards/        # JWT guards
│   │   ├── strategies/    # Passport strategies
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   ├── dashboard/         # Dashboard module
│   │   ├── dashboard.controller.ts
│   │   └── dashboard.module.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   └── main.ts
├── views/                 # EJS templates
│   ├── layout.ejs         # Main layout with sidebar
│   ├── login.ejs          # Login page
│   └── dashboard/         # Dashboard pages
├── package.json
└── README.md
```

## Available Routes

### Authentication
- `GET /auth/login` - Login page
- `POST /auth/login` - Login endpoint
- `POST /auth/logout` - Logout endpoint
- `GET /auth/me` - Get current user (protected)

### Dashboard (Protected)
- `GET /dashboard` - Dashboard home
- `GET /dashboard/vehicle-types` - Vehicle types management
- `GET /dashboard/vehicle-makes` - Vehicle makes management
- `GET /dashboard/benefits` - Insurance benefits management
- `GET /dashboard/cover-types` - Cover types management
- `GET /dashboard/quotes` - Quotes management

## Next Steps

1. Set up MySQL database
2. Install Prisma ORM
3. Create database schema
4. Connect dashboard pages to database
5. Implement CRUD operations for all entities

## Technologies Used

- NestJS - Backend framework
- TypeScript - Programming language
- EJS - Template engine
- JWT - Authentication
- bcrypt - Password hashing
- Passport - Authentication middleware

