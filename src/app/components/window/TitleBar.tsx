import styles from "./window.module.css";

const TitleBar = () => {
  const TitleBarTop = () => {
    return (
      <section className={styles.titleBar}>
        <p>Filler Text</p>
      </section>
    );
  };

  return (
    <section className={styles.titleBarCombined}>
      <TitleBarTop />
      <section className={styles.titleBarBottom} />
    </section>
  );
};

export default TitleBar;
