import styles from "./window.module.css";
import { useWindowContext } from "@/app/WindowContext";
import React, { useState } from "react";
import { pushToBottom, pushToTop } from "@/app/helper/stackHelper";

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
  const { maximizedStates, setMaximizedStates } = useWindowContext();
  const { minimizedStates, setMinimizedStates } = useWindowContext();
  const { setOpenStates } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();
  const { setProjectGuide, setResumeGuide } = useWindowContext();

  const buttonList = ["minimize", "restore", "maximize", "close"];

  const isMaximized = maximizedStates[appName];
  const index = appStack.findIndex((item) => item.appName === appName);
  const zIndexValue = appStack[index] ? appStack[index].zIndex : -1;
  const isSelected = zIndexValue + 1 == appStack.length ? true : false;

  const ControlButton = ({ src, alt }: ButtonProps) => {
    const buttonIndex = buttonList.indexOf(alt);

    const handleClickDown = (clicks: boolean[]) => {
      setIsClicked(clicks);
    };
    const handleClickUp = (clicks: boolean[]) => {
      setIsClicked(clicks);
      if (alt == "maximize") {
        const modifiedStack = pushToTop(appStack, index);
        setAppStack(modifiedStack);

        setProjectGuide(false);
        setResumeGuide(false);

        setMaximizedStates((prevState) => ({
          ...prevState,
          [appName]: true,
        }));
      }
      if (alt == "restore") {
        setMaximizedStates((prevState) => ({
          ...prevState,
          [appName]: false,
        }));
      }
      if (alt == "minimize") {
        setMinimizedStates((prevState) => ({
          ...prevState,
          [appName]: true,
        }));
        if (
          appStack.length > 1 &&
          !minimizedStates[appStack[appStack.length - 2].appName]
        ) {
          const modifiedStack = pushToBottom(appStack, index);
          setAppStack(modifiedStack);
        }
      }
      if (alt == "close") {
        setOpenStates((prevState) => ({
          ...prevState,
          [appName]: false,
        }));
        setAppStack((prevState) =>
          prevState.filter((item) => item.appName !== appName)
        );
      }
    };
    return (
      <img
        className={
          isClicked[buttonIndex]
            ? styles.controlButtonClicked
            : styles.controlButton
        }
        src={src}
        alt={alt}
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
    <section
      className={
        isSelected ? styles.controlButtons : styles.controlButtonsInactive
      }
    >
      <ControlButton src="/window/minimizeButton.png" alt="minimize" />
      {isMaximized ? (
        <ControlButton src="/window/restoreButton.png" alt="restore" />
      ) : (
        <ControlButton src="/window/maximizeButton.png" alt="maximize" />
      )}
      <ControlButton src="/window/closeButton.png" alt="close" />
    </section>
  );
};

export default ControlButtons;
