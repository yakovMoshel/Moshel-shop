import React from 'react';
import styles from './style.module.scss';
import { sendEmail } from '@/server/functions/nodemailer';
import Popup from '../popUp';

export default function OrderButton({ items }) {
    const handleOrder = () => {
        // הכנת התוכן של המייל
        const itemsTableRows = items.map(item => `
            <tr>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.width} מטר</td>
                <td>${item.height} מטר</td>
                <td>₪${item.price}</td>
            </tr>
        `).join('');

        const emailMessage = `
            <h1>פרטי ההזמנה</h1>
            <table border="1" cellpadding="10" dir="rtl">
                <tr>
                    <th>שם פריט</th>
                    <th>תיאור</th>
                    <th>רוחב</th>
                    <th>אורך</th>
                    <th>מחיר</th>
                </tr>
                ${itemsTableRows}
            </table>
        `;

        // שליחת המייל
        sendEmail({
            MemberMail: 'yakovmoshel123@gmail.com',
            subject: 'הזמנה',
            message: emailMessage,
        });

    };

    return (
        <button className={styles.orderButton} onClick={handleOrder}>
            הזמן עכשיו
        </button>
        // <Popup message="ההזמנה נשלחה בהצלחה!"/>
    );
}
