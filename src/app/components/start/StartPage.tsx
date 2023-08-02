"use client";
import { useWindowContext } from "@/app/WindowContext";
import styles from "./start.module.css";

const StartPage = () => {
  const { startOpen, setStartOpen } = useWindowContext();

  const startPage = <section className={styles.startPage}></section>;

  return startOpen ? startPage : undefined;
};

export default StartPage;
