// shared/types/index.ts - Shared interfaces for Client & Server

// ==================== USER ====================
export interface IUser {
  id: string;
  name: string;
  email: string;
  cart: ICartItem[];
  createdAt: string;
  lastLogin?: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

// ==================== PRODUCT ====================
export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  inStock: boolean;
  createdAt?: string;
}

export type ProductCategory = 'iphone' | 'ipad' | 'accessories' | 'mac';

// ==================== CART ====================
export interface ICartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  addedAt: string;
}

// ==================== API RESPONSES ====================
export interface IApiResponse<T = null> {
  success: boolean;
  message: string;
  data?: T;
}

export interface IAuthResponse extends IApiResponse {
  user?: IUser;
}

export interface ICartResponse extends IApiResponse {
  cart?: ICartItem[];
}

export interface IProductsResponse extends IApiResponse {
  products?: IProduct[];
}

// ==================== PASSWORD ====================
export interface IPasswordStrength {
  level: 'weak' | 'medium' | 'strong';
  text: string;
  color: string;
}
