import Image from 'next/image';
import styles from './realtorService.module.scss'

//components
import Button from '@/components/global/button/button'

export default function RealtorService(){
    return(
        <section className={styles.realtor}>
            <div className="container">
                <div className={styles.realtorWrapper}>
                    <div className={styles.image}>
                        <Image src="/afterTheSale/realtor.png" width={400} height={400} alt='after the lequidations'/>
                    </div>
                    <div className={styles.info}>
                        <h1>realtor</h1>
                        <p>We can offer the services of a Realtor as our owner is a licensed real estate agent.  If your house needs some minor repairs, we can take care of those by utilizing one of our many preferred contractors within our extended network bringing up your listing price to the maximum.  Another service we offer is that of <b>“staging”</b>.  Data has shown that homes <b>staged</b> properly bring a significantly higher offer than empty houses.
                        </p>
                        <Button varient='primary' lebel="Explore Services" style={{color:"white", backgroundColor:"black"}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}