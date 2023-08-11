import styles from "./start.module.css";
import localFont from "next/font/local";

interface Props {
  src: string;
  alt: string;
  label: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const IconLabel = ({ src, alt, label }: Props) => {
  return (
    <div className={styles.iconLabelContainer}>
      <img className={styles.panelIcon} src={src} alt={alt} />
      <p className={`${tahoma.className} ${styles.panelLabel}`}>{label}</p>
    </div>
  );
};

export default IconLabel;
