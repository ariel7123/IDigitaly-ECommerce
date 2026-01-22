// server/src/controllers/products.controller.ts - Products handlers
import { Request, Response } from 'express';

// Static products data (can be moved to MongoDB later)
const products = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    description: 'The latest iPhone with titanium design and Action Button',
    price: 999,
    category: 'iphone',
    image: '📱',
    inStock: true
  },
  {
    id: '2',
    name: 'iPhone 15',
    description: 'Powerful iPhone with USB-C and 48MP camera',
    price: 799,
    category: 'iphone',
    image: '📱',
    inStock: true
  },
  {
    id: '3',
    name: 'iPad Pro 12.9"',
    description: 'Ultimate iPad experience with M2 chip',
    price: 1099,
    category: 'ipad',
    image: '📱',
    inStock: true
  },
  {
    id: '4',
    name: 'iPad Air',
    description: 'Versatile iPad with M1 chip and stunning display',
    price: 599,
    category: 'ipad',
    image: '📱',
    inStock: true
  },
  {
    id: '5',
    name: 'AirPods Pro',
    description: 'Active noise cancellation with spatial audio',
    price: 249,
    category: 'accessories',
    image: '🎧',
    inStock: true
  },
  {
    id: '6',
    name: 'Apple Watch Series 9',
    description: 'Advanced health features and always-on display',
    price: 399,
    category: 'accessories',
    image: '⌚',
    inStock: true
  },
  {
    id: '7',
    name: 'MacBook Pro 14"',
    description: 'Pro performance with M3 Pro chip',
    price: 1999,
    category: 'mac',
    image: '💻',
    inStock: true
  },
  {
    id: '8',
    name: 'MacBook Air 13"',
    description: 'Thin and light with M2 chip',
    price: 1099,
    category: 'mac',
    image: '💻',
    inStock: true
  }
];

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category } = req.query;

    let filteredProducts = products;

    if (category && category !== 'all') {
      filteredProducts = products.filter(p => p.category === category);
    }

    res.json({
      success: true,
      count: filteredProducts.length,
      products: filteredProducts
    });
  } catch (error: any) {
    console.error('Get products error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error getting products'
    });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
export const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const product = products.find(p => p.id === id);

    if (!product) {
      res.status(404).json({
        success: false,
        message: 'Product not found'
      });
      return;
    }

    res.json({
      success: true,
      product
    });
  } catch (error: any) {
    console.error('Get product error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error getting product'
    });
  }
};
