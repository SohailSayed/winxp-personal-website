"use client";

import styles from "./desktop.module.css";
import AppIcon from "./AppIcon";
import appList from "../../constants/appList";
import React, { useState } from "react";
import Guide from "../guide/Guide";

const DesktopAppIcons = () => {
  const [highlightedApp, setHighlightedApp] = useState("");

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
      <Guide />
    </section>
  );
};

export default DesktopAppIcons;
