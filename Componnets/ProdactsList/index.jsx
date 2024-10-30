"use client"
import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RemoveFromCart from '../RemoveFromCart';

export default function ProdactsList({ products, setCartItems }) {
    const path = usePathname();

    const isCategoryPage = path.includes('/categories/');

    return (
        <div className={styles.productList}>
            {path === '/cart' ? (
                <ul>
                    {products.map((product, index) => (
                        <li key={index} className={styles.productItem}>
                            <RemoveFromCart setCartItems={setCartItems} index={index} productId={product._id} />

                            <h3>{product.name}</h3>
                            <p>מחיר: {product.price}</p>
                            <p>רוחב: {product.width} ס"מ</p>
                            <p>אורך: {product.height} ס"מ</p>
                        </li>
                    ))}
                </ul>
            ) : isCategoryPage ? (
                products.map((product) => (
                    <Link key={product._id} href={`/prodact/${product._id}`} className={styles.productItemLink}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <h4>{product.name}</h4>
                    </Link>
                ))
            ) : ('')}
        </div>
    );
}
