"use client";
import Image from "next/image";
import styles from "./desktop.module.css";
import { useWindowContext } from "@/app/WindowContext";
import { pushToEnd } from "@/app/helper/stackHelper";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const AppIcon = ({ src, alt, appName }: Props) => {
  const { openStates, setOpenStates } = useWindowContext();
  const { windowPositionStates, setWindowPositionStates } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();

  const handleDoubleClick = (appName: string) => {
    if (openStates[appName] != true) {
      const zIndex = appStack.length;

      setAppStack((prevState) => [...prevState, { appName, zIndex }]);

      const openCount = Object.values(openStates).filter(
        (openState) => openState === true
      ).length;

      setOpenStates((prevState) => ({
        ...prevState,
        [appName]: true,
      }));
    }
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
