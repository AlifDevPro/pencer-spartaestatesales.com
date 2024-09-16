import styles from './contact.module.scss'

//componetns
import ContactForm from "@/components/individual/contact/contactForm/contactForm";
import ContactDetails from '@/components/individual/contact/contactDetails/contactDetails';

export default function Contact(){
    return(
        <section className={styles.contact} id='contact'>
            <div className="container">
                <div className={styles.contactWrapper}>
                    <ContactForm />
                    <ContactDetails />
                </div>
            </div>
        </section>
    )
}