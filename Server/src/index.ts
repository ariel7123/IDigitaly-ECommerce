// server/src/index.ts - Server Entry Point
import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from './config/env';
import { connectDB } from './config/db';
import { errorHandler, notFound } from './middleware';
import routes from './routes';

// Initialize Express app
const app: Express = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: config.CLIENT_URL,
  credentials: true // Allow cookies
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
app.use('/api', routes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(config.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${config.PORT}`);
  console.log(`📊 Environment: ${config.NODE_ENV}`);
});

export default app;
