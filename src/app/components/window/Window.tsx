"use client";

import { Rnd } from "react-rnd";
import TitleBar from "./TitleBar";
import styles from "./window.module.css";
import { useWindowContext } from "@/app/WindowContext";
import { pushToTop } from "@/app/helper/stackHelper";

interface Props {
  src: string;
  alt: string;
  appName: string;
  url: string;
}

const Window = ({ src, alt, appName, url }: Props) => {
  const { appStack, setAppStack } = useWindowContext();
  const { isMaximized } = useWindowContext();
  const { minimizedStates } = useWindowContext();
  const { openStates } = useWindowContext();
  const isNotMinimized = minimizedStates[appName];
  const isOpen = openStates[appName];

  const nonMinimized = isMaximized
    ? styles.windowMaximized
    : styles.windowRestored;
  const openStyles = isNotMinimized ? styles.windowMinimized : nonMinimized;

  const windowSize = isMaximized
    ? { width: "100vw", height: "95vh" }
    : undefined;

  let zIndexValue = 0;
  const index = appStack.findIndex((item) => item.appName === appName);
  if (appStack[index] != undefined) {
    zIndexValue = appStack[index].zIndex;
  }
  const handleClick = () => {
    const modifiedStack = pushToTop(appStack, index);
    setAppStack(modifiedStack);
  };

  const window = (
    <Rnd
      className={isOpen ? openStyles : styles.windowMinimized}
      style={{ zIndex: zIndexValue }}
      size={windowSize}
      default={{
        x: 200,
        y: 50,
        width: "76vw",
        height: "80vh",
      }}
      position={isMaximized ? { x: -10, y: -10 } : undefined}
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      minHeight={"20vh"}
      minWidth={"30vw"}
      dragHandleClassName={styles.titleBar}
      bounds={"window"}
      onClick={handleClick}
    >
      <TitleBar src={src} alt={alt} appName={appName} url={url} />
    </Rnd>
  );

  return (
    <>
      {isMaximized ? (
        window
      ) : (
        <section style={{ height: "100%", width: "100%" }}>{window}</section>
      )}
    </>
  );
};

export default Window;
