"use client";

import { Rnd } from "react-rnd";
import styles from "./window.module.css";
import { useWindowContext } from "@/app/WindowContext";
import { pushToTop } from "@/app/helper/stackHelper";
import WindowContent from "./WindowContent";

interface Props {
  src: string;
  alt: string;
  appName: string;
  url: string;
}

const Window = ({ src, alt, appName, url }: Props) => {
  const { appStack, setAppStack } = useWindowContext();
  const { maximizedStates } = useWindowContext();
  const { minimizedStates } = useWindowContext();
  const { openStates } = useWindowContext();
  const { sizePosStates, setSizePosStates } = useWindowContext();
  const isNotMinimized = minimizedStates[appName];
  const isOpen = openStates[appName];
  const isMaximized = maximizedStates[appName];

  const nonMinimizedStyle = isMaximized
    ? styles.windowMaximized
    : styles.windowRestored;
  const openStyles = isNotMinimized
    ? styles.windowMinimized
    : nonMinimizedStyle;

  let zIndexValue = 0;
  const index = appStack.findIndex((item) => item.appName === appName);
  if (appStack[index] != undefined) {
    zIndexValue = appStack[index].zIndex;
  }

  const handleClick = () => {
    const modifiedStack = pushToTop(appStack, index);
    setAppStack(modifiedStack);
  };

  const appPosition = {
    x: sizePosStates[appName].x,
    y: sizePosStates[appName].y,
  };
  const appSize = {
    width: sizePosStates[appName].width,
    height: sizePosStates[appName].height,
  };

  const appWindow = (
    <Rnd
      className={isOpen ? openStyles : styles.windowMinimized}
      style={{ zIndex: zIndexValue }}
      size={isMaximized ? { width: "100.3vw", height: "95vh" } : appSize}
      position={isMaximized ? { x: -10, y: -10 } : appPosition}
      onDragStop={(e, d) => {
        setSizePosStates((prevState) => ({
          ...prevState,
          [appName]: { ...prevState[appName], x: d.x, y: d.y },
        }));
      }}
      onResizeStop={(e, d, ref, delta, position) => {
        setSizePosStates((prevState) => ({
          ...prevState,
          [appName]: {
            x: position.x,
            y: position.y,
            width: ref.style.width,
            height: ref.style.height,
          },
        }));
      }}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      minHeight={"20vh"}
      minWidth={"30vw"}
      dragHandleClassName={styles.titleBarDraggable}
      bounds={"window"}
      onClick={handleClick}
    >
      <WindowContent src={src} alt={alt} appName={appName} url={url} />
    </Rnd>
  );

  return (
    <>
      {isMaximized ? (
        appWindow
      ) : (
        <section style={{ height: "100%", width: "100%" }}>{appWindow}</section>
      )}
    </>
  );
};

export default Window;
