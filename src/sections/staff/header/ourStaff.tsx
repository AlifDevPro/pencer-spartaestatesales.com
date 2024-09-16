import styles from './ourStaff.module.scss'

//components
import Button from '@/components/global/button/button'

export default function Header(){
    return(
        <section className={styles.header}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <h1>Our Staff</h1>
                    <p>A professional team, led by Ron Fields, handles estate liquidation with specialized staff and appraisers.</p>
                    <Button varient="primary" lebel='Learn More'/>
                </div>
            </div>
        </section>
    )
}