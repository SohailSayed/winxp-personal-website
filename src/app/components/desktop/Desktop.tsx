"use client";

import styles from "./desktop.module.css";
import AppIcon from "./AppIcon";
import appList from "../../constants/appList";
import React, { useState } from "react";
import { useWindowContext } from "@/app/WindowContext";
import SelectableRectangle from "./SelectableRectangle";

const DesktopAppIcons = () => {
  const { highlightedApp, setHighlightedApp } = useWindowContext();
  // Might be better to make these a single dictionary state for each, for future review
  const [mouseHeld, setMouseHeld] = useState(false);
  const [xDown, setXDown] = useState(0);
  const [yDown, setYDown] = useState(0);
  const [xUp, setXUp] = useState(0);
  const [yUp, setYUp] = useState(0);
  const [selectedBounds, setSelectedBounds] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  const handleMouseDown = () => {
    setMouseHeld(true);
    // eslint-disable-next-line no-use-before-define
    // @ts-expect-error: Type not being considered for event, used to find mouse location
    setXDown(event.clientX);
    // eslint-disable-next-line no-use-before-define
    // @ts-expect-error: Type not being considered for event, used to find mouse location
    setYDown(event.clientY);
    setSelectedBounds({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    });
  };
  const handleMouseUp = () => {
    setMouseHeld(false);
    setXUp(0);
    setYUp(0);
  };
  const handleMouseMove = () => {
    if (mouseHeld) {
      // eslint-disable-next-line no-use-before-define
      // @ts-expect-error: Type not being considered for event, used to find mouse location
      setXUp(event.clientX);
      // eslint-disable-next-line no-use-before-define
      // @ts-expect-error: Type not being considered for event, used to find mouse location
      setYUp(event.clientY);
      const rightBound = Math.max(xDown, xUp);
      const leftBound = Math.min(xDown, xUp);
      const bottomBound = Math.max(yDown, yUp);
      const topBound = Math.min(yDown, yUp);
      setSelectedBounds({
        top: topBound,
        bottom: bottomBound,
        left: leftBound,
        right: rightBound,
      });
    }
  };

  return (
    <section
      className={styles.desktop}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {appList.map((appData) => (
        <AppIcon
          key={appData.appName}
          src={appData.src}
          alt={`${appData.appName} Icon`}
          appName={appData.appName}
          url={appData.url}
          highlightedApp={highlightedApp}
          setHighlightedApp={setHighlightedApp}
          selectedBounds={selectedBounds}
        />
      ))}
      <SelectableRectangle xDown={xDown} yDown={yDown} xUp={xUp} yUp={yUp} />
    </section>
  );
};

export default DesktopAppIcons;
