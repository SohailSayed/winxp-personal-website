import styles from "./window.module.css";
import { useWindowContext } from "@/app/WindowContext";
import TitleBar from "./TitleBar";

interface Props {
  src: string;
  alt: string;
  appName: string;
  url: string;
}

const WindowContent = ({ src, alt, appName, url }: Props) => {
  const { appStack } = useWindowContext();
  const { isMaximized } = useWindowContext();
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

  return (
    <section className={styles.titleBarCombined}>
      <TitleBar src={src} alt={alt} appName={appName} isSelected={isSelected} />
      {!isMaximized && iframeShadow}
      <iframe
        className={
          isMaximized ? styles.titleBarBottomMaximized : titleBarBottomStyle
        }
        style={{ zIndex: appStack.length + 1 }}
        id="externalWebsite"
        src={url}
        width="100%"
        height="100%"
        allow="autoplay"
      ></iframe>
    </section>
  );
};

export default WindowContent;
