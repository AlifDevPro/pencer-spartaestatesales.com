import Image from 'next/image'
import styles from './footerInfo.module.scss'

export default function FooterInfo(){
    return(
        <div className={styles.footerInfo}>
            <div className="icon">
                <Image src="/logo.png" alt="five star estate lequidations" width={100} height={100}/>
            </div>
            <h1>Five Star Estate Lequidations</h1>
            <p>Helping You Through Life&apos;s Transitions and Funding the Next Chapter of Your Life.</p>
        </div>
    )
}