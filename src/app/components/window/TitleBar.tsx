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
  const { setProjectGuide, setResumeGuide } = useWindowContext();

  const handleClick = () => {
    // eslint-disable-next-line no-use-before-define
    // @ts-expect-error: Type not being considered for event, used to handle double click
    if (event.detail == 2) {
      setProjectGuide(false);
      setResumeGuide(false);
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
          width={1}
          height={1}
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
