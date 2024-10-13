import { createCategory, getCategories, getoneCategory } from "../DL/controllers/categoryController";

export const getAllCategories =  () => getCategories();
   
export const getCategory =  (id) =>  getoneCategory(id);
   
export const newCategory = async (categoryData) => {
const  newCategory = await createCategory(categoryData);
console.log("Created category:", newCategory);
return newCategory;
}