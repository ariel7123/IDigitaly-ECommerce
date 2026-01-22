// server/src/routes/cart.routes.ts - Cart routes
import { Router } from 'express';
import {
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
  getCart
} from '../controllers';
import { protect } from '../middleware';

const router = Router();

// All cart routes are protected
router.use(protect);

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/update', updateCartItem);
router.delete('/remove/:productId', removeFromCart);
router.delete('/clear', clearCart);

export default router;
