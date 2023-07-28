import Image from "next/image";
import styles from "./window.module.css";
import localFont from "next/font/local";
import ControlButtons from "./ControlButtons";
import { appStack, useWindowContext } from "@/app/WindowContext";
import { pushToEnd } from "@/app/helper/stackHelper";

interface Props {
  src: string;
  alt: string;
  appName: string;
  index: number;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const TitleBar = ({ src, alt, appName }: Props) => {
  const { appStack, setAppStack } = useWindowContext();
  const { isMaximized, setIsMaximized } = useWindowContext();
  const index = appStack.findIndex((item) => item.appName === appName);
  const zIndexValue = appStack[index] ? appStack[index].zIndex : -1;
  const isSelected = zIndexValue + 1 == appStack.length ? true : false;

  const TitleBarTop = ({ src, alt, appName, index }: Props) => {
    const handleClick = () => {
      if (event.detail == 2) {
        setIsMaximized(!isMaximized);
      }
      const modifiedStack = pushToEnd(appStack, index);
      setAppStack(modifiedStack);
    };

    return (
      <section
        className={isSelected ? styles.titleBar : styles.titleBarInactive}
        onClick={handleClick}
      >
        <Image
          className={
            isSelected ? styles.titleBarIcon : styles.titleBarIconInactive
          }
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

  const titleBarBottomStyle = isSelected
    ? styles.titleBarBottom
    : styles.titleBarBottomInactive;

  return (
    <section className={styles.titleBarCombined}>
      <TitleBarTop src={src} alt={alt} appName={appName} index={index} />
      <section
        className={
          isMaximized ? styles.titleBarBottomMaximized : titleBarBottomStyle
        }
      />
    </section>
  );
};

export default TitleBar;
