import axios from 'axios';

/*
  Base URL of backend API
  All requests will start with this URL
*/
const API_BASE_URL = 'http://13.233.21.4:5000/api';

/*
  Axios instance configuration
*/
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

/*
  Product related API calls
*/
export const productAPI = {

    // Get all products
    getAllProducts: async () => {
        const response = await api.get('/getproduct');
        return response.data;
    },

    // Get a product by ID
    getProductById: async (id) => {
        const response = await api.get(`/getproduct/${id}`);
        return response.data;
    },

    // Create a new product
    createProduct: async (productData) => {
        const response = await api.post('/postProduct', productData);
        return response.data;
    },

    // Update a product
    updateProduct: async (id, productData) => {
        const response = await api.put(`/updateProduct/${id}`, productData);
        return response.data;
    },

    // Delete a product
    deleteProduct: async (id) => {
        const response = await api.delete(`/deleteProduct/${id}`);
        return response.data;
    },
};

export default api;

