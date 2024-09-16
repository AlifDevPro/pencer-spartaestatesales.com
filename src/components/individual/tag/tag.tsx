'use client'

import styles from './tag.module.scss';
import { useEffect, useState } from 'react';

export default function Tag(){
    const [domain, setDomain] = useState('')
    useEffect(()=>{
        const location = window.location.href.split('/')[2];
        const domain = location.split('.')[1];
        setDomain(domain)
    },[])
    
    const getDomainTag = (domain: string) => {
        switch (domain) {
            case "localhost:3000":
                return "#Local Host";
            case "pikevilleestatesales":
                return "#Pikeville Estate Sales";
            case "chattanoogaestatesale":
                return "#Chattanooga Estate Sale";
            case "hamiltoncountyestatesales":
                return "#Hamilton County Estate Sales";
            case "crossvilleestatesales":
                return "#Crossville Estate Sales";
            case "fairfieldgladeestatesales":
                return "#Fairfield Glade Estate Sales";
            case "dunlapareaestatesales":
                return "#Dunlap Area Estate Sales";
            case "daytonestatesales":
                return "#Dayton Estate Sales";
            case "spencer-spartaestatesales":
                return "#Spencer-Sparta Estate Sales";
            default:
                return "#Five Star Estae Lequidations";
        }
    };

        return(
        <span className={styles.tag}>{getDomainTag(domain)}</span>
    )
}