import { categoryModel } from "@/server/DL/models/categoryModel";

export const getCategories = async () => {
    const categories = await categoryModel.find();
    console.log("Categories in Controller:", categories); // הדפסת התוצאות
    return categories;
}

export const getoneCategory = async (_id) => {
    const category = await categoryModel.findOne({_id});
    console.log("Category in Controller:", category); // הדפסת התוצאה
    return category;
}



export const createCategory = async (categoryData) => {
    const newCategory = new categoryModel(categoryData);
    await newCategory.save();
    return newCategory;
}