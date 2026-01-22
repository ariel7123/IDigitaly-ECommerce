// client/src/services/cart.service.ts
import api from './api';
import { ICartResponse, ICartItem, IProduct } from '../types';

const CART_STORAGE_KEY = 'idigitaly_cart';

export const cartService = {
  // Get cart from server
  getCart: async (): Promise<ICartItem[]> => {
    const response = await api.get<ICartResponse>('/cart');
    return response.data.cart || [];
  },

  // Add item to cart (server)
  addToCart: async (product: IProduct): Promise<ICartItem[]> => {
    const response = await api.post<ICartResponse>('/cart/add', {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    return response.data.cart || [];
  },

  // Update cart item quantity (server)
  updateQuantity: async (productId: string, quantity: number): Promise<ICartItem[]> => {
    const response = await api.put<ICartResponse>('/cart/update', {
      productId,
      quantity,
    });
    return response.data.cart || [];
  },

  // Remove item from cart (server)
  removeFromCart: async (productId: string): Promise<ICartItem[]> => {
    const response = await api.delete<ICartResponse>(`/cart/remove/${productId}`);
    return response.data.cart || [];
  },

  // Clear cart (server)
  clearCart: async (): Promise<ICartItem[]> => {
    const response = await api.delete<ICartResponse>('/cart/clear');
    return response.data.cart || [];
  },

  // Local storage methods for guest users
  getLocalCart: (): ICartItem[] => {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  },

  saveLocalCart: (cart: ICartItem[]): void => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  },

  clearLocalCart: (): void => {
    localStorage.removeItem(CART_STORAGE_KEY);
  },

  addToLocalCart: (product: IProduct): ICartItem[] => {
    const cart = cartService.getLocalCart();
    const existingIndex = cart.findIndex(item => item.productId === product.id);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        addedAt: new Date().toISOString(),
      });
    }

    cartService.saveLocalCart(cart);
    return cart;
  },

  updateLocalQuantity: (productId: string, quantity: number): ICartItem[] => {
    let cart = cartService.getLocalCart();

    if (quantity === 0) {
      cart = cart.filter(item => item.productId !== productId);
    } else {
      const itemIndex = cart.findIndex(item => item.productId === productId);
      if (itemIndex > -1) {
        cart[itemIndex].quantity = quantity;
      }
    }

    cartService.saveLocalCart(cart);
    return cart;
  },
};

export default cartService;
