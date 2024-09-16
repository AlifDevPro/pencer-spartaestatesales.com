import Link from 'next/link'
import Style from './navlink.module.scss'
import {useContext} from 'react'

//icons
import { IoIosArrowRoundForward } from "react-icons/io";

//context
import {ShowContext} from "@/utils/navContext"

interface navlinkProps{
    lebel?:String,
    link?:String,
    arrow?:boolean,
    scrolled?:boolean,
}

export default function  Navlink({lebel, link, arrow, scrolled}: navlinkProps){
    const { show, setShow } = useContext(ShowContext);
    const handleClick = ()=>{
        setShow(false)
    }
    return(
        <Link className={`${scrolled ? Style.active : Style.link}`} href={`${link}`} onClick={handleClick}>
            <span>{lebel}</span>
            {
                arrow ? <IoIosArrowRoundForward /> : ''
            }
        </Link>
    )
}