"use client";

import localFont from "next/font/local";
import styles from "./taskbar.module.css";
import { useState } from "react";
import { useWindowContext } from "@/app/WindowContext";
import { trueOpenStates } from "../constants/defaultValues";

interface Props {
  startLabel: string;
}

const tahomaBold = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const StartButton = () => {
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);
  const { setOpenStates } = useWindowContext();

  // VERY temporarily use this to bring all the tabs back, until homepage icons implemented
  const handleClick = () => {
    setOpenStates(trueOpenStates);
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
        <img src="/icons/windowsXPIcon.png" className={styles.windowsXPIcon} />
        <p className={`${tahomaBold.className} ${styles.startLabel}`}>
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
