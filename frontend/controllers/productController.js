import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const fetchAllProducts = async () => {
    try{
        const res = await axios.get(`${API_BASE}/products`); 
        return res.data;
    }catch (error) {
        console.error(" Error fetching products:" , error.message);
        throw new Error("Failed to fetch products. Please try again later.");
    }
}