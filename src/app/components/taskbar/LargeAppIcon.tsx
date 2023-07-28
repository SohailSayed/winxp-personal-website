"use client";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "./taskbar.module.css";
import { appStack, useWindowContext } from "@/app/WindowContext";
import { pushToEnd } from "@/app/helper/stackHelper";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const LargeAppIcon = ({ src, alt, appName }: Props) => {
  const { minimizedStates, setMinimizedStates } = useWindowContext();
  const { openStates, setOpenStates } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();
  const isNotMinimized = minimizedStates[appName];
  const isOpen = openStates[appName];

  const index = appStack.findIndex((item) => item.appName === appName);

  const handleClick = (appName: string) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [appName]: true,
    }));
    setMinimizedStates((prevState) => ({
      ...prevState,
      [appName]: false,
    }));
    const modifiedStack = pushToEnd(appStack, index);
    setAppStack(modifiedStack);
  };

  // Figure out how to include minimization and styling of this properly soon
  // const openStyle = isNotMinimized
  //   ? styles.largeAppIconMinimized
  //   : styles.largeAppIconOpen;

  const zIndexValue = appStack[index] ? appStack[index].zIndex : -1;
  const isSelected = zIndexValue + 1 == appStack.length ? true : false;
  console.log(appName, index, appStack);

  const openStyle = isSelected
    ? styles.largeAppIconOpen
    : styles.largeAppIconMinimized;
  return (
    <section
      className={`${styles.largeAppIconShared} ${
        isOpen ? openStyle : styles.largeAppIconClosed
      }`}
      onClick={() => handleClick(appName)}
    >
      <Image
        className={styles.largeAppIconImage}
        src={src}
        alt={alt}
        width={0}
        height={0}
      />
      <p className={`${tahoma.className} ${styles.largeAppIconLabel}`}>
        {appName}
      </p>
    </section>
  );
};

export default LargeAppIcon;
