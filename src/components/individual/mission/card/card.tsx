import { ReactElement } from 'react';
import Style from './card.module.scss'
import { ImPriceTag } from "react-icons/im";

interface cardProps{
    icon: ReactElement,
    desc: string, 
    tag: string
}

export default function MissionCard({icon, desc, tag}: cardProps){
    return(
        <div className={Style.missionCard}>
            <div className={Style.cardWrapper}>
                <div className={Style.icon}>
                    {icon}
                </div>
                <h3 className={Style.title}>{desc}</h3>
                <span className={Style.tag}>{tag}</span>
            </div>
        </div>
    )
}