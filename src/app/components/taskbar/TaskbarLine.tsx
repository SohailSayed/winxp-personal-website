import SmallAppIcon from "./SmallAppIcon";
import LargeAppIcon from "./LargeAppIcon";
import styles from "./taskbar.module.css";

const TaskbarLine = () => {
  return (
    <section className={styles.taskbarLine}>
      <div
        className="MinimizedAppIcons"
        style={{
          display: "flex",
          height: "100%",
          width: "fit-content",
          margin: "0 25px 0 10px",
        }}
      >
        <SmallAppIcon src="/icons/githubIcon.svg" alt="Github Icon" />
        <SmallAppIcon src="/icons/linkedinIcon.svg" alt="Linkedin Icon" />
        <SmallAppIcon src="/icons/emailIcon.svg" alt="Email Icon" />
        <SmallAppIcon src="/icons/twitterIcon.svg" alt="Twitter Icon" />
      </div>
      <div
        className="OpenAppIcons"
        style={{
          display: "flex",
          height: "100%",
          width: "fit-content",
          alignItems: "center",
        }}
      >
        <LargeAppIcon
          src="/icons/linkedinIcon.svg"
          alt="Linkedin Icon"
          appName="Linkedin"
        />
        <LargeAppIcon
          src="/icons/githubIcon.svg"
          alt="Github Icon"
          appName="Github"
        />
        <LargeAppIcon
          src="/icons/emailIcon.svg"
          alt="Email Icon"
          appName="Email"
        />
        <LargeAppIcon
          src="/icons/twitterIcon.svg"
          alt="Twitter Icon"
          appName="Twitter"
        />
      </div>
    </section>
  );
};

export default TaskbarLine;
