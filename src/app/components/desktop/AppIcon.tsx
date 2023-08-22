"use client";
import Image from "next/image";
import styles from "./desktop.module.css";
import { useWindowContext } from "@/app/WindowContext";
import { pushToTop } from "@/app/helper/stackHelper";
import localFont from "next/font/local";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface Props {
  src: string;
  alt: string;
  appName: string;
  url: string;
  highlightedApp: string;
  setHighlightedApp: Dispatch<SetStateAction<string>>;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const AppIcon = ({
  src,
  alt,
  appName,
  url,
  highlightedApp,
  setHighlightedApp,
}: Props) => {
  const { openStates, setOpenStates } = useWindowContext();
  const { setSizePosStates } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();
  const { setProjectGuide, setResumeGuide } = useWindowContext();

  const isHighlighted = highlightedApp === appName;

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);

  const handleClickOutside = (e: Event) => {
    const clickedElement = e.target as HTMLElement;
    const elementClass = clickedElement.classList.value;
    const insideIcon = elementClass.includes("desktop_appIcon");
    if (!insideIcon) {
      setHighlightedApp("");
    }
  };

  const handleClick = (appName: string) => {
    // eslint-disable-next-line no-use-before-define
    // @ts-expect-error: Type not being considered for event, used to handle double click
    if (event && event.detail == 2) {
      handleDoubleClick(appName);
    } else {
      setHighlightedApp(appName);
    }
  };

  const handleDoubleClick = (appName: string) => {
    if (openStates[appName] != true) {
      setProjectGuide(false);
      setResumeGuide(false);
      setHighlightedApp("");

      const zIndex = appStack.length;
      const shiftValue = zIndex % 3;
      const slideValue = Math.floor(zIndex / 3) * 150;

      const defaultX = 200 + slideValue + shiftValue * 30;
      const defaultY = shiftValue * 18;
      setSizePosStates((prevState) => ({
        ...prevState,
        [appName]: { width: "60vw", height: "90vh", x: defaultX, y: defaultY },
      }));

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

  const isMobile = window.innerWidth <= 768;
  const mobileHref = isMobile ? url : undefined;

  const labelStyle = isHighlighted
    ? styles.appIconLabelHighlighted
    : styles.appIconLabel;

  return (
    <a target="_blank" href={mobileHref} rel="noreferrer">
      <section
        className={styles.appIcon}
        onClick={() => handleClick(appName)}
        ref={refOne}
      >
        {isHighlighted && iconMask}
        <Image
          className={styles.appIconImage}
          src={src}
          alt={alt}
          width={1}
          height={1}
        />
        <div className={`${tahoma.className} ${labelStyle}`}>{appName}</div>
      </section>
    </a>
  );
};

export default AppIcon;
