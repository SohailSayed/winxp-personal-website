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
  const { openStates, setOpenStates } = useWindowContext();
  const { windowPositionStates, setWindowPositionStates } = useWindowContext();

  const handleDoubleClick = (appName: string) => {
    const windowPosition = windowPositionStates[appName];

    const openCount = Object.values(openStates).filter(
      (openState) => openState === true
    ).length;

    console.log(openCount);
    const xTransform = openCount * 1.5;
    const yTransform = openCount * 1.5;

    setWindowPositionStates((prevState) => ({
      ...prevState,
      [appName]: [xTransform, yTransform],
    }));

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
