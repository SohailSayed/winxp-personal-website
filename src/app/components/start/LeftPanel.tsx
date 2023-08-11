import IconLabel from "./IconLabel";
import styles from "./start.module.css";
import localFont from "next/font/local";

const tahomabd = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const LeftPanel = () => {
  return (
    <section className={styles.mainPanelLeft}>
      <p className={`${tahomabd.className} ${styles.boldLabel}`}>About Me</p>
      <IconLabel
        src="/icons/waterlooIcon.png"
        alt="University of Waterloo Logo"
        label="Studying Systems Design Engineering at the University of Waterloo"
      />
      <IconLabel
        src="/icons/weatherNetworkIcon.png"
        alt="Weather Network Logo"
        label="Most recently interned as Software Developer at The Weather Network"
      />
      <IconLabel
        src="/icons/blueprintLogo.png"
        alt="UW Blueprint Logo"
        label="Volunteering as Developer for the Algoma Childrens Aid Society with UW Blueprint"
      />
      <IconLabel
        src="/icons/mapleLeafIcon.png"
        alt="Maple Leaf"
        label="Located in Canada"
      />
      <p className={`${tahomabd.className} ${styles.boldLabel}`}>
        Languages I Frequently Use
      </p>
      <IconLabel src="/icons/pythonIcon.png" alt="Python Logo" label="Python" />
      <IconLabel
        src="/icons/javascriptIcon.png"
        alt="JS Logo"
        label="Javascript"
      />
      <IconLabel src="/icons/c++Icon.svg" alt="C++ Logo" label="C++" />
    </section>
  );
};

export default LeftPanel;
