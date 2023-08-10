"use client";
import { useWindowContext } from "@/app/WindowContext";
import styles from "./start.module.css";
import TopPanel from "./TopPanel";
import BottomPanel from "./BottomPanel";
import MainPanel from "./MainPanel";
import { useEffect } from "react";

const StartPage = () => {
  const { appStack, setAppStack } = useWindowContext();
  const { startOpen, setStartOpen } = useWindowContext();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e: Event) => {
    const clickedElement = e.target as HTMLElement;
    const elementClass = clickedElement.classList.value;
    const insideIcon = elementClass.includes("start_");
    if (!insideIcon) {
      console.log(elementClass);
      setStartOpen(false);
      if (
        elementClass.includes("window") ||
        elementClass.includes("largeAppIcon")
      ) {
        const appName = "Start Page";
        setAppStack((prevState) =>
          prevState.filter((item) => item.appName !== appName)
        );
      }
    }
  };

  const index = appStack.findIndex((item) => item.appName === "Start Page");
  const zIndexValue = appStack[index] ? appStack[index].zIndex : 1;
  console.log(appStack);
  console.log(zIndexValue);

  const startPage = (
    <section className={styles.startPage} style={{ zIndex: zIndexValue }}>
      <TopPanel />
      <MainPanel />
      <BottomPanel />
    </section>
  );

  // Having visibility: hidden for all non-open windows/start page might not be efficient, to review in future
  return startOpen ? startPage : <section style={{ visibility: "hidden" }} />;
};

export default StartPage;
