import Image from "next/image";
import styles from "./window.module.css";
import localFont from "next/font/local";
import ControlButtons from "./ControlButtons";
import { appStack, useWindowContext } from "@/app/WindowContext";

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

  const iframeShadow = (
    <div
      className={styles.iframeShadow}
      style={isSelected ? { pointerEvents: "none" } : undefined}
    ></div>
  );

  const titleBarBottomStyle = isSelected
    ? styles.titleBarBottom
    : styles.titleBarBottomInactive;

  return (
    <section className={styles.titleBarCombined}>
      <TitleBarTop src={src} alt={alt} appName={appName} index={index} />
      {!isMaximized && iframeShadow}
      <iframe
        className={
          isMaximized ? styles.titleBarBottomMaximized : titleBarBottomStyle
        }
        style={{ zIndex: appStack.length + 1 }}
        id="externalWebsite"
        src="https://www.condensed.news/"
        width="100%"
        height="100%"
        sandbox="allow-forms"
      ></iframe>
    </section>
  );
};

export default TitleBar;
