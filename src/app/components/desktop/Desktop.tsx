"use client";

import styles from "./desktop.module.css";
import AppIcon from "./AppIcon";
import appList from "../../constants/appList";
import React from "react";
import { useWindowContext } from "@/app/WindowContext";

const DesktopAppIcons = () => {
  const { highlightedApp, setHighlightedApp } = useWindowContext();

  return (
    <section className={styles.desktop}>
      {appList.map((appData) => (
        <AppIcon
          key={appData.appName}
          src={appData.src}
          alt={`${appData.appName} Icon`}
          appName={appData.appName}
          highlightedApp={highlightedApp}
          setHighlightedApp={setHighlightedApp}
        />
      ))}
    </section>
  );
};

export default DesktopAppIcons;
