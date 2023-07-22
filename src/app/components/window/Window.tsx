"use client";

import { useState } from "react";
import TitleBar from "./TitleBar";
import styles from "./window.module.css";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const Window = ({ src, alt, appName }: Props) => {
  // Will probably need to turn this, and closed/minimized states into contexts when they're implemented
  const [maximize, setMaximize] = useState(false);

  return (
    <section
      className={maximize ? styles.windowMaximized : styles.windowRestored}
    >
      <TitleBar
        src={src}
        alt={alt}
        appName={appName}
        maximize={maximize}
        setMaximize={setMaximize}
      />
    </section>
  );
};

export default Window;
