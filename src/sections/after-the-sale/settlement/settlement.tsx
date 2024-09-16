import Image from 'next/image';
import styles from './settlement.module.scss'

//components
import Button from '@/components/global/button/button'

export default function Settlement(){
    return(
        <section className={styles.settlement}>
            <div className="container">
                <div className={styles.settlementWrapper}>
                    <div className={styles.info}>
                        <h1>Settlement</h1>
                        <p>Within <b>ten (10)</b> business days after the closing of an on-site sale, we will provide you a detailed accounting of all the items sold during the sale and enclose a check to you for the proceeds.  If there are items that are out-sourced to auctions or consignments, we will settle with you within ten (10) business days after their successful sale.
                        </p>
                        <Button varient='primary' lebel="Explore Services"/>
                    </div>
                    <div className={styles.image}>
                        <Image src="/afterTheSale/settlement.png" width={400} height={400} alt='after the lequidations'/>
                    </div>
                </div>
            </div>
        </section>
    )
}