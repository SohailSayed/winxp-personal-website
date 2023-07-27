import Image from "next/image";
import styles from "./window.module.css";
import { useWindowContext } from "@/app/WindowContext";
import { useState } from "react";

interface ControlButtonProps {
  appName: string;
}
interface ButtonProps {
  src: string;
  alt: string;
}

const ControlButtons = ({ appName }: ControlButtonProps) => {
  const defaultClicks = [false, false, false, false];

  const [isClicked, setIsClicked] = useState<boolean[]>(defaultClicks);
  const { isMaximized, setIsMaximized } = useWindowContext();
  const { setMinimizedStates } = useWindowContext();
  const { setOpenStates } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();

  const buttonList = ["minimize", "restore", "maximize", "close"];

  const ControlButton = ({ src, alt }: ButtonProps) => {
    const buttonIndex = buttonList.indexOf(alt);

    const handleClickDown = (clicks: boolean[]) => {
      setIsClicked(clicks);
    };
    const handleClickUp = (clicks: boolean[]) => {
      setIsClicked(clicks);
      if (alt == "maximize") {
        setIsMaximized(true);
      }
      if (alt == "restore") {
        setIsMaximized(false);
      }
      if (alt == "minimize") {
        setMinimizedStates((prevState) => ({
          ...prevState,
          [appName]: true,
        }));
      }
      if (alt == "close") {
        setOpenStates((prevState) => ({
          ...prevState,
          [appName]: false,
        }));
        setAppStack((prevState) => prevState.filter((app) => app !== appName));
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
      {isMaximized ? (
        <ControlButton src="/window/restoreButton.svg" alt="restore" />
      ) : (
        <ControlButton src="/window/maximizeButton.svg" alt="maximize" />
      )}
      <ControlButton src="/window/closeButton.svg" alt="close" />
    </section>
  );
};

export default ControlButtons;
