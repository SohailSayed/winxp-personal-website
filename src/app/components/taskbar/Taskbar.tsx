import React from "react";
import StartButton from "./StartButton";
import SysTray from "./SysTray";
import TaskbarLine from "./TaskbarLine";
import styles from "./taskbar.module.css";

const Taskbar = () => {
  return (
    <section className={styles.taskbar}>
      <StartButton />
      <TaskbarLine />
      <SysTray />
    </section>
  );
};

export default Taskbar;
