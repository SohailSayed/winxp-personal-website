import React from "react";
import styles from "./start.module.css";
import localFont from "next/font/local";
import { useWindowContext } from "@/app/WindowContext";

interface Props {
  src: string;
  alt: string;
  label: string;
  url?: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const IconLabel = ({ src, alt, label, url }: Props) => {
  const { contact } = useWindowContext();

  const contactSelected = contact
    ? { backgroundColor: "#FFFFCA", border: "red solid" }
    : undefined;
  const isContact =
    label == "My LinkedIn" || label == "sohail.sayed@uwaterloo.ca";

  return (
    <div
      className={
        url ? styles.iconLabelContainerClickable : styles.iconLabelContainer
      }
      onClick={() => url && window.open(url)}
      style={isContact ? contactSelected : undefined}
    >
      <img className={styles.panelIcon} src={src} alt={alt} />
      <p className={`${tahoma.className} ${styles.panelLabel}`}>{label}</p>
    </div>
  );
};

export default IconLabel;
