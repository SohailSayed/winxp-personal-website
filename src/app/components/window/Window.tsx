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

  return (
    <section
      className={isMaximized ? styles.windowMaximized : styles.windowRestored}
    >
      <TitleBar src={src} alt={alt} appName={appName} />
    </section>
  );
};

export default Window;
