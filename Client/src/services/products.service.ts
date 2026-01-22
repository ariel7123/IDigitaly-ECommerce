// client/src/services/products.service.ts
import api from './api';
import { IProductsResponse, IProduct, ProductCategory } from '../types';

export const productsService = {
  // Get all products
  getProducts: async (category?: ProductCategory): Promise<IProduct[]> => {
    const params = category && category !== 'all' ? { category } : {};
    const response = await api.get<IProductsResponse>('/products', { params });
    return response.data.products || [];
  },

  // Get single product
  getProduct: async (id: string): Promise<IProduct | null> => {
    const response = await api.get<{ success: boolean; product: IProduct }>(
      `/products/${id}`
    );
    return response.data.product || null;
  },
};

export default productsService;
