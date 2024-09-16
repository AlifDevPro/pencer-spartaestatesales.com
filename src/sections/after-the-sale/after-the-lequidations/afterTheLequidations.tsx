import Image from 'next/image';
import styles from './afterTheLequidations.module.scss'

//components
import Button from '@/components/global/button/button'

export default function AfterTheLequidations(){
    return(
        <section className={styles.afterTheLequidations}>
            <div className="container">
                <div className={styles.afterTheLequidationsWrapper}>
                    <div className={styles.image}>
                        <Image src="/afterTheSale/after-the-lequidations.png" width={400} height={400} alt='after the lequidations'/>
                    </div>
                    <div className={styles.info}>
                        <h1>After the Liquidation</h1>
                        <p>Usually there are a few items left after an on-site estate sale. We have several dealers who we can call and invite in to give us a bid on everything left. Ninety nine percent of the time a dealer will give us an acceptable bid and they take everything left. In the unlikely event we cannot secure an acceptable bid for those leftovers, we will remove those and donate them to a charity and provide you with a tax-deductible receipt. We then will remove all our equipment and leave the house <b>“broom”</b> clean.
                        </p>
                        <Button varient='primary' lebel="Explore Services" style={{color:"#fff", backgroundColor:"black"}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}