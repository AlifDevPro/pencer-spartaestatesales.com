import styles from './header.module.scss'

//components
import Button from '@/components/global/button/button'

export default function Header(){
    return(
        <section className={styles.header}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <h1>After The Sale</h1>
                    <p>Helping You Through Life&apos;s Transitions and Funding the Next Chapter of Your Life.</p>
                    <Button varient="primary" lebel='Learn More'/>
                </div>
            </div>
        </section>
    )
}