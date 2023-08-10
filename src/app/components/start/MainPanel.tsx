import styles from "./start.module.css";

const MainPanel = () => {
  return (
    <section className={styles.mainPanel}>
      <div className={styles.mainPanelLeft} />
      <div className={styles.mainPanelRight} />
    </section>
  );
};

export default MainPanel;
