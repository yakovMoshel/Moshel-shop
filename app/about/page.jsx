import React from 'react'
import styles from './style.module.scss'

export default function about() {
  return (
    <div className={styles.aboutPage}>
        <div className={styles.aboutHeader}>
            <h1 className={styles.aboutTitle}>אודותינו</h1>
            <p className={styles.aboutIntro}>
                חנות הווילונות שלנו נוסדה בפרס על ידי שלושה אחים, וכיום אנחנו ממשיכים את המסורת בירושלים.
            </p>
        </div>
        <div className={styles.aboutContent}>
            <section className={styles.historySection}>
                <h2 className={styles.sectionTitle}>הסיפור שלנו</h2>
                <p className={styles.sectionText}>
                    מה שהתחיל כחנות קטנה בפרס, הפך לעסק משפחתי מצליח בירושלים.
                </p>
            </section>
            <section className={styles.missionSection}>
                <h2 className={styles.sectionTitle}>החזון שלנו</h2>
                <p className={styles.sectionText}>
                    להמשיך להציע וילונות איכותיים ושירות אישי לכל לקוח.
                </p>
            </section>
        </div>
    </div>
);
}
