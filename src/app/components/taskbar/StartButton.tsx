import Image from "next/image";
import styles from "./taskbar.module.css";

const StartButton = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "5vh",
        position: "relative",
      }}
    >
      <Image
        src="/startButtonBackground.svg"
        alt="Start button"
        layout="fill"
      />
    </div>
  );
};

export default StartButton;
