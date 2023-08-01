import SmallAppIcon from "./SmallAppIcon";
import LargeAppIcon from "./LargeAppIcon";
import styles from "./taskbar.module.css";
import appList from "@/app/constants/appList";

const TaskbarLine = () => {
  return (
    <section className={styles.taskbarLine}>
      <div className={styles.smallAppIconContainer}>
        <SmallAppIcon
          src="/icons/githubIcon.svg"
          alt="Github Icon"
          url="https://github.com/SohailSayed/"
        />
        <SmallAppIcon
          src="/icons/linkedinIcon.svg"
          alt="Linkedin Icon"
          url="https://www.linkedin.com/in/sohailsayed/"
        />
        <SmallAppIcon
          src="/icons/emailIcon.svg"
          alt="Email Icon"
          url="mailto: sohail.sayed@uwaterloo.ca"
        />
        <SmallAppIcon
          src="/icons/twitterIcon.svg"
          alt="Twitter Icon"
          url="https://twitter.com/sohailmsayed"
        />
      </div>
      <div className={styles.largeAppIconContainer}>
        {appList.map((appData) => (
          <LargeAppIcon
            key={appData.appName}
            src={appData.src}
            alt={`${appData.appName} Icon`}
            appName={appData.appName}
          />
        ))}
      </div>
    </section>
  );
};

export default TaskbarLine;
