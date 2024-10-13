"use client"
import React from 'react'
import styles from "./style.module.scss"
import Link from 'next/link'
import { usePathname } from 'next/navigation';


export default function Header() {
  const path = usePathname()

  return (
    <header className={styles.header}>
      <h2>מושל הוילונות</h2>
    <nav className={styles.nav}>
      <ul>
        <li> <Link href="/" className={path === '/' ? styles.active : ''}>ראשי</Link></li>
        <li> <Link href="/cart" className={path === '/cart' ? styles.active : ''}>וילונות</Link></li>
        <li> <Link href="/cart" className={path === '/cart' ? styles.active : ''}>ריפוד</Link></li>
        <li> <Link href="/shop" className={path === '/shop' ? styles.active : ''}>גלריה</Link></li>
        <li ><Link href="/about" className={path === '/about' ? styles.active : ''} >אודות</Link></li> 
      </ul>
    </nav>
    
    
    
    </header>
  )
}
