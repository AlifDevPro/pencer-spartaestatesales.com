import styles from './contactDetails.module.scss'

//icons
import { MdPhoneEnabled } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default function ContactInfo(){
    return(
        <div className={styles.contactInfo}>
            <h1>Connect with us</h1>
            <p>Have Questions or Need Assistance? We&apos;re Here to Help You Every Step of the Way!</p>
            <div className={styles.contactInfoWrapper}>
                <div className={styles.call}>
                    <MdPhoneEnabled />
                    <span>423-497-2750</span>
                </div>
                <div className={styles.email}>
                    <MdEmail />
                    <span>info@5starestateliquidations.com</span>
                </div>
                <div className={styles.address}>
                    <IoLocationSharp />
                    <span>PO Box 108 Pikeville, TN  37367</span>
                </div>
            </div>
        </div>
    )
}