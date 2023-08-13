import IconLabel from "./IconLabel";
import styles from "./start.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });
const tahomabd = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const RightPanel = () => {
  return (
    <section className={styles.mainPanelRight}>
      <section className={styles.rightPanelInterests}>
        <div>
          <p className={`${tahomabd.className} ${styles.boldLabel}`}>
            My Interests
          </p>
          <p className={`${tahoma.className} ${styles.rightPanelText}`}>
            Using Engineering and Design on impactful problems, especially
            relating to:
          </p>
          <p className={tahoma.className}>• Transportation</p>
          <p className={tahoma.className}>• Food Systems</p>
          <p className={tahoma.className}>• Agriculture</p>
          <p className={tahoma.className} style={{ margin: "0" }}>
            I'm seeking Winter 2024 internship opportunities
          </p>
        </div>
      </section>
      <hr className={styles.rightPanelHR} />

      <section className={styles.rightPanelLinks}>
        <IconLabel
          src="/icons/emailIcon.png"
          alt="Email Icon"
          label="sohail.sayed@uwaterloo.ca"
          url="mailto: sohail.sayed@uwaterloo.ca"
        />
        <IconLabel
          src="/icons/githubSquareIcon.png"
          alt="GitHub Logo"
          label="My GitHub"
          url="https://github.com/SohailSayed/"
        />
        <IconLabel
          src="/icons/linkedinIcon.svg"
          alt="LinkedIn Logo"
          label="My LinkedIn"
          url="https://www.linkedin.com/in/sohailsayed/"
        />
        <IconLabel
          src="/icons/mediumIcon.png"
          alt="Medium Logo"
          label="My Writing"
          url="https://medium.com/@sohailsayed"
        />
      </section>
    </section>
  );
};

export default RightPanel;
