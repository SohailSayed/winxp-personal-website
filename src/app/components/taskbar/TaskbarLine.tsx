import MinimizedAppIcon from "./MinimizedAppIcon";
import OpenAppIcon from "./OpenAppIcon";
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
        <MinimizedAppIcon src="/icons/githubIcon.svg" alt="Github Icon" />
        <MinimizedAppIcon src="/icons/linkedinIcon.svg" alt="Linkedin Icon" />
        <MinimizedAppIcon src="/icons/emailIcon.svg" alt="Email Icon" />
        <MinimizedAppIcon src="/icons/twitterIcon.svg" alt="Twitter Icon" />
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
      </div>
    </section>
  );
};

export default TaskbarLine;
