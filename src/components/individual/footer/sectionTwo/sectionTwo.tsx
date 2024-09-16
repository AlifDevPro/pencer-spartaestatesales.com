import styles from './sectionTwo.module.scss';

export default function SectionTwo(){
    return(
        <div className={styles.sectionTwo}>
            <div className={styles.services}>
                <h1 className={styles.footerHeading}>Contact Us</h1>
                <ul>
                    <li>Call: 423-497-2750</li>
                    <li>Mail: 5starliquidations@gmail.com</li>
                    <li>Address: PO Box 108 Pikeville, TN  37367</li>
                    <li>website: 5starliquidations.com</li>
                </ul>
            </div>
            <div className={styles.consultation}>
                <h1 className={styles.footerHeading}>Our rates</h1>
                <ul>
                    <li>Our consultations are free and there is no up-front cost.</li>
                </ul>
            </div>
            <div className={styles.businessHour}>
                <h1 className={styles.footerHeading}>Business Hours</h1>
                <ul>
                    <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                    <li>Saturday: 10:00 AM - 2:00 PM</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>
        </div>
    )
}