'use client'
import { useContext } from 'react'
import { ShowContext } from "@/utils/navContext";
import Button from "@/components/global/button/button"

export default function Cta(){
    const {setScheduleOpen} = useContext(ShowContext);
    const handleClick = () => {
        return setScheduleOpen(true)
    }
    return(
        <>
        <Button onclick={handleClick} lebel="Free Consultation" varient="primary" link=""/>
        <Button lebel="Contact" varient="secondary" link="/#contact"/>
        </>
    )
}