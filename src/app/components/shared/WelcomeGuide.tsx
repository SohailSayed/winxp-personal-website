import ArrowLabel from "./ArrowLabel";
import styles from "./shared.module.css";
import localFont from "next/font/local";

const tahomabd = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const WelcomeGuide = () => {
  return (
    <section className={styles.welcomeGuideContainer}>
      <div className={styles.guideOuter} />
      <div className={styles.guideMiddle}>
        <p className={`${tahomabd.className} ${styles.welcomeHeader}`}>
          Welcome to Sohail's personal site!
        </p>
        <p className={`${tahomabd.className} ${styles.welcomeSubHeader}`}>
          What would you like to do?
        </p>
        <section>
          <ArrowLabel label="View My Projects" />
          <ArrowLabel label="See My Resume" />
          <ArrowLabel label="Read More About Me" />
          <ArrowLabel label="Contact Me" />
        </section>
      </div>
      <div className={styles.guideOuter} />
    </section>
  );
};

export default WelcomeGuide;
