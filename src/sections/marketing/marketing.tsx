
import Style from './marketing.module.scss'
import Image from 'next/image'

//components
import Point from '@/components/individual/about/point/point'
import Button from '@/components/global/button/button'
import Cta from './cta'

import marketingImg from '../../../public/homeAssets/marketing.png'


export default function Marketing(){
    
    return(
        <section className={Style.marketing} id='sales'>
            <div className="container">
                <div className={Style.marketingWrapper}>
                    <div className={Style.info}>
                        <div className={Style.headline}>
                            <h1>Hassle-Free Estate Sales</h1>
                        </div>
                        <div className="body">
                            <div className={Style.points}>
                                <Point 
                                heading="Stress-Free"
                                desc="We aim to minimize your stress by working with you in a professional and caring manner."
                                />
                                <Point 
                                heading="Commitment"
                                desc="Our attention to detail and dedication ensures your peace of mind. We handle everything, treating your estate as our own."
                                />
                                <Point 
                                heading="Reputation"
                                desc="Our reputation is above reproach, guaranteeing you have found a trustworthy company."
                                />
                                <Point 
                                heading="Consultations"
                                desc="Our consultations are free with no upfront cost."
                                />
                            </div>
                        </div>
                        <div className={Style.cta}>
                            <Cta />
                        </div>
                    </div>
                    <div className="image">
                        <Image src={marketingImg} width={500} height={500} alt='marketing'/>
                    </div>
                </div>
            </div>
        </section>
    )
}