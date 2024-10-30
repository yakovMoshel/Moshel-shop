import React from 'react'
import styles from './style.module.scss'

export default function Main () {
    return (
        <div className={styles.main}>
            <h1>מושל הוילונות</h1>
            <p>הזמנת וילונות פרימיום<br />לבתים ועסקים</p>
            <img className={styles.curtain} src="חלון עם וילון 1.png" alt="" />
            <img src="רקע ראשי (גל).png" alt="" />
        </div>
    )
}
