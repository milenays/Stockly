import React, { useState } from 'react';
import { createProduct } from '../api/productApi';

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        stockCode: '',
        barcode: '',
        category: '',
        brand: '',
        price: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProduct(product);
            alert('Product created successfully!');
        } catch (error) {
            alert('Error creating product');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" />
            <input name="stockCode" value={product.stockCode} onChange={handleChange} placeholder="Stock Code" />
            <input name="barcode" value={product.barcode} onChange={handleChange} placeholder="Barcode" />
            <input name="category" value={product.category} onChange={handleChange} placeholder="Category" />
            <input name="brand" value={product.brand} onChange={handleChange} placeholder="Brand" />
            <input name="price" value={product.price} onChange={handleChange} placeholder="Price" type="number" />
            <button type="submit">Create Product</button>
        </form>
    );
};

export default ProductForm;
