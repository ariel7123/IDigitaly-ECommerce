// server/src/models/product.model.ts - Product Mongoose Schema
import mongoose, { Document, Schema } from 'mongoose';

export interface IProductDoc extends Document {
  name: string;
  description: string;
  price: number;
  category: 'iphone' | 'ipad' | 'accessories' | 'mac';
  image: string;
  inStock: boolean;
  createdAt: Date;
}

const productSchema = new Schema<IProductDoc>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['iphone', 'ipad', 'accessories', 'mac']
  },
  image: {
    type: String,
    default: '📦'
  },
  inStock: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Product = mongoose.model<IProductDoc>('Product', productSchema);
