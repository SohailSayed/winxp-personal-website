// style module not working here for some reason, need to investigate, do inline styling for now
import styles from "./taskbar.module.css";

const StartButton = () => {
  return (
    <>
      <section
        style={{
          gridArea: "startBack",
          background: "url(/startBack.svg)",
          backgroundSize: "cover",
        }}
      />
      <section
        style={{
          gridArea: "startMiddle",
          background: "url(/startMiddle.svg)",
          backgroundSize: "auto 100%",
        }}
      />
      <section
        style={{
          gridArea: "startEnd",
          background: "url(/startEnd.svg)",
          backgroundSize: "cover",
        }}
      />
    </>
  );
};

export default StartButton;
