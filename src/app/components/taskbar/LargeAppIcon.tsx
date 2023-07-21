"use client";
import { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./taskbar.module.css";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const LargeAppIcon = ({ src, alt, appName }: Props) => {
  const [open, setOpen] = useState(false);

  // Change boolean back and forth for now, temporary to test visual
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <section
      className={`${styles.largeAppIconShared} ${
        open ? styles.largeAppIconOpen : styles.largeAppIconMinimized
      }`}
      onClick={handleClick}
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
