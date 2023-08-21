"use client";
import React from "react";
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
  const { setMaximizedStates } = useWindowContext();

  return (
    <section className={styles.welcomeGuideContainer}>
      <div className={styles.guideOuter} />
      <div className={styles.guideMiddleBackground}>
        <div className={styles.guideMiddle}>
          <p className={`${tahomabd.className} ${styles.welcomeHeader}`}>
            Welcome to Sohail&apos;s personal site!
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
                  setMaximizedStates,
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
                  setMaximizedStates,
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
                  setMaximizedStates,
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
                  setMaximizedStates,
                })
              }
            />
          </section>
        </div>
      </div>
      <div className={styles.guideOuter}>
        <p className={`${tahomabd.className} ${styles.welcomeBottomLabel}`}>
          Built with React | Function and Design inspired by Windows XP |&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SohailSayed/personal-website"
            className={styles.welcomeBottomLink}
          >
            View the code
          </a>
        </p>
      </div>
    </section>
  );
};

export default WelcomeGuide;
