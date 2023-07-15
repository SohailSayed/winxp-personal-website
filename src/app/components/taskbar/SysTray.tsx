import styles from "./taskbar.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const SysTray = () => {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <section className={styles.SysTray}>
      <p
        className={tahoma.className}
        style={{ color: "#F0F8FE", fontSize: "105%" }}
      >
        {formattedTime}
      </p>
    </section>
  );
};

export default SysTray;
