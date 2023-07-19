import MinimizedAppIcon from "./MinimizedAppIcon";
import OpenAppIcon from "./OpenAppIcon";
import styles from "./taskbar.module.css";

const TaskbarLine = () => {
  return (
    <section className={styles.taskbarLine}>
      <MinimizedAppIcon src="/icons/githubIcon.svg" alt="Github Icon" />
      <MinimizedAppIcon src="/icons/linkedinIcon.svg" alt="Linkedin Icon" />
      <MinimizedAppIcon src="/icons/emailIcon.svg" alt="Email Icon" />
      <MinimizedAppIcon src="/icons/twitterIcon.svg" alt="Twitter Icon" />

      <OpenAppIcon
        src="/icons/twitterIcon.svg"
        alt="Twitter Icon"
        appName="Twitter"
      />
      <OpenAppIcon
        src="/icons/linkedinIcon.svg"
        alt="Linkedin Icon"
        appName="Linkedin"
      />
    </section>
  );
};

export default TaskbarLine;
