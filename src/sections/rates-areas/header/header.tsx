import styles from './header.module.scss'

//components
import Button from '@/components/global/button/button'

export default function Header(){
    return(
        <section className={styles.header}>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <h1>Our Rates & Areas We Serve</h1>
                    <p>Transparent Estate Liquidation Services Across Middle-Eastern Tennessee with No Up-Front Fees</p>
                    <Button varient="primary" lebel='Learn More'/>
                </div>
            </div>
        </section>
    )
}