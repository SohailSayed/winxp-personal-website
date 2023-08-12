import styles from "./start.module.css";
import localFont from "next/font/local";

interface Props {
  src: string;
  alt: string;
  label: string;
  url?: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const IconLabel = ({ src, alt, label, url }: Props) => {
  return (
    <div
      className={
        url ? styles.iconLabelContainerClickable : styles.iconLabelContainer
      }
      onClick={() => url && window.open(url)}
    >
      <img className={styles.panelIcon} src={src} alt={alt} />
      <p className={`${tahoma.className} ${styles.panelLabel}`}>{label}</p>
    </div>
  );
};

export default IconLabel;
