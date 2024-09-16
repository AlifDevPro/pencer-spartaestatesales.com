import Image from 'next/image'
import Style from './body.module.scss'
import Point from '../point/point'
import Button from '@/components/global/button/button'
import aboutImg from '../../../../../public/homeAssets/about.png'

export default function Body(){
    return(
        <div className={Style.body}>
            <div className={Style.image}>
                <h1>Transition Your Treasures with Ease</h1>
                <Image src={aboutImg} alt="5start Estate Sales" width={500} height={500}/>
            </div>
            <div className={Style.info}>
                <div className={Style.points}>
                    <Point 
                        heading="Estate Sales"
                        desc="We handle everything for your on-site estate sale, from organization to pricing, to maximize sales results while minimizing stress."
                    />
                    <Point 
                        heading="Auction House Placement"
                        desc="Trust us to place your items in reputable auction houses, managing logistics and showcasing to attract buyers."
                    />
                    <Point
                        heading="Internet Auctions"
                        desc="Maximize your item's value with online auctions, leveraging global reach and convenience, managed by our expert team."
                     />
                    <Point 
                        heading="Consignment Services"
                        desc="Sell your items hassle-free with our consignment service, where we handle curation, marketing, and transactions for you."
                    />
                </div>
                <div className={Style.cta}>
                    <Button 
                        varient="primary"
                        lebel="Read FAQs"
                        link='#faqs'
                    />
                    
                </div>
            </div>
        </div>
    )
}