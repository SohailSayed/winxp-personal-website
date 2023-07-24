"use client";
import { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./taskbar.module.css";
import { useWindowContext } from "@/app/WindowContext";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const LargeAppIcon = ({ src, alt, appName }: Props) => {
  const { setMinimizedStates } = useWindowContext();
  const { openStates, setOpenStates } = useWindowContext();
  const isOpen = openStates[appName];

  const handleClick = (appName: string) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [appName]: true,
    }));
    setMinimizedStates((prevState) => ({
      ...prevState,
      [appName]: false,
    }));
  };

  return (
    <section
      className={`${styles.largeAppIconShared} ${
        isOpen ? styles.largeAppIconOpen : styles.largeAppIconMinimized
      }`}
      onClick={() => handleClick(appName)}
    >
      <Image
        className={styles.largeAppIconImage}
        src={src}
        alt={alt}
        width={0}
        height={0}
      />
      <p className={`${tahoma.className} ${styles.largeAppIconLabel}`}>
        {appName}
      </p>
    </section>
  );
};

export default LargeAppIcon;
