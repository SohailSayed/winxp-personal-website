import React from "react";
import Image from "next/image";
import styles from "./window.module.css";
import localFont from "next/font/local";
import ControlButtons from "./ControlButtons";
import { useWindowContext } from "@/app/WindowContext";

interface Props {
  src: string;
  alt: string;
  appName: string;
  isSelected: boolean;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const TitleBar = ({ src, alt, appName, isSelected }: Props) => {
  const { maximizedStates, setMaximizedStates } = useWindowContext();

  const handleClick = () => {
    if (event.detail == 2) {
      setMaximizedStates((prevState) => ({
        ...prevState,
        [appName]: !maximizedStates[appName],
      }));
    }
  };

  return (
    <section
      className={isSelected ? styles.titleBar : styles.titleBarInactive}
      onClick={handleClick}
    >
      <section className={styles.titleBarDraggable}>
        <Image
          className={
            isSelected ? styles.titleBarIcon : styles.titleBarIconInactive
          }
          src={src}
          alt={alt}
          width={0}
          height={0}
        />
        <p className={`${tahoma.className} ${styles.titleBarLabel}`}>
          {appName}
        </p>
      </section>
      <ControlButtons appName={appName} />
    </section>
  );
};

export default TitleBar;
