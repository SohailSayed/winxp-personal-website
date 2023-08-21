import React, { useState } from "react";
import styles from "./shared.module.css";
import localFont from "next/font/local";
import { useWindowContext } from "@/app/WindowContext";

interface Props {
  label: string;
  action: () => void;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const ArrowLabel = ({ label, action }: Props) => {
  const { setAppStack } = useWindowContext();
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
  const handleClick = () => {
    setAppStack([]);
    action();
  };

  return (
    <section
      className={styles.arrowLabelContainer}
      onMouseOver={handleHover}
      onMouseOut={handleOut}
      onClick={handleClick}
    >
      {selected ? greenArrow : blueArrow}
      <p className={`${tahoma.className} ${styles.arrowLabel}`}>{label}</p>
    </section>
  );
};

export default ArrowLabel;
