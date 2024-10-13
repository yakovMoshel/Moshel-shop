import React from 'react'
import styles from './style.module.scss'
import CategoryNav from '@/Componnets/CategoryNav'
import { connectToMongo } from '@/server/DL/connectToMongo'
import { getCategories } from '@/server/DL/controllers/categoryController'

export default async function shop() {
  await connectToMongo()
  const categories = await getCategories()
  console.log("Categories in Component:" ,categories)

  return (
    <div className={styles.shopPage}>
    <h2>Shop</h2>
      <CategoryNav categories={categories} />



    </div>
  )
}
