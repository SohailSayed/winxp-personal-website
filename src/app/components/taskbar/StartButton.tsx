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
  const [open, setOpen] = useState(false);

  // Change boolean back and forth for now, temporary to test visual
  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  const handleHover = (hover: boolean) => {
    setIsHover(hover);
  };

  const StartMiddleSection = ({ startLabel }: Props) => {
    // This part is overly verbose, but it works
    const middleHoverCheck = isHover
      ? styles.startMiddleSectionHover
      : styles.startMiddleSection;
    const middleOpenHoverCheck = isHover
      ? styles.startMiddleSectionHoverOpen
      : styles.startMiddleSectionOpen;

    return (
      <section
        className={open ? middleOpenHoverCheck : middleHoverCheck}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onClick={handleClick}
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

  // This part is overly verbose, but it works
  const backHoverCheck = isHover
    ? styles.startBackSectionHover
    : styles.startBackSection;
  const backOpenHoverCheck = isHover
    ? styles.startBackSectionHoverOpen
    : styles.startBackSectionOpen;

  const endHoverCheck = isHover
    ? styles.startEndSectionHover
    : styles.startEndSection;
  const endOpenHoverCheck = isHover
    ? styles.startEndSectionHoverOpen
    : styles.startEndSectionOpen;

  return (
    <>
      <section
        className={open ? backOpenHoverCheck : backHoverCheck}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      />
      <StartMiddleSection startLabel="About Me" />
      <section
        className={open ? endOpenHoverCheck : endHoverCheck}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      />
    </>
  );
};

export default StartButton;
