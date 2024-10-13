import { getCategory } from '@/server/BL/category.service';
import { connectToMongo } from '@/server/DL/connectToMongo';
import React from 'react';
import styles from './style.module.scss';
import { getProductsByCategory } from '@/server/BL/product.service';
import ProdactsList from '@/Componnets/ProdactsList';

export default async function CategoryPage({ params }) {
    await connectToMongo();
    const category = await getCategory({ _id: params.id });
    const products = await getProductsByCategory(params.id);

    const { name, description, image } = category;

    return (
        <div className={styles.categoryPage}>
            <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>{name}</h2>
                <img src={image} alt={name} className={styles.categoryImage} />
            </div>
            <p className={styles.categoryDescription}>{description}</p>
            <ProdactsList products={products} />
        </div>
    );
}
