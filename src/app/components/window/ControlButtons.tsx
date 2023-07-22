"use client";
import Image from "next/image";
import styles from "./window.module.css";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  maximize: boolean;
  setMaximize: Dispatch<SetStateAction<boolean>>;
}
interface ButtonProps {
  src: string;
  alt: string;
}

const ControlButtons = ({ maximize, setMaximize }: Props) => {
  const defaultClicks = [false, false, false, false];

  const [isClicked, setIsClicked] = useState<boolean[]>(defaultClicks);

  const buttonList = ["minimize", "restore", "maximize", "close"];

  const ControlButton = ({ src, alt }: ButtonProps) => {
    const buttonIndex = buttonList.indexOf(alt);

    const handleClickDown = (clicks: boolean[]) => {
      setIsClicked(clicks);
    };
    const handleClickUp = (clicks: boolean[]) => {
      setIsClicked(clicks);
      if (alt == "maximize") {
        setMaximize(true);
      }
      if (alt == "restore") {
        setMaximize(false);
      }
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
          const clickedIndex = [...defaultClicks];
          clickedIndex[buttonIndex] = true;
          handleClickDown(clickedIndex);
        }}
        onMouseUp={() => {
          const clickedIndex = [...defaultClicks];
          handleClickUp(clickedIndex);
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
