import Image from "next/image";
import styles from "./desktop.module.css";
import { useWindowContext } from "@/app/WindowContext";
import { pushToTop } from "@/app/helper/stackHelper";
import localFont from "next/font/local";
import OutsideClickHandler from "react-outside-click-handler";
import { Dispatch, SetStateAction, useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  appName: string;
  highlightedApp: string;
  setHighlightedApp: Dispatch<SetStateAction<string>>;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const AppIcon = ({
  src,
  alt,
  appName,
  highlightedApp,
  setHighlightedApp,
}: Props) => {
  const { openStates, setOpenStates } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();

  const isHighlighted = highlightedApp === appName;

  const handleClick = (appName: string) => {
    if (event.detail == 2) {
      handleDoubleClick(appName);
    } else {
      setHighlightedApp(appName);
    }
  };

  const handleDoubleClick = (appName: string) => {
    if (openStates[appName] != true) {
      setHighlightedApp("");

      const zIndex = appStack.length;

      setAppStack((prevState) => [...prevState, { appName, zIndex }]);

      setOpenStates((prevState) => ({
        ...prevState,
        [appName]: true,
      }));
    } else {
      const index = appStack.findIndex((item) => item.appName === appName);

      const modifiedStack = pushToTop(appStack, index);
      setAppStack(modifiedStack);
    }
  };

  const iconMask = (
    <section
      className={styles.appIconMask}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
      }}
    />
  );

  const labelStyle = isHighlighted
    ? styles.appIconLabelHighlighted
    : styles.appIconLabel;

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setHighlightedApp("");
      }}
    >
      <section className={styles.appIcon} onClick={() => handleClick(appName)}>
        {isHighlighted && iconMask}
        <Image
          className={styles.appIconImage}
          src={src}
          alt={alt}
          width={0}
          height={0}
        />
        <div className={`${tahoma.className} ${labelStyle}`}>{appName}</div>
      </section>
    </OutsideClickHandler>
  );
};

export default AppIcon;
