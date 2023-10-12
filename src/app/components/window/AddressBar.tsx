import React from "react";
import styles from "./window.module.css";
import localFont from "next/font/local";

interface Props {
  appName: string;
  url: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const AddressBar = ({ url, appName }: Props) => {
  const isResume = appName == "Resume";

  const popOutWindow = () => window.open(url, "_blank", "noreferrer");

  const DownloadResumeButton = (
    <a
      className={styles.popOutButtonContainer}
      href="/window/Sohail Sayed SWE Public Resume October 2023.pdf"
      download
      title="Download Resume"
    >
      <img
        className={styles.popOutButton}
        src="/window/downloadResumeButton.png"
        alt="Download Resume Button"
      />
    </a>
  );

  const PopOutButton = (
    <div
      className={styles.popOutButtonContainer}
      onClick={popOutWindow}
      title="Open This Window in a New Tab"
    >
      <img
        className={styles.popOutButton}
        src="/window/popOutWindow.png"
        alt="Pop Out Button"
      />
    </div>
  );

  return (
    <section className={styles.addressBar}>
      <p className={`${tahoma.className} ${styles.addressLabel}`}>
        A<u>d</u>dress
      </p>
      <section className={styles.urlBar}>
        <img
          className={styles.urlBarIcon}
          src={"/icons/internetExplorerIcon.png"}
          alt={"Internet Explorer Icon"}
        />
        <p className={`${tahoma.className} ${styles.urlBarLabel}`}>{url}</p>
      </section>
      {isResume ? DownloadResumeButton : PopOutButton}
    </section>
  );
};

export default AddressBar;
