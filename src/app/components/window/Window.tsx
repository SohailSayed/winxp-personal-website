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
  const { minimizedStates } = useWindowContext();
  const { openStates } = useWindowContext();
  const isNotMinimized = minimizedStates[appName];
  const isOpen = openStates[appName];

  const nonMinimized = isMaximized
    ? styles.windowMaximized
    : styles.windowRestored;
  const openStyles = isNotMinimized ? styles.windowMinimized : nonMinimized;

  return (
    <section className={isOpen ? openStyles : styles.windowMinimized}>
      <TitleBar src={src} alt={alt} appName={appName} />
    </section>
  );
};

export default Window;
