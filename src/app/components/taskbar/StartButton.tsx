"use client";

import localFont from "next/font/local";
import styles from "./taskbar.module.css";
import { useState } from "react";

interface Props {
  startLabel: string;
}

const tahomaBold = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const StartButton = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = (hover: boolean) => {
    setIsHover(hover);
  };

  const StartMiddleSection = ({ startLabel }: Props) => {
    return (
      <section
        className={
          isHover ? styles.startMiddleSectionHover : styles.startMiddleSection
        }
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <img
          src="/icons/windowsXPIcon.png"
          height="60%"
          style={{
            filter: "drop-shadow(2px 2px 3px) blur(0.5px)",
            alignContent: "flex-start",
            marginRight: "10px",
          }}
        />
        <p
          className={tahomaBold.className}
          style={{
            fontStyle: "italic",
            marginRight: "10px",
            color: "#FDFDFD",
            textShadow: "1px 1.5px 5px #000000",
            fontSize: "130%",
          }}
        >
          {startLabel}
        </p>
      </section>
    );
  };

  return (
    <>
      <section
        className={
          isHover ? styles.startBackSectionHover : styles.startBackSection
        }
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      />
      <StartMiddleSection startLabel="About Me" />
      <section
        className={
          isHover ? styles.startEndSectionHover : styles.startEndSection
        }
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      />
    </>
  );
};

export default StartButton;
