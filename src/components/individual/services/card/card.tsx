import Link from "next/link"

//style
import Style from './card.module.scss'

//icon
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";
import { ReactElement } from "react";


//types
interface servicesCardProps {
    banner:string,
    icon:ReactElement,
    title:string,
    desc:string,
    link:string,
    color: string,
}

export default function ServicesCard({banner, icon, title, desc, link, color}: servicesCardProps){
    return(
        <div className={Style.servicesCard}>
            <div className={Style.background} style={{backgroundImage: `url("${banner}")`}}></div>
            <div className={Style.icon} style={{color: color}}>
                {icon}
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className={Style.cta}>
                <Link href="/">
                    <span>Learn More</span>
                    <HiOutlineArrowNarrowRight />
                </Link>
            </div>
        </div>
    )
}