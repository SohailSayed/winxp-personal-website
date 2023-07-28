"use client";

import { Rnd } from "react-rnd";
import TitleBar from "./TitleBar";
import styles from "./window.module.css";
import { useWindowContext } from "@/app/WindowContext";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const Window = ({ src, alt, appName }: Props) => {
  const { appStack, setAppStack } = useWindowContext();
  const { zPosition, setZPosition } = useWindowContext();
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

  const order = appStack.indexOf(appName) + 1;

  return (
    <Rnd
      className={isOpen ? openStyles : styles.windowMinimized}
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
    >
      <TitleBar src={src} alt={alt} appName={appName} />
    </Rnd>
  );
};

export default Window;
