const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    stockCode: { type: String, required: true },
    barcode: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String },
    stock: { type: Number, default: 0 },
    price: { type: Number, required: true },
    images: [{ type: String }],
    shelfCode: { type: String },
    supplier: { type: String },
    tags: [{ type: String }],
    tax: { type: String },
});

module.exports = mongoose.model('Product', productSchema);
