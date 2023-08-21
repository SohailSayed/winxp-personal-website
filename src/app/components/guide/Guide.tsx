import React from "react";
import { useWindowContext } from "@/app/WindowContext";
import styles from "./shared.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const Guide = () => {
  const { projectGuide, resumeGuide } = useWindowContext();

  const projectGuideLayout = (
    <div>
      <img
        className={styles.triangleLeftProject}
        src="/guide/guideTriangleLeft.png"
        alt="guideTriangleLeft"
      />
      <section className={styles.guideBoxProject}>
        <p className={`${tahoma.className} ${styles.guideLabel}`}>
          The project I most recently worked on. Double click to open and try!
        </p>
      </section>
    </div>
  );

  const resumeGuideLayout = (
    <div>
      <img
        className={styles.triangleLeftResume}
        src="/guide/guideTriangleLeft.png"
        alt="guideTriangleLeft"
      />
      <section className={styles.guideBoxResume}>
        <p className={`${tahoma.className} ${styles.guideLabel}`}>
          Double click to view my Resume
        </p>
      </section>
    </div>
  );

  return (
    <>
      {projectGuide && projectGuideLayout} {resumeGuide && resumeGuideLayout}
    </>
  );
};

export default Guide;
