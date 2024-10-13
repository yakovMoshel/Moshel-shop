import { getProducts, getOneProduct } from "../DL/controllers/productController";

export const getProduct = (id) => getOneProduct(id);
export const getAllProducts = () => getProducts();
export const getProductsByCategory = (categoryId) => getProducts(categoryId);
