const mongoose = require('mongoose');

// Schema for Product Category
const productCategSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: {
    type: Date,
    default: null
  }
});

//Schema for Product Inventory
const productInventSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: {
    type: Date,
    default: null
  }
});

//Schema for Product Discount
const productDiscSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  discountPercent: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: {
    type: Date,
    default: null
  }
});

//Schema for Product
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  SKU: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product_Categ',
    required: true
  },
  inventory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product_Invent',
    required: true
  },
  discount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product_Disc',
    default: null
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  modifiedAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: {
    type: Date,
    default: null
  }
});

// Create mongoose models based on schemas
const Product_Categ = mongoose.model('Product_Categ', productCategSchema);
const Product_Invent = mongoose.model('Product_Invent', productInventSchema);
const Product_Disc = mongoose.model('Product_Disc', productDiscSchema);
const Product = mongoose.model('Product', productSchema);

// Export the models
module.exports = { Product_Categ, Product_Invent, Product_Disc, Product };
