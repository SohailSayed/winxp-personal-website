import { useState } from "react";
import styles from "./shared.module.css";
import localFont from "next/font/local";

interface Props {
  label: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const ArrowLabel = ({ label }: Props) => {
  const [selected, setSelected] = useState(false);
  const greenArrow = (
    <img src="/guide/arrowButtonGreen.ico" className={styles.arrowButton} />
  );
  const blueArrow = (
    <img src="/guide/arrowButtonBlue.svg" className={styles.arrowButton} />
  );

  const handleHover = () => {
    setSelected(true);
  };
  const handleOut = () => {
    setSelected(false);
  };

  return (
    <section
      className={styles.arrowLabelContainer}
      onMouseOver={handleHover}
      onMouseOut={handleOut}
    >
      {selected ? greenArrow : blueArrow}
      <p className={`${tahoma.className} ${styles.arrowLabel}`}>{label}</p>
    </section>
  );
};

export default ArrowLabel;
