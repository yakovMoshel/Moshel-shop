"use client"
import React, { useState } from 'react';
import styles from './style.module.scss';
import ButtonCart from '../ButtonCart';

export default function ProdactDescription({ prodact }) {
  const [selectedDimension, setSelectedDimension] = useState("");
  const { name, description, images, price ,dimensions } = prodact;

  const handleDimensionChange = (event) => {
    setSelectedDimension(event.target.value);
  };

  return (  
      <div className={styles.productDetails}>        
        <label className={styles.label} htmlFor="dimensions">בחר מידה:</label>
        <select
          id="dimensions"
          value={selectedDimension}
          onChange={handleDimensionChange}
          className={styles.dimensionSelect}
        >
          <option value="">בחר מידה</option>
          {prodact.dimensions.map((dimension, index) => (
            <option key={index} value={dimension}>
              {dimension}
            </option>
          ))}
        </select>

        <ButtonCart product={prodact} selectedDimension={selectedDimension} />
      </div>
  );
}
