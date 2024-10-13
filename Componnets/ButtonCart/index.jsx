"use client"
import React from 'react';
import styles from './style.module.scss';
import { useRouter } from 'next/navigation'


export default function ButtonCart({ product, selectedDimension  }) {
  const router = useRouter()
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productWithDetails = {
      ...product,
      selectedDimension 
    };
    cart.push(productWithDetails);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('המוצר נוסף לעגלה בהצלחה!');
    router.push('/shop');
  };

  return (
    <button onClick={handleAddToCart} className={styles.button}>
      הוסף לעגלה
    </button>
  );
}
