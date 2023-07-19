import localFont from "next/font/local";
import styles from "./taskbar.module.css";

interface Props {
  startLabel: string;
}

const tahomaBold = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const StartMiddleSection = ({ startLabel }: Props) => {
  return (
    <section className={styles.startMiddleSection}>
      <img
        src="/icons/windowsXPIcon.png"
        height="60%"
        style={{
          filter: "drop-shadow(2px 2px 3px) blur(0.5px)",
          alignContent: "flex-start",
          marginRight: "10px",
        }}
      />
      <p
        className={tahomaBold.className}
        style={{
          fontStyle: "italic",
          marginRight: "10px",
          color: "#FDFDFD",
          textShadow: "1px 1.5px 5px #000000",
          fontSize: "130%",
        }}
      >
        {startLabel}
      </p>
    </section>
  );
};

const StartButton = () => {
  return (
    <>
      <section className={styles.startBackSection} />
      <StartMiddleSection startLabel="About Me" />
      <section className={styles.startEndSection} />
    </>
  );
};

export default StartButton;
