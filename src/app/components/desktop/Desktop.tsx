import styles from "./desktop.module.css";
import AppIcon from "./AppIcon";
import appList from "../../constants/appList";

const DesktopAppIcons = () => {
  return (
    <section className={styles.desktop}>
      {appList.map((appData) => (
        <AppIcon
          key={appData.appName}
          src={appData.src}
          alt={`${appData.appName} Icon`}
          appName={appData.appName}
        />
      ))}
    </section>
  );
};

export default DesktopAppIcons;
