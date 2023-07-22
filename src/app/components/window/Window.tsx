import TitleBar from "./TitleBar";
import styles from "./window.module.css";

interface Props {
  src: string;
  alt: string;
  appName: string;
}

const Window = ({ src, alt, appName }: Props) => {
  return (
    <section className={styles.window}>
      <TitleBar src={src} alt={alt} appName={appName} />
    </section>
  );
};

export default Window;
