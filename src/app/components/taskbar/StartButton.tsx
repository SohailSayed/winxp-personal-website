import localFont from "next/font/local";

interface Props {
  startLabel: string;
}

const tahomaFont = localFont({ src: "../../fonts/tahoma/tahomabd.ttf" });

const StartMiddleSection = ({ startLabel }: Props) => {
  return (
    <section
      style={{
        gridArea: "a / b / a / b",
        background: "url(/startMiddle.svg)",
        backgroundSize: "auto 100%",
        zIndex: "2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/windowsXPIcon.png"
        height="60%"
        style={{
          filter: "drop-shadow(2px 2px 3px) blur(0.5px)",
          alignContent: "flex-start",
          marginRight: "10px",
          imageRendering: "pixelated",
        }}
      />
      <p
        className={tahomaFont.className}
        style={{
          fontStyle: "italic",
          marginRight: "10px",
          color: "#FDFDFD",
          textShadow: "1px 1.5px 5px #000000",
          fontSize: "130%",
        }}
      >
        {startLabel}
      </p>
    </section>
  );
};

const StartButton = () => {
  return (
    <>
      <section
        style={{
          gridArea: "a / a / a / a",
          background: "url(/startBack.svg)",
          backgroundSize: "cover",
          zIndex: "2",
        }}
      />
      <StartMiddleSection startLabel="start" />
      <section
        style={{
          gridArea: "a / c / a / c",
          background: "url(/startEnd.svg)",
          backgroundSize: "cover",
          zIndex: "2",
          filter: "drop-shadow(3px 0 1.5px #2C79DB)",
          clipPath: "inset(0px -5px 0px 0px)",
        }}
      />
    </>
  );
};

export default StartButton;
