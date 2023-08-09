"use client";
import { useWindowContext } from "@/app/WindowContext";
import styles from "./start.module.css";
import TopPanel from "./TopPanel";

const StartPage = () => {
  const { startOpen, setStartOpen } = useWindowContext();

  const startPage = (
    <section className={styles.startPage}>
      <TopPanel />
    </section>
  );

  return startOpen ? startPage : undefined;
};

export default StartPage;
