import FaqCom from '@/components/individual/faq/faqcom.tsx';
import { faqData } from './faq.data.js';
import styles from './faq.module.scss';

export default function Faq() {
  return (
    <section className={styles.faq} id="faqs">
      <div className="container">
        <div className={styles.faq_wrapper}>
          <div className={styles.faq_header}>
            <span className={styles.bg_tertiary}>
              Quick Answer
            </span>
            <h1 className={styles.header_title}>
              Frequently asked questions
            </h1>
            <p className={styles.header_subtitle}>
              Your go-to resource for quick answers to common inquiries.
            </p>
          </div>
          <div className={styles.grid}>
            {faqData.map((faq: any, index) => {
              return (
                <FaqCom 
                  key={index}
                  question={faq.title}
                  answer={faq.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
