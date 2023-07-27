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
  const { windowPositionStates, setWindowPositionStates } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();
  const { zPosition, setZPosition } = useWindowContext();
  const { isMaximized } = useWindowContext();
  const { minimizedStates } = useWindowContext();
  const { openStates } = useWindowContext();
  const isNotMinimized = minimizedStates[appName];
  const isOpen = openStates[appName];
  const windowPosition = windowPositionStates[appName];

  const nonMinimized = isMaximized
    ? styles.windowMaximized
    : styles.windowRestored;
  const openStyles = isNotMinimized ? styles.windowMinimized : nonMinimized;

  if (zPosition[appName] > 3) {
    setWindowPositionStates;
  }
  let xTransform = windowPosition[0];
  let yTransform = windowPosition[1];

  let leftPosition = "10%";
  let topPosition = "10%";

  if (isMaximized) {
    xTransform = 0;
    yTransform = 0;
    leftPosition = "0%";
    topPosition = "0%";
  }

  const transformStyle = {
    left: leftPosition,
    top: topPosition,
    transform: `translate(${xTransform}%, ${yTransform}%)`,
    zIndex: zPosition,
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
