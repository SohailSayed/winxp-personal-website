import styles from "./desktop.module.css";
import BackgroundImage from "./BackgroundImage";
import AppIcon from "./AppIcon";
import appList from "../../constants/appList";

const DesktopAppIcons = () => {
  return (
    <section className={styles.desktop}>
      <BackgroundImage />
      {appList.map((appData) => (
        <AppIcon
          key={appData.appName}
          src={`/icons/${appData.appName}Icon.svg`}
          alt={`${appData.appName} Icon`}
          appName={appData.appName}
        />
      ))}
    </section>
  );
};

export default DesktopAppIcons;
