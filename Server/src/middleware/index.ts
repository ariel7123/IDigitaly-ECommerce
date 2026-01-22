// server/src/middleware/index.ts - Export all middleware
export { protect, optionalAuth, AuthRequest } from './auth.middleware';
export { errorHandler, notFound, AppError } from './error.middleware';
