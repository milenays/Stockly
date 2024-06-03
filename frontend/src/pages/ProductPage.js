import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/productApi';
import ProductForm from '../components/ProductForm';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            setProducts(products);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ProductForm />
            <ul>
                {products.map(product => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductPage;
