import styles from "./desktop.module.css";
import AppIcon from "./AppIcon";
import appList from "../../constants/appList";
import StartPage from "../start/StartPage";

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
      <StartPage />
    </section>
  );
};

export default DesktopAppIcons;
