import Link from 'next/link'
import Style from './services.module.scss'

//component
import ServicesCard from '@/components/individual/services/card/card'
import Button from '@/components/global/button/button'

//import data
import {servicesData} from './services.data'

//icon
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Services(){
    return(
        <section className={Style.services} id='services'>
            <div className="container">
                <div className={Style.servicesWrapper}>
                    <div className={Style.header}>
                        <h1>Our Services</h1>
                        <p>Expert appraisals, strategic marketing, professional staging, and complete accounting for seamless estate sales.</p>
                    </div>
                    <div className={Style.servicesBody}>
                        {
                            servicesData.map((service, index)=>{
                                return(
                                    <ServicesCard 
                                    key={index}
                                    banner={service.banner}
                                    icon={service.icon}
                                    title={service.title}
                                    desc={service.desc}
                                    link={service.link}
                                    color={service.color}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={Style.cta}>
                        <Button lebel="Explore More" varient="primary" link='/after-the-sale' />
                        <Link href="/#contact">
                            <span>Contact Us</span>
                            <IoIosArrowRoundForward />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}