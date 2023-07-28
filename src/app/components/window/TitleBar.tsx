import Image from "next/image";
import styles from "./window.module.css";
import localFont from "next/font/local";
import ControlButtons from "./ControlButtons";
import { appStack, useWindowContext } from "@/app/WindowContext";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const TitleBar = ({ src, alt, appName }: Props) => {
  const { appStack, setAppStack } = useWindowContext();
  const { isMaximized } = useWindowContext();
  const TitleBarTop = ({ src, alt, appName }: Props) => {
    const index = appStack.findIndex((item) => item.appName === appName);
    // This func should probably be put into a seperate file at some point
    const pushToEnd = (stack: appStack[]) => {
      if (index !== -1) {
        const updatedStack = [...stack];
        const item = updatedStack[index];
        stack.push(stack.splice(stack.indexOf(item), 1)[0]);
        for (let i = 0; i < stack.length; i++) {
          stack[i].zIndex = i;
        }
        return updatedStack;
      }
      return stack;
    };
    const handleClick = () => {
      const modifiedStack = pushToEnd(appStack);
      setAppStack(modifiedStack);
    };
    return (
      <section className={styles.titleBar} onClick={handleClick}>
        <Image
          className={styles.titleBarIcon}
          src={src}
          alt={alt}
          width={0}
          height={0}
        />
        <p className={`${tahoma.className} ${styles.titleBarLabel}`}>
          {appName}
        </p>
        <ControlButtons appName={appName} />
      </section>
    );
  };

  return (
    <section className={styles.titleBarCombined}>
      <TitleBarTop src={src} alt={alt} appName={appName} />
      <section
        className={
          isMaximized ? styles.titleBarBottomMaximized : styles.titleBarBottom
        }
      />
    </section>
  );
};

export default TitleBar;
