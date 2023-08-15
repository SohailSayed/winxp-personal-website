"use client";
import React, { useEffect, useState } from "react";
import styles from "./taskbar.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const SysTray = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const formattedTime = currentTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <section className={styles.sysTray}>
      <p className={`${tahoma.className} ${styles.timeLabel}`}>
        {formattedTime}
      </p>
    </section>
  );
};

export default SysTray;
