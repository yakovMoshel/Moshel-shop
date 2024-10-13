const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
  },
  images: {
    type:[String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  dimensions: {
    type: [String], 
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

export const productModel = mongoose.models.Product || mongoose.model('Product', productSchema);

