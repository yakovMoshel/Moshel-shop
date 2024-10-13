import { productModel } from "@/server/DL/models/productModel";

export const getProducts = async (categoryId) => {
    if (categoryId) {
      const productsByCategory = await productModel.find({ category: categoryId });
      return productsByCategory;
    }
    return productModel.find();
  };

  export const getOneProduct = (id) => productModel.findOne({ _id: id});

