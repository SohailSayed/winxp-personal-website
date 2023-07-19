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
        src={src}
        alt={alt}
        width={0}
        height={0}
        style={{
          width: "auto",
          height: "75%",
          filter: "drop-shadow(0px 1px 3px #1940A6)",
        }}
      />
    </a>
  );
};

export default SmallAppIcon;
