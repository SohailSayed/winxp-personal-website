"use client";
import { useWindowContext } from "@/app/WindowContext";
import styles from "./start.module.css";
import TopPanel from "./TopPanel";
import BottomPanel from "./BottomPanel";
import MainPanel from "./MainPanel";

const StartPage = () => {
  const { startOpen, setStartOpen } = useWindowContext();

  const startPage = (
    <section className={styles.startPage}>
      <TopPanel />
      <MainPanel />
      <BottomPanel />
    </section>
  );

  return startOpen ? startPage : undefined;
};

export default StartPage;
