import Image from 'next/image'
import styles from './areas.module.scss'

//import data
import {counties} from './map.data.js'

export default function Areas(){
    return(
        <section className={styles.areas} id='areas'>
            <div className="container">
                <div className={styles.areasWrapper}>
                    <div className={styles.header}>
                        <h1>Areas We Serve</h1>
                        <p>Five Star Estate Liquidations serves a 35 county area in middle-eastern Tennessee.
                        </p>
                    </div>
                    <Image src="/ourRatesAreas/areas.png" alt="" width={500} height={500}/>
                    <div className={styles.textMap}>
                        {
                            counties.map((value, index)=>{
                                return(
                                    <div key={index} className={styles.text}>
                                        <p>{value}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}