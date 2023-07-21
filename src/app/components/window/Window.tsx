import TitleBar from "./TitleBar";
import styles from "./window.module.css";

const Window = () => {
  return (
    <section className={styles.window}>
      <TitleBar />
    </section>
  );
};

export default Window;
