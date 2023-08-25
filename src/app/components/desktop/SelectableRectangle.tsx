import React from "react";
import styles from "./desktop.module.css";

interface Props {
  xDown: number;
  yDown: number;
  xUp: number;
  yUp: number;
}

const SelectableRectangle = ({ xDown, yDown, xUp, yUp }: Props) => {
  const isVisible = xUp != 0 && yUp != 0;
  const width = Math.abs(xUp - xDown);
  const height = Math.abs(yUp - yDown);

  let xPos = xDown;
  let yPos = yDown;

  if (xUp < xDown) {
    xPos = xPos - width;
  }
  if (yUp < yDown) {
    yPos = yPos - height;
  }

  return (
    <div
      className={styles.selectableRectangle}
      style={
        isVisible
          ? {
              translate: `${xPos}px ${yPos}px`,
              width: `${width}px`,
              height: `${height}px`,
            }
          : { visibility: "hidden" }
      }
    />
  );
};

export default SelectableRectangle;
