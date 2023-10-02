"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./taskbar.module.css";
import { useWindowContext } from "@/app/WindowContext";
import { pushToTop } from "@/app/helper/stackHelper";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const LargeAppIcon = ({ src, alt, appName }: Props) => {
  const { minimizedStates, setMinimizedStates } = useWindowContext();
  const { openStates, setOpenStates } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();
  const isMinimized = minimizedStates[appName];
  const isOpen = openStates[appName];

  const index = appStack.findIndex((item) => item.appName === appName);

  const handleClick = (appName: string) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [appName]: true,
    }));
    setMinimizedStates((prevState) => ({
      ...prevState,
      [appName]: false,
    }));
    const modifiedStack = pushToTop(appStack, index);
    setAppStack(modifiedStack);
  };

  const zIndexValue = appStack[index] ? appStack[index].zIndex : -1;
  const isSelected = zIndexValue + 1 == appStack.length ? true : false;

  const openStyle =
    isSelected && !isMinimized
      ? styles.largeAppIconOpen
      : styles.largeAppIconMinimized;
  return (
    <section
      className={`${styles.largeAppIconShared} ${
        isOpen ? openStyle : styles.largeAppIconClosed
      }`}
      onClick={() => handleClick(appName)}
    >
      {appName == "Why I'm a Good Fit for Sizzle" ? (
        <img className={styles.largeAppIconImage} src={src} alt={alt} />
      ) : (
        <Image
          className={styles.largeAppIconImage}
          src={src}
          alt={alt}
          width={1}
          height={1}
        />
      )}
      <p className={`${tahoma.className} ${styles.largeAppIconLabel}`}>
        {appName}
      </p>
    </section>
  );
};

export default LargeAppIcon;
