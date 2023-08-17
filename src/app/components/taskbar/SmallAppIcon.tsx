import React from "react";
import Image from "next/image";
import styles from "./taskbar.module.css";

interface Props {
  src: string;
  alt: string;
  url: string;
}

const SmallAppIcon = ({ src, alt, url }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.smallAppIcon}
    >
      <Image
        className={styles.smallAppIconImage}
        src={src}
        alt={alt}
        width={1}
        height={1}
      />
    </a>
  );
};

export default SmallAppIcon;
