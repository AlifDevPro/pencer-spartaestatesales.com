import styles from './sectionOne.module.scss';

export default function SectionOne(){
    return(
        <div className={styles.sectionOne}>
            <div className={styles.services}>
                <h1 className={styles.footerHeading}>Services</h1>
                <ul>
                    <li><a href="/#services">On-site Estate Sales</a></li>
                    <li><a href="/#services">Auction House Placement</a></li>
                    <li><a href="/#services">Internet Auctions</a></li>
                    <li><a href="/#services">Consignment Services</a></li>
                    <li><a href="/#services">Estate Buy-out</a></li>
                </ul>
            </div>
            <div className={styles.areas}>
                <h1 className={styles.footerHeading}>Coverage Area</h1>
                <ul>
                    <li><a href="/rates-areas/#areas">Serving modest homes and luxury estates in a 35-county area in Tennessee.</a></li>
                </ul>
            </div>
        </div>
    )
}