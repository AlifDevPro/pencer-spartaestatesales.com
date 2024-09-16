import { CSSProperties, ReactElement } from 'react';
import Style from './card.module.scss'

//icons

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface cardProps {
    icon: ReactElement,
    title: string,
    desc: string,
    color: string,
}


export default function Card({icon, title, desc, color}: cardProps){
    return(
        <div className={Style.card} style={{borderColor: `rgba(${color}, 1)`, backgroundColor: `rgba(${color}, .01)`}}>
            <article className={Style.cardWrapper}>
                <div className={Style.icon} style={{backgroundColor: `rgba(${color}, 1)`}}>
                    {icon}
                </div>
                <h2>{title}</h2>
                <p>{desc}</p>
                <HiOutlineArrowNarrowRight />
            </article>
        </div>
    )
}