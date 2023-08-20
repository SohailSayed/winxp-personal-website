import ArrowLabel from "./ArrowLabel";
import sampleAction from "./actions";
import styles from "./shared.module.css";
import localFont from "next/font/local";

const tahomabd = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const WelcomeGuide = () => {
  return (
    <section className={styles.welcomeGuideContainer}>
      <div className={styles.guideOuter} />
      <div className={styles.guideMiddleBackground}>
        <div className={styles.guideMiddle}>
          <p className={`${tahomabd.className} ${styles.welcomeHeader}`}>
            Welcome to Sohail's personal site!
          </p>
          <p className={`${tahomabd.className} ${styles.welcomeSubHeader}`}>
            What would you like to do?
          </p>
          <section>
            <ArrowLabel label="View My Projects" action={sampleAction} />
            <ArrowLabel label="See My Resume" action={sampleAction} />
            <ArrowLabel label="Read More About Me" action={sampleAction} />
            <ArrowLabel label="Contact Me" action={sampleAction} />
          </section>
        </div>
      </div>
      <div className={styles.guideOuter} />
    </section>
  );
};

export default WelcomeGuide;
