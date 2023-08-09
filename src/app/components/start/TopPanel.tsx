import styles from "./start.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const TopPanel = () => {
  return (
    <section className={styles.topPanel}>
      <div className={styles.topPanelHeadshotOuter}>
        <div className={styles.topPanelHeadshotContainer} />
      </div>
      <p className={`${tahoma.className} ${styles.topPanelLabel}`}>
        Sohail Sayed
      </p>
    </section>
  );
};

export default TopPanel;
