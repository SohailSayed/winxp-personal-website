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
  const { isMaximized } = useWindowContext();
  const { isMinimized } = useWindowContext();
  const { openStates } = useWindowContext();
  const isOpen = openStates[appName];

  const nonMinimized = isMaximized
    ? styles.windowMaximized
    : styles.windowRestored;

  return (
    // Fix to deal with minimized soon
    <section className={isOpen ? nonMinimized : styles.windowMinimized}>
      <TitleBar src={src} alt={alt} appName={appName} />
    </section>
  );
};

export default Window;
