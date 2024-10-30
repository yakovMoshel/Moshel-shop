"use client"
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss'
import ProdactsList from '@/Componnets/ProdactsList';
import OrderButton from '@/Componnets/OrderButton';

export default function cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

 

  return (
    <div className={styles.cartPage}>
      <h2>עגלת הקניות</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCartMessage}>העגלה ריקה</p>
      ) : (
       <ProdactsList products={cartItems} setCartItems={setCartItems} />
      )}
     <OrderButton items={cartItems} />
    </div>
  );
}
