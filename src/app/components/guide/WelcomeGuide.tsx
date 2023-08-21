"use client";
import { useWindowContext } from "@/app/WindowContext";
import ArrowLabel from "./ArrowLabel";
import {
  contactPopUp,
  projectPopUp,
  resumePopUp,
  startPopUp,
} from "./functions";
import styles from "./shared.module.css";
import localFont from "next/font/local";

const tahomabd = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const WelcomeGuide = () => {
  const { setProjectGuide } = useWindowContext();
  const { setHighlightedApp } = useWindowContext();
  const { setStartOpen } = useWindowContext();
  const { setContact } = useWindowContext();
  const { setResumeGuide } = useWindowContext();

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
            <ArrowLabel
              label="View My Projects"
              action={() =>
                projectPopUp({
                  setProjectGuide,
                  setResumeGuide,
                  setHighlightedApp,
                })
              }
            />
            <ArrowLabel
              label="See My Resume"
              action={() =>
                resumePopUp({
                  setProjectGuide,
                  setResumeGuide,
                  setHighlightedApp,
                })
              }
            />
            <ArrowLabel
              label="Read More About Me"
              action={() =>
                startPopUp({
                  setStartOpen,
                  setContact,
                  setHighlightedApp,
                  setProjectGuide,
                  setResumeGuide,
                })
              }
            />
            <ArrowLabel
              label="Contact Me"
              action={() =>
                contactPopUp({
                  setContact,
                  setStartOpen,
                  setHighlightedApp,
                  setProjectGuide,
                  setResumeGuide,
                })
              }
            />
          </section>
        </div>
      </div>
      <div className={styles.guideOuter} />
    </section>
  );
};

export default WelcomeGuide;
