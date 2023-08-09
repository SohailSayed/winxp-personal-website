import styles from "./start.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const BottomPanel = () => {
  return <section className={styles.bottomPanel}></section>;
};

export default BottomPanel;
