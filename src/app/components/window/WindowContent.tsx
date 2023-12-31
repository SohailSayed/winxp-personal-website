import React from "react";
import styles from "./window.module.css";
import { useWindowContext } from "@/app/WindowContext";
import TitleBar from "./TitleBar";
import AddressBar from "./AddressBar";
import WelcomeGuide from "../guide/WelcomeGuide";

interface Props {
  src: string;
  alt: string;
  appName: string;
  url: string;
}

const WindowContent = ({ src, alt, appName, url }: Props) => {
  const { appStack } = useWindowContext();
  const { maximizedStates } = useWindowContext();
  const isMaximized = maximizedStates[appName];
  const index = appStack.findIndex((item) => item.appName === appName);
  const zIndexValue = appStack[index] ? appStack[index].zIndex : -1;
  const isSelected = zIndexValue + 1 == appStack.length ? true : false;

  const iframeShadow = (
    <div
      className={styles.iframeShadow}
      style={isSelected ? { pointerEvents: "none" } : undefined}
    ></div>
  );

  const titleBarBottomStyle = isSelected
    ? styles.titleBarBottom
    : styles.titleBarBottomInactive;

  const welcomeGuide = <WelcomeGuide />;
  const iFrame = (
    <iframe
      className={styles.iframe}
      id="externalWebsite"
      src={url}
      width="100%"
      height="100%"
      allow="autoplay"
    ></iframe>
  );

  const isGuide = appName == "Welcome Guide";

  return (
    <section className={styles.titleBarCombined}>
      <TitleBar src={src} alt={alt} appName={appName} isSelected={isSelected} />
      {!isMaximized && iframeShadow}
      <section
        className={
          isMaximized ? styles.titleBarBottomMaximized : titleBarBottomStyle
        }
        style={{ zIndex: appStack.length + 1 }}
      >
        <AddressBar url={url} appName={appName} />
        {isGuide ? welcomeGuide : iFrame}
      </section>
    </section>
  );
};

export default WindowContent;
