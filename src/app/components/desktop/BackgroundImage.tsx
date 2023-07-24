import styles from "./desktop.module.css";
import Image from "next/image";

const BackgroundImage = () => {
  return (
    <Image
      className={styles.backgroundImage}
      src="/background.jpeg"
      layout="fill"
      alt="Desktop Background"
      objectFit="cover"
    />
  );
};

export default BackgroundImage;
