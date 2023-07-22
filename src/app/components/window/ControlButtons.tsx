"use client";
import Image from "next/image";
import styles from "./window.module.css";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
}
const ControlButtons = () => {
  const [maximize, setMaximize] = useState(false);

  const ControlButton = ({ src, alt }: Props) => {
    return (
      <Image
        className={styles.controlButton}
        src={src}
        alt={alt}
        width={0}
        height={0}
      />
    );
  };
  return (
    <section className={styles.controlButtons}>
      <ControlButton src="/window/minimizeButton.svg" alt="minimize" />
      {maximize ? (
        <ControlButton src="/window/restoreButton.svg" alt="restore" />
      ) : (
        <ControlButton src="/window/maximizeButton.svg" alt="maximize" />
      )}
      <ControlButton src="/window/closeButton.svg" alt="close" />
    </section>
  );
};

export default ControlButtons;
