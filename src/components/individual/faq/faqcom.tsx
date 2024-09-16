"use client";

import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import styles from "./faq.module.scss";

//import icons
import { MdOutlineExpandMore } from "react-icons/md";

interface FaqComProps {
  question: string;
  answer: string;
}

const FaqCom: React.FC<FaqComProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.faq_com}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className={styles.faq_com_wrapper}>
        <div className={styles.faq_header}>
          <span className={styles.text_md}>
            {question}
          </span>
          <MdOutlineExpandMore className={`${styles.text_xl} ${styles.text_description} ${open ? styles.open : styles.close}`} />
        </div>
        {open ? (
          <TypeAnimation
            className={styles.text_sm}
            sequence={[answer]}
            wrapper="p"
            speed={99}
            repeat={1}
            cursor={false}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FaqCom;
