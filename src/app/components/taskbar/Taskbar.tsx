import StartButton from "./StartButton";
import TaskbarLine from "./TaskbarLine";
import styles from "./taskbar.module.css";

const Taskbar = () => {
  return (
    <section className={styles.taskbar}>
      <StartButton />
      <TaskbarLine />
    </section>
  );
};

export default Taskbar;
