import axios from 'axios';

const API_URL = '/api/products';

export const getAllProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createProduct = async (product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
};

// Diğer API çağrılarını buraya ekleyin (updateProduct, deleteProduct, vb.)
