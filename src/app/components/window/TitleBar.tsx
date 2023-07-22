import Image from "next/image";
import styles from "./window.module.css";
import localFont from "next/font/local";
import ControlButtons from "./ControlButtons";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  src: string;
  alt: string;
  appName: string;
  maximize: boolean;
  setMaximize: Dispatch<SetStateAction<boolean>>;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const TitleBar = ({ src, alt, appName, maximize, setMaximize }: Props) => {
  const TitleBarTop = ({ src, alt, appName }: Props) => {
    return (
      <section className={styles.titleBar}>
        <Image
          className={styles.titleBarIcon}
          src={src}
          alt={alt}
          width={0}
          height={0}
        />
        <p className={`${tahoma.className} ${styles.titleBarLabel}`}>
          {appName}
        </p>
        <ControlButtons maximize={maximize} setMaximize={setMaximize} />
      </section>
    );
  };

  return (
    <section className={styles.titleBarCombined}>
      <TitleBarTop src={src} alt={alt} appName={appName} />
      <section className={styles.titleBarBottom} />
    </section>
  );
};

export default TitleBar;
