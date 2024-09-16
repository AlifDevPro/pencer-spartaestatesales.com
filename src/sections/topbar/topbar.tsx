'use client'

import Button from "@/components/global/button/button";
import Style from "./topbar.module.scss";
import { useEffect, useState, useCallback, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "@/components/global/logo/logo";
import ContactDetails from "@/components/individual/contactDetail/contactDetail";
import Search from "@/components/individual/search/search";
import Headroom from "react-headroom";

//context api
import { ShowContext } from "@/utils/navContext";

export default function Topbar() {
  const { show, setShow } = useContext(ShowContext);
  const { scheduleOpen, setScheduleOpen } = useContext(ShowContext);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = ()=>{
    setShow(!show);
  }
  const handleScheduleClick = () => {
    setScheduleOpen(true)
  }

  return (
    <Headroom style={{zIndex:"999"}}>
    <nav className={`${Style.navbar} `}>
      <div className="container">
        <div className={Style.logoSearch}>
          <Logo />
          <span></span>
          <Search />
        </div>
        <div className={Style.infoAction}>
          <div className={Style.contactDetails}>
            <ContactDetails varient="call" lebel="Call Us"/>
            <ContactDetails varient="mail" lebel="Mail Us"/>
          </div>
          <span></span>
          <div className="action">
            <Button varient="secondary"  lebel="Schedule" link="/" onclick={handleScheduleClick}/>
            <Button varient="primary" lebel="Contact" link="#contact"/>
          </div>
          <div className={Style.menuIcon} onClick={handleClick}>
              <AiOutlineMenu />
          </div>
        </div>
      </div>
    </nav>
    </Headroom>
  );
}
