import React from 'react';
import styles from './style.module.scss';
import { connectToMongo } from '@/server/DL/connectToMongo';
import { getProduct } from '@/server/BL/product.service';
import OrderButton from '@/Componnets/OrderButton';
import ProdactDefinitions from '@/Componnets/ProductDefinitions';

export default async function productItem({ params }) {
    await connectToMongo();
    const prodact = await getProduct({ _id: params.id });

    const { name, description, images, price ,dimensions } = prodact;

    return (
        <div className={styles.prodactPage}>
            <div className={styles.prodactHeader}>
                <h2 className={styles.prodactTitle}>{name}</h2>
                <img src={images[0]} alt={name} className={styles.prodactImage} />
            </div>
            <p className={styles.prodactDescription}>{description}</p>
            <p className={styles.prodactPrice}>מחיר: ₪{price}</p>

            <ProdactDefinitions prodact={prodact}/>
        </div>
    );
}
