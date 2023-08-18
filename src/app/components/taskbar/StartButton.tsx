"use client";

import localFont from "next/font/local";
import styles from "./taskbar.module.css";
import React, { useEffect, useState } from "react";
import { useWindowContext } from "@/app/WindowContext";

interface Props {
  startLabel: string;
}

const tahomaBold = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const StartButton = () => {
  const [isHover, setIsHover] = useState(false);
  const { startOpen, setStartOpen } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();
  const { setStartGuide } = useWindowContext();

  useEffect(() => {
    const appName = "Start Page";
    if (startOpen) {
      const zIndex = appStack.length;

      setAppStack((prevState) => [...prevState, { appName, zIndex }]);
    } else {
      setAppStack((prevState) =>
        prevState.filter((item) => item.appName !== appName)
      );
    }
  }, [startOpen]);

  const handleClick = () => {
    setStartGuide(false);
    setStartOpen(true);
  };

  const handleHover = (hover: boolean) => {
    setIsHover(hover);
  };

  const StartMiddleSection = ({ startLabel }: Props) => {
    const middleHoverCheck = isHover
      ? styles.startMiddleSectionHover
      : styles.startMiddleSection;
    const middleOpenHoverCheck = isHover
      ? styles.startMiddleSectionHoverOpen
      : styles.startMiddleSectionOpen;

    return (
      <section
        className={startOpen ? middleOpenHoverCheck : middleHoverCheck}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onClick={handleClick}
      >
        <img
          src="/icons/windowsXPIcon.png"
          className={styles.startWindowsXPIcon}
          alt="Windows XP Icon"
        />
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
        className={startOpen ? backOpenHoverCheck : backHoverCheck}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onClick={handleClick}
      />
      <StartMiddleSection startLabel="About Me" />
      <section
        className={startOpen ? endOpenHoverCheck : endHoverCheck}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onClick={handleClick}
      />
    </>
  );
};

export default StartButton;
