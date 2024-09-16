import styles from './footer.module.scss'

//components
import FooterInfo from '@/components/individual/footer/info/footerInfo'
import SectionOne from '@/components/individual/footer/sectionOne/sectionOne';
import SectionTwo from '@/components/individual/footer/sectionTwo/sectionTwo';
import SectionThree from '@/components/individual/footer/sectionThree/sectionThree';
import SectionFour from '@/components/individual/footer/sectionFour/sectionFour';

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerWrapper}>
                    <div className={styles.section}>
                        <SectionOne />
                        <SectionTwo />
                        <SectionThree />
                        <SectionFour />
                    </div>
                    <div className={styles.privacy}>
                        <p>&copy; 2024 Five Star Estate Liquidations. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}