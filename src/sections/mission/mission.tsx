import Image from "next/image";
import Style from "./mission.module.scss";

//component
import MissionCard from "@/components/individual/mission/card/card";
import Button from "@/components/global/button/button";

import missionImg from '../../../public/homeAssets/mission.png'

//import data
import { missionData } from "./mission.data";

export default function Mission() {
  return (
    <section className={Style.mission} id="mission">
      <div className={Style.missonWrapper}>
        <div className={Style.banner}>
          <Image src={missionImg} alt="mission" width={400} height={400}/>
        </div>
        <div className={Style.body}>
          <div className={Style.header}>
            <h1>Our Mission</h1>
            <p>
              Deliver transparent, honest service with clear communication,
              optimal value, accurate accounting, and a five-star experience.
            </p>
          </div>
          <div className={Style.cardWrap}>
            {missionData.map((value, index) => {
              return (
                <MissionCard 
                  key={index}
                  icon={value.icon}
                  desc={value.desc}
                  tag={value.tag}
                />
              );
            })}
          </div>
          <div className="cta">
            <Button
              varient="primary"
              lebel="Learn More"
              style={{ backgroundColor: "black", color: "white" }}
              link="/our-staff"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
