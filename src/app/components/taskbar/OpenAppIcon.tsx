import Image from "next/image";
import localFont from "next/font/local";
import styles from "./taskbar.module.css";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const OpenAppIcon = ({ src, alt, appName }: Props) => {
  return (
    <section
      className={styles.openAppIcon}
      style={{
        position: "relative",
        width: "200px",
        height: "70%",

        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        style={{
          width: "auto",
          height: "80%",
          filter: "drop-shadow(0px 1px 2px #143384)",
          margin: "0 0 0 5%",
        }}
      />
      <p
        className={tahoma.className}
        style={{
          color: "#F0F8FE",
          fontSize: "90%",
          margin: "0 0 0 5%",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        {appName}
      </p>
    </section>
  );
};

export default OpenAppIcon;
