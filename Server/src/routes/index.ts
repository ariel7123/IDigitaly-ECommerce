// server/src/routes/index.ts - Main router
import { Router } from 'express';
import authRoutes from './auth.routes';
import cartRoutes from './cart.routes';
import productsRoutes from './products.routes';

const router = Router();

// Mount routes
router.use('/auth', authRoutes);
router.use('/cart', cartRoutes);
router.use('/products', productsRoutes);

// Health check
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

export default router;
