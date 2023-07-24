"use client";

import TitleBar from "./TitleBar";
import styles from "./window.module.css";
import { useWindowContext } from "@/app/WindowContext";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const Window = ({ src, alt, appName }: Props) => {
  const { windowPosition, setWindowPosition } = useWindowContext();
  const { isMaximized } = useWindowContext();
  const { minimizedStates } = useWindowContext();
  const { openStates } = useWindowContext();
  const isNotMinimized = minimizedStates[appName];
  const isOpen = openStates[appName];

  const nonMinimized = isMaximized
    ? styles.windowMaximized
    : styles.windowRestored;
  // This is pretty hacky, bandaid
  const openStyles = isNotMinimized ? styles.windowMinimized : nonMinimized;

  let xTransform = windowPosition[0];
  let yTransform = windowPosition[1];
  let leftPosition = "50%";
  let topPosition = "50%";

  if (isMaximized) {
    xTransform = 0;
    yTransform = 0;
    leftPosition = "0%";
    topPosition = "0%";
  }
  const transformStyle = {
    left: leftPosition,
    top: topPosition,
    transform: `translate(-${xTransform}%, -${yTransform}%)`,
  };

  return (
    <section
      className={isOpen ? openStyles : styles.windowMinimized}
      style={transformStyle}
    >
      <TitleBar src={src} alt={alt} appName={appName} />
    </section>
  );
};

export default Window;