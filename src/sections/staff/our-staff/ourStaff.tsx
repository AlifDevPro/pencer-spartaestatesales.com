import Image from 'next/image'
import styles from './ourStaff.module.scss'

export default function OurStaff(){
    return(
        <section className={styles.ourStaff}>
            <div className="container">
                <div className={styles.ourStaffWrapper}>
                <div className={styles.image}>
                    <Image src="/ourStaff/ourStaff.png" alt="five star estate elquidations staff" width={500} height={500} />
                </div>
                <div className={styles.info}>
                    <h1>Our Staff</h1>
                    <p>We have a staff of ultimate professionals experienced in estate liquidation consulting, consigning and auctions led by the owner, Ron Fields.  Each member of our team will be in uniform which easily identifies them as staff. In addition, we have a vast network of appraisers and accessors who we can bring in for unique items.  
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}