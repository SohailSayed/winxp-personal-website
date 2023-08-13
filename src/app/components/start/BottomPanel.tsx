import React from "react";
import styles from "./start.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const BottomPanel = () => {
  return (
    <section className={styles.bottomPanel}>
      <p className={`${tahoma.className} ${styles.bottomPanelLabel}`}>
        Fan of Windows XP? Me too :) I made this site from scratch using
        React.&nbsp;
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/SohailSayed/personal-website"
          className={styles.bottomPanelLabelLink}
        >
          Check out the code here
        </a>
      </p>
    </section>
  );
};

export default BottomPanel;
