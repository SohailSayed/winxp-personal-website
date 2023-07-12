import Image from "next/image";

const BackgroundImage = () => {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/background.jpeg"
          layout="fill"
          alt="Background of home page"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default BackgroundImage;
