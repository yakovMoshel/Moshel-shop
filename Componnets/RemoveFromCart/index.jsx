import React from 'react'
import styles from './style.module.scss';
import { FaTimesCircle } from "react-icons/fa";



export default function RemoveFromCart({ index, setCartItems }) {
    const handleRemoveFromCart = (index) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        setCartItems(cart);
      };
    
  return (
    <button className={styles.button} onClick={() => handleRemoveFromCart(index)}><FaTimesCircle />
</button>
  )
}
