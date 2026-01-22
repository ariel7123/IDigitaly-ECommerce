// server/src/controllers/cart.controller.ts - Cart management handlers
import { Response } from 'express';
import { User } from '../models';
import { AuthRequest } from '../middleware';

// @desc    Add item to cart
// @route   POST /api/cart/add
// @access  Private
export const addToCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = req.user;
    if (!user) {
      res.status(401).json({ success: false, message: 'Not authorized' });
      return;
    }

    const { productId, name, price, quantity = 1, image } = req.body;

    if (!productId || !name || !price) {
      res.status(400).json({
        success: false,
        message: 'Product ID, name, and price are required'
      });
      return;
    }

    // Check if item already exists in cart
    const existingIndex = user.cart.findIndex(
      item => item.productId === productId
    );

    if (existingIndex > -1) {
      // Update quantity
      user.cart[existingIndex].quantity += quantity;
    } else {
      // Add new item
      user.cart.push({
        productId,
        name,
        price,
        quantity,
        image,
        addedAt: new Date()
      });
    }

    await user.save();

    res.json({
      success: true,
      message: 'Item added to cart',
      cart: user.cart
    });
  } catch (error: any) {
    console.error('Add to cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error adding item to cart'
    });
  }
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/update
// @access  Private
export const updateCartItem = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = req.user;
    if (!user) {
      res.status(401).json({ success: false, message: 'Not authorized' });
      return;
    }

    const { productId, quantity } = req.body;

    if (!productId || quantity < 0) {
      res.status(400).json({
        success: false,
        message: 'Invalid product ID or quantity'
      });
      return;
    }

    const itemIndex = user.cart.findIndex(
      item => item.productId === productId
    );

    if (itemIndex === -1) {
      res.status(404).json({
        success: false,
        message: 'Item not found in cart'
      });
      return;
    }

    if (quantity === 0) {
      // Remove item
      user.cart.splice(itemIndex, 1);
    } else {
      // Update quantity
      user.cart[itemIndex].quantity = quantity;
    }

    await user.save();

    res.json({
      success: true,
      message: 'Cart updated',
      cart: user.cart
    });
  } catch (error: any) {
    console.error('Update cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error updating cart'
    });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/remove/:productId
// @access  Private
export const removeFromCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = req.user;
    if (!user) {
      res.status(401).json({ success: false, message: 'Not authorized' });
      return;
    }

    const { productId } = req.params;

    user.cart = user.cart.filter(item => item.productId !== productId);
    await user.save();

    res.json({
      success: true,
      message: 'Item removed from cart',
      cart: user.cart
    });
  } catch (error: any) {
    console.error('Remove from cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error removing item from cart'
    });
  }
};

// @desc    Clear entire cart
// @route   DELETE /api/cart/clear
// @access  Private
export const clearCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = req.user;
    if (!user) {
      res.status(401).json({ success: false, message: 'Not authorized' });
      return;
    }

    user.cart = [];
    await user.save();

    res.json({
      success: true,
      message: 'Cart cleared',
      cart: user.cart
    });
  } catch (error: any) {
    console.error('Clear cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error clearing cart'
    });
  }
};

// @desc    Get cart
// @route   GET /api/cart
// @access  Private
export const getCart = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const user = req.user;
    if (!user) {
      res.status(401).json({ success: false, message: 'Not authorized' });
      return;
    }

    res.json({
      success: true,
      cart: user.cart
    });
  } catch (error: any) {
    console.error('Get cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error getting cart'
    });
  }
};
