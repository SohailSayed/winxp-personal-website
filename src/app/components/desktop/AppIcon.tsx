import Image from "next/image";
import styles from "./desktop.module.css";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const AppIcon = ({ src, alt, appName }: Props) => {
  return (
    <Image
      className={styles.AppIconImage}
      src={src}
      alt={alt}
      width={0}
      height={0}
    />
  );
};

export default AppIcon;
