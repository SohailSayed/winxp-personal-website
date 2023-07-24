"use client";
import Image from "next/image";
import styles from "./desktop.module.css";
import { useWindowContext } from "@/app/WindowContext";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const AppIcon = ({ src, alt, appName }: Props) => {
  const { setOpenStates } = useWindowContext();

  const handleDoubleClick = (appName: string) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [appName]: true,
    }));
  };

  return (
    <section
      className={styles.AppIcon}
      onDoubleClick={() => handleDoubleClick(appName)}
    >
      <Image
        className={styles.AppIconImage}
        src={src}
        alt={alt}
        width={0}
        height={0}
      />
    </section>
  );
};

export default AppIcon;
