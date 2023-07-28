import Image from "next/image";
import styles from "./window.module.css";
import localFont from "next/font/local";
import ControlButtons from "./ControlButtons";
import { useWindowContext } from "@/app/WindowContext";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const TitleBar = ({ src, alt, appName }: Props) => {
  const { isMaximized } = useWindowContext();
  const TitleBarTop = ({ src, alt, appName }: Props) => {
    return (
      <section className={styles.titleBar}>
        <Image
          className={styles.titleBarIcon}
          src={src}
          alt={alt}
          width={0}
          height={0}
        />
        <p className={`${tahoma.className} ${styles.titleBarLabel}`}>
          {appName}
        </p>
        <ControlButtons appName={appName} />
      </section>
    );
  };

  return (
    <section className={styles.titleBarCombined}>
      <TitleBarTop src={src} alt={alt} appName={appName} />
      <section
        className={
          isMaximized ? styles.titleBarBottomMaximized : styles.titleBarBottom
        }
      />
    </section>
  );
};

export default TitleBar;
