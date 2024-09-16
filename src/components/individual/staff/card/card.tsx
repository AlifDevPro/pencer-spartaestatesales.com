import styles from './card.module.scss'
//icons
import { MdLocalParking } from "react-icons/md";

interface cardProps{
    icon:string,
    title:string, 
    desc:string,
    color:string
}

export default function StaffCard({icon, title, desc, color}:cardProps){
    return(
        <div className={styles.staffCard}>
            <div className={styles.icon} >
                {icon}
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}