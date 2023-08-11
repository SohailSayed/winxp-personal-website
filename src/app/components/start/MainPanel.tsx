import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import styles from "./start.module.css";

const MainPanel = () => {
  return (
    <section className={styles.mainPanel}>
      <LeftPanel />
      <RightPanel />
    </section>
  );
};

export default MainPanel;
