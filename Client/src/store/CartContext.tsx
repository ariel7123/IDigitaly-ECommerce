// client/src/store/CartContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { cartService } from '../services';
import { useAuth } from './AuthContext';
import { ICartItem, IProduct, ICartContextType } from '../types';

const CartContext = createContext<ICartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, user } = useAuth();

  // Load cart when auth state changes
  useEffect(() => {
    if (isAuthenticated && user) {
      // User is logged in - use server cart
      setCart(user.cart || []);
    } else {
      // User is guest - use local cart
      setCart(cartService.getLocalCart());
    }
  }, [isAuthenticated, user]);

  const addToCart = async (product: IProduct): Promise<void> => {
    setIsLoading(true);
    try {
      if (isAuthenticated) {
        const updatedCart = await cartService.addToCart(product);
        setCart(updatedCart);
      } else {
        const updatedCart = cartService.addToLocalCart(product);
        setCart(updatedCart);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (productId: string, quantity: number): Promise<void> => {
    setIsLoading(true);
    try {
      if (isAuthenticated) {
        const updatedCart = await cartService.updateQuantity(productId, quantity);
        setCart(updatedCart);
      } else {
        const updatedCart = cartService.updateLocalQuantity(productId, quantity);
        setCart(updatedCart);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (productId: string): Promise<void> => {
    await updateQuantity(productId, 0);
  };

  const clearCart = async (): Promise<void> => {
    setIsLoading(true);
    try {
      if (isAuthenticated) {
        await cartService.clearCart();
      } else {
        cartService.clearLocalCart();
      }
      setCart([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate totals
  const totalItems = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const value: ICartContextType = {
    cart,
    isLoading,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): ICartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
