import { useWindowContext } from "@/app/WindowContext";
import styles from "./shared.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const Guide = () => {
  const { appGuide, startGuide } = useWindowContext();

  const appGuideLayout = (
    <div>
      <img
        className={styles.triangleLeft}
        src="/guide/guideTriangleLeft.png"
        alt="guideTriangleLeft"
      />
      <section className={styles.guideBoxApp}>
        <p className={`${tahoma.className} ${styles.guideLabelApp}`}>
          This is the side project I most recently worked on. Double click on
          any of the icons on the left to open the apps in a Windows XP style
          window, which can be resized and dragged around!
        </p>
      </section>
    </div>
  );

  const startGuideLayout = (
    <div>
      <img
        className={styles.triangleDown}
        src="/guide/guideTriangleDown.png"
        alt="guideTriangleDown"
      />
      <section className={styles.guideBoxStart}>
        <p className={`${tahoma.className} ${styles.guideLabelStart}`}>
          Click here to read more about me
        </p>
      </section>
    </div>
  );

  const welcomeGuideLayout = (
    <section className={styles.guideBoxWelcome}>
      <p className={`${tahoma.className} ${styles.guideLabelWelcome}`}>
        Welcome to Sohail's personal site. This site works just like Windows XP,
        try it out!
      </p>
    </section>
  );

  return (
    <>
      {appGuide && appGuideLayout} {startGuide && startGuideLayout}
      {welcomeGuideLayout}
    </>
  );
};

export default Guide;
