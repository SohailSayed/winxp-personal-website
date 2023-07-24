import styles from "./desktop.module.css";
import BackgroundImage from "./BackgroundImage";
import AppIcon from "./AppIcon";
import appList from "../constants/appList";

const DesktopAppIcons = () => {
  return (
    <section className={styles.desktop}>
      <BackgroundImage />
      {appList.map((appName) => (
        <AppIcon
          key={appName}
          src={`/icons/${appName}Icon.svg`}
          alt={`${appName} Icon`}
          appName={appName}
        />
      ))}
    </section>
  );
};

export default DesktopAppIcons;
