'use client'

import Navlink from "@/components/individual/navlink/navlink";
import Style from './navbar.module.scss'
import { useState, useEffect, useContext } from "react";
import Button from "@/components/global/button/button";

//import navlinks
import { navlinks } from "./navlinks";

//context api
import { ShowContext } from "@/utils/navContext";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { show, setShow } = useContext(ShowContext);
  const { scheduleOpen, setScheduleOpen } = useContext(ShowContext);

  const handleClick = ()=>{
    setShow(!show);
  }
  const handleScheduleClick = () => {
    setScheduleOpen(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`${Style.navbar} ${scrolled && Style.active} ${show ? Style.show : Style.hidden}`}>
      <div className="container">
        <div className={Style.navWrapper}>
          {navlinks.map(({ lebel, link, arrow }, index) => {
            return <Navlink key={index} lebel={lebel} link={link} arrow={arrow} scrolled={scrolled}/>;
          })}
          <div className={Style.action}>
          <Button varient="secondary"  lebel="Schedule" link="/" onclick={handleScheduleClick}/>
          <Button varient="primary" lebel="Contact" link="#contact"/>
          </div>
        </div>
      </div>
    </nav>
  );
}
