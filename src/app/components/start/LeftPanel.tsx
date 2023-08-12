import IconLabel from "./IconLabel";
import styles from "./start.module.css";
import localFont from "next/font/local";

const tahomabd = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const LeftPanel = () => {
  return (
    <section className={styles.mainPanelLeft}>
      <section className={styles.leftPanelAboutMe}>
        <p className={`${tahomabd.className} ${styles.boldLabel}`}>About Me</p>
        <IconLabel
          src="/icons/waterlooIcon.png"
          alt="University of Waterloo Logo"
          label="Studying Systems Design Engineering at the University of Waterloo"
          url="https://uwaterloo.ca/systems-design-engineering/"
        />
        <IconLabel
          src="/icons/weatherNetworkIcon.png"
          alt="Weather Network Logo"
          label="Interning this summer as a Software Developer at The Weather Network"
          url="https://www.theweathernetwork.com/info/about-us"
        />
        <IconLabel
          src="/icons/blueprintLogo.png"
          alt="UW Blueprint Logo"
          label="Volunteering as Developer for Algoma's Childrens Aid Society with UW Blueprint"
          url="https://uwblueprint.org/about"
        />
        <IconLabel
          src="/icons/mapleLeafIcon.png"
          alt="Maple Leaf"
          label="Located in Canada"
        />
      </section>
      <section className={styles.leftPanelLanguages}>
        <p className={`${tahomabd.className} ${styles.boldLabel}`}>
          Languages I Frequently Use
        </p>
        <IconLabel
          src="/icons/pythonIcon.png"
          alt="Python Logo"
          label="Python"
        />
        <IconLabel
          src="/icons/javascriptIcon.png"
          alt="JS Logo"
          label="Javascript"
        />
        <IconLabel src="/icons/c++Icon.svg" alt="C++ Logo" label="C++" />
      </section>
    </section>
  );
};

export default LeftPanel;
