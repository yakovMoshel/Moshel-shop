"use client"
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

export default function CategoryNav({ categories: initialCategories }) {
  const [categories, setCategories] = useState(initialCategories);

  return (
    <div className={styles.categoryNav}>
      {categories.map((category) => (
        <Link key={category._id} href={`/categories/${category._id}`}
          className={styles.categoryItem}>
          <img src={category.image} alt={category.name} className={styles.categoryImage} />
          <h2 className={styles.categoryName}>{category.name}</h2>
        </Link>
      ))}
    </div>
  );
}
