import AppIcon from "./AppIcon";
import styles from "./taskbar.module.css";

const TaskbarLine = () => {
  return (
    <section className={styles.taskbarLine}>
      <AppIcon src="/icons/githubIcon.svg" alt="Github Icon" />
      <AppIcon src="/icons/linkedinIcon.svg" alt="Linkedin Icon" />
      <AppIcon src="/icons/twitterIcon.svg" alt="Twitter Icon" />
    </section>
  );
};

export default TaskbarLine;
