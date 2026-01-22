// server/src/routes/products.routes.ts - Products routes
import { Router } from 'express';
import { getProducts, getProduct } from '../controllers';

const router = Router();

// Public routes
router.get('/', getProducts);
router.get('/:id', getProduct);

export default router;
