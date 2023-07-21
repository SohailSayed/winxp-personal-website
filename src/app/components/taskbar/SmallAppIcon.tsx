import Image from "next/image";
import styles from "./taskbar.module.css";

interface Props {
  src: string;
  alt: string;
  url: string;
}

const SmallAppIcon = ({ src, alt, url }: Props) => {
  return (
    <a href={url} target="_blank" className={styles.smallAppIcon}>
      <Image
        className={styles.smallAppIconImage}
        src={src}
        alt={alt}
        width={0}
        height={0}
      />
    </a>
  );
};

export default SmallAppIcon;
