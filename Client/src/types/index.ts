// client/src/types/index.ts
// Re-export shared types and add client-specific types

// Import from shared (you can also copy these directly if not using workspaces)
export interface IUser {
  id: string;
  name: string;
  email: string;
  cart: ICartItem[];
  createdAt: string;
  lastLogin?: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  inStock: boolean;
}

export type ProductCategory = 'iphone' | 'ipad' | 'accessories' | 'mac' | 'all';

export interface ICartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  addedAt: string;
}

export interface IApiResponse<T = null> {
  success: boolean;
  message: string;
  data?: T;
}

export interface IAuthResponse {
  success: boolean;
  message: string;
  user?: IUser;
}

export interface ICartResponse {
  success: boolean;
  message: string;
  cart?: ICartItem[];
}

export interface IProductsResponse {
  success: boolean;
  count?: number;
  products?: IProduct[];
}

// Client-specific types
export interface IAuthContextType {
  user: IUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, confirmPassword: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export interface ICartContextType {
  cart: ICartItem[];
  isLoading: boolean;
  addToCart: (product: IProduct) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  totalItems: number;
  totalPrice: number;
}
