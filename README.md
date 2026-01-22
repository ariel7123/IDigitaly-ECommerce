# 🛒 IDigitaly - E-Commerce Platform

A modern full-stack e-commerce application for Apple products built with the MERN stack and TypeScript.

![IDigitaly Logo](./client/src/assets/logo.jpg)

## 🏗️ Architecture

```
idigitaly/
├── 📁 client/          # React + Vite + TypeScript
│   └── src/
│       ├── components/ # Reusable UI components
│       ├── pages/      # Route pages
│       ├── hooks/      # Custom React hooks
│       ├── services/   # API calls (axios)
│       ├── store/      # Context (Auth, Cart)
│       ├── styles/     # SCSS files
│       └── types/      # TypeScript interfaces
│
├── 📁 server/          # Express + TypeScript + MongoDB
│   └── src/
│       ├── controllers/ # Route handlers
│       ├── models/      # Mongoose schemas
│       ├── routes/      # API routes
│       ├── middleware/  # Auth, error handling
│       ├── config/      # DB & env config
│       └── types/       # TypeScript interfaces
│
└── 📁 shared/          # Shared TypeScript types
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/yourusername/idigitaly.git
cd idigitaly

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 2. Configure Environment

```bash
# Server - create .env file
cd server
cp .env.example .env

# Edit .env with your MongoDB URI and JWT secret
```

### 3. Run Development Servers

```bash
# Terminal 1 - Start server (from server directory)
cd server
npm run dev

# Terminal 2 - Start client (from client directory)
cd client
npm run dev
```

### 4. Open in Browser
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000/api

## 🔧 Tech Stack

### Frontend
- ⚛️ **React 18** with TypeScript
- ⚡ **Vite** for fast development
- 🎨 **SCSS** with BEM methodology
- 🔄 **React Router** for navigation
- 📦 **Axios** for API calls
- 🗃️ **Context API** for state management

### Backend
- 🚀 **Express 4** with TypeScript
- 🍃 **MongoDB** with Mongoose
- 🔐 **JWT** authentication with httpOnly cookies
- 🔒 **bcryptjs** for password hashing

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/auth/me` | Get current user |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |

### Cart (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | Get user cart |
| POST | `/api/cart/add` | Add item to cart |
| PUT | `/api/cart/update` | Update item quantity |
| DELETE | `/api/cart/remove/:productId` | Remove item |
| DELETE | `/api/cart/clear` | Clear entire cart |

## 🔐 Security Features

- ✅ JWT tokens stored in **httpOnly cookies** (XSS protection)
- ✅ **SameSite** cookie attribute (CSRF protection)
- ✅ Password hashing with **bcrypt**
- ✅ Input validation on both client and server
- ✅ Protected routes with auth middleware

## 📁 Scripts

### Server
```bash
npm run dev      # Start development server with nodemon
npm run build    # Compile TypeScript
npm start        # Start production server
```

### Client
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🎨 Design System

The project uses a minimalist design inspired by Apple and Stripe:
- **Colors:** Black & white with subtle grays
- **Typography:** SF Pro Display / System fonts
- **Spacing:** 4px base unit
- **Border Radius:** Rounded corners (12-24px)
- **Shadows:** Subtle, layered shadows

## 📝 Future Improvements

- [ ] Add product images from database
- [ ] Implement order history
- [ ] Add payment integration (Stripe)
- [ ] Docker containerization
- [ ] Unit and E2E tests

## 📄 License

MIT License - feel free to use this project for learning!

---

Built with ❤️ by Ariel
