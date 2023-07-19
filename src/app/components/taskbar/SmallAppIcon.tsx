import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const SmallAppIcon = ({ src, alt }: Props) => {
  return (
    <section
      style={{
        position: "relative",
        width: "auto",
        height: "60%",
        margin: "10px",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        style={{
          width: "auto",
          height: "100%",
          filter: "drop-shadow(0px 1px 3px #1940A6)",
        }}
      />
    </section>
  );
};

export default SmallAppIcon;
