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
        src={src}
        alt={alt}
        width={0}
        height={0}
        style={{
          width: "auto",
          height: "80%",
          filter: "drop-shadow(0px 1px 2px #143384)",
          margin: "0 0 0 5%",
        }}
      />
      <p
        className={tahoma.className}
        style={{
          color: "#F0F8FE",
          fontSize: "85%",
          margin: "0 0 0 5%",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        {appName}
      </p>
    </section>
  );
};

export default LargeAppIcon;
