import Image from 'next/image'
import styles from './ourRates.module.scss'

export default function OurRates(){
    return(
        <section className={styles.OurRates}>
            <div className="container">
                <div className={styles.OurRatesWrapper}>
                    <div className={styles.image}>
                        <Image src="/ourRatesAreas/ourRates.png" alt='five start state lequidations rates' width={500} height={500}/>
                    </div>
                    <div className={styles.info}>
                        <h1>Our Rates</h1>
                        <div className={styles.text}>
                            <p>We take a percentage of the total receipts.  The rate varies from 35 to 50 percent depending on several factors including the size and contents of your estate.  We will evaluate your estate during our free consultation and come to an agreement on the services we will provide and the rate.  Our contract puts everything in writing so there is no misunderstanding regarding any aspect of your estate liquidation.  Remember, there are no up-front fees, and the consultation is free. 
                            </p>
                            <p>
                                <b> A word about the expenses involved in liquidating an estate.</b>
                            </p>
                            <p>
                            There can be quite a lot of expense involved in liquidating an estate.  The cost of advertising, the professional signage, the merchant fees on credit or debit cards and the labor cost names just a few.  We cover all the expenses out of our percentage except for the cost of staff.  That expense is deducted from the gross proceeds before the commission split.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}