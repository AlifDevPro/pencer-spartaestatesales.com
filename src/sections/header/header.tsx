import Style from "./header.module.scss";
import { Metadata } from "next";

//components
import Button from "@/components/global/button/button";
import Tag from "@/components/individual/tag/tag";

export default function Header() {
  return (
    <section className={Style.header}>
      <div className="container">
        <div className={Style.headerWrapper}>
          <Tag />
          <h1>
            Helping You Through Life&apos;s <br /> Transitions and Funding the Next <br /> Chapter
            of Your Life.
          </h1>
          <p>
          Experience the best estate sales in Spencer Sparta with Five Star Estate Liquidations. Our professional and experienced team is ready to help you transition through life&apos;s changes by maximizing the value of your estate.`
          </p>
          <div>
            <Button varient="primary" lebel="Services" link="#services"/>
            <Button varient="secondary" lebel="Explore" link="#why-us" style={{color:'#fff'}}/>
          </div>
        </div>
      </div>
    </section>
  );
}