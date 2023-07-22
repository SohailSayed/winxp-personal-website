"use client";
import Image from "next/image";
import styles from "./window.module.css";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
}
interface Clicks {
  click: boolean;
}

const ControlButtons = () => {
  const defaultClicks = [false, false, false, false];

  const [maximize, setMaximize] = useState(false);
  const [isClicked, setIsClicked] = useState<boolean[]>(defaultClicks);

  const buttonList = ["minimize", "restore", "maximize", "close"];

  const ControlButton = ({ src, alt }: Props) => {
    const buttonIndex = buttonList.indexOf(alt);

    const handleClick = (clicks: boolean[]) => {
      setIsClicked(clicks);
    };
    return (
      <Image
        className={
          isClicked[buttonIndex]
            ? styles.controlButtonClicked
            : styles.controlButton
        }
        src={src}
        alt={alt}
        width={0}
        height={0}
        onMouseDown={() => {
          defaultClicks[buttonIndex] = true;
          handleClick(defaultClicks);
        }}
        onMouseUp={() => {
          handleClick(defaultClicks);
        }}
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
