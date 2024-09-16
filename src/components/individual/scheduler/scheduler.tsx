"use client";

import { useRef } from "react";
import React, { useState , useContext} from "react";
import { ShowContext } from "@/utils/navContext";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoIosClose } from "react-icons/io";
import { GrFormPrevious } from "react-icons/gr";
import { ScheduleMeeting } from "react-schedule-meeting";

import SchedulerForm from "./form";
import styles from "./scheduler.module.scss";

interface SchedulerProps {
  isOpen?: boolean;
  setIsOpen?: boolean;
}

export default function Scheduler() {
  const {scheduleOpen, setScheduleOpen} = useContext(ShowContext);
  const [schedule, setSchedule] = useState();
  const [stage, setStage] = useState("date-pick");

  // this generates basic available timeslots for the next 6 days
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();
  const availableTimeslots = [];

  for (let day = tomorrow.getDate(); day <= daysInMonth; day++) {
    availableTimeslots.push({
      id: day,
      startTime: new Date(
        today.getFullYear(),
        today.getMonth(),
        day,
        9,
        0,
        0,
        0
      ),
      endTime: new Date(
        today.getFullYear(),
        today.getMonth(),
        day,
        17,
        0,
        0,
        0
      ),
    });
  }

  const handleClick = (time: any) => {
    setSchedule(time.startTime);
    setStage("form-fill");
  };

  const handleClose = () => {
    setScheduleOpen(false);
  };

  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(
        `.${styles.scheduler}__wrapper`,
        // { opacity: 0, y: 100 },
        { opacity: 0, y: -50, scale: 0.8, duration: 0.5, ease: "power4.inOut" }
      );
    },
    { dependencies: [scheduleOpen], scope: containerRef, revertOnUpdate: true }
  );

  return (
    <>
      {scheduleOpen ? (
        <div className={styles.scheduler} ref={containerRef}>
          <div className={styles.scheduler__wrapper}>
            <div className={styles.scheduler__header}>
              {stage === "form-fill" ? (
                <GrFormPrevious
                  className={styles.icon}
                  onClick={() => setStage("date-pick")}
                />
              ) : (
                ""
              )}
              <h1>Schedule Your Consultation</h1>
              <IoIosClose
                className={styles.icon}
                onClick={handleClose}
              />
            </div>
            {stage === "date-pick" ? (
              <ScheduleMeeting
                className={styles.scheduler__schedule_meeting}
                borderRadius={10}
                primaryColor="#FFAA05"
                eventDurationInMinutes={30}
                availableTimeslots={availableTimeslots}
                startTimeListStyle="scroll-list"
                skipConfirmCheck={true}
                onStartTimeSelect={handleClick}
              />
            ) : (
              <SchedulerForm schedule={schedule} />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
