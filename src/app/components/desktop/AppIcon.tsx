"use client";
import Image from "next/image";
import styles from "./desktop.module.css";
import { useWindowContext } from "@/app/WindowContext";
import { pushToTop } from "@/app/helper/stackHelper";
import localFont from "next/font/local";
import { defaultOpenStates } from "@/app/constants/defaultValues";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const AppIcon = ({ src, alt, appName }: Props) => {
  const { openStates, setOpenStates } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();
  const [highlightedStates, setHighlightedStates] =
    useState<Record<string, boolean>>(defaultOpenStates);
  const isHighlighted = highlightedStates[appName];

  const handleClick = (appName: string) => {
    if (event.detail == 2) {
      handleDoubleClick(appName);
    }
    setHighlightedStates((prevState) => ({
      ...prevState,
      [appName]: !isHighlighted,
    }));
  };

  const handleDoubleClick = (appName: string) => {
    if (openStates[appName] != true) {
      const zIndex = appStack.length;

      setAppStack((prevState) => [...prevState, { appName, zIndex }]);

      setOpenStates((prevState) => ({
        ...prevState,
        [appName]: true,
      }));
    } else {
      const index = appStack.findIndex((item) => item.appName === appName);

      const modifiedStack = pushToTop(appStack, index);
      setAppStack(modifiedStack);
    }
  };

  const iconMask = (
    <section
      className={styles.appIconMask}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
      }}
    />
  );

  const labelStyle = isHighlighted
    ? styles.appIconLabelHighlighted
    : styles.appIconLabel;

  return (
    <>
      <section className={styles.appIcon} onClick={() => handleClick(appName)}>
        {isHighlighted && iconMask}
        <Image
          className={styles.appIconImage}
          src={src}
          alt={alt}
          width={0}
          height={0}
        />
        <div className={`${tahoma.className} ${labelStyle}`}>{appName}</div>
      </section>
    </>
  );
};

export default AppIcon;
