import Image from "next/image";
import styles from "./desktop.module.css";
import { useWindowContext } from "@/app/WindowContext";
import { pushToTop } from "@/app/helper/stackHelper";
import localFont from "next/font/local";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { defaultAppStates } from "@/app/constants/defaultValues";

interface Props {
  src: string;
  alt: string;
  appName: string;
  url: string;
  highlightedApp: Record<string, boolean>;
  setHighlightedApp: Dispatch<SetStateAction<Record<string, boolean>>>;
  selectedBounds: Record<string, number>;
}

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const AppIcon = ({
  src,
  alt,
  appName,
  url,
  highlightedApp,
  setHighlightedApp,
  selectedBounds,
}: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [bounds, setBounds] = useState<DOMRect | null>(null);

  const { openStates, setOpenStates } = useWindowContext();
  const { setSizePosStates } = useWindowContext();
  const { appStack, setAppStack } = useWindowContext();
  const { setProjectGuide, setResumeGuide, setSizzleGuide } =
    useWindowContext();

  const isHighlighted = highlightedApp[appName];
  const refOne = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (refOne.current) {
      setBounds(refOne.current.getBoundingClientRect());
    }
    document.addEventListener("click", handleClickOutside, true);
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const validSelectedBox = selectedBounds.top != 0 && selectedBounds.left != 0;

  const validSelectSize =
    Math.abs(selectedBounds.top - selectedBounds.bottom) > 2;

  if (bounds && validSelectedBox && validSelectSize) {
    if (
      selectedBounds.right > bounds.left &&
      selectedBounds.left < bounds.right &&
      selectedBounds.bottom > bounds.top &&
      selectedBounds.top < bounds.bottom
    ) {
      if (highlightedApp[appName] != true) {
        setHighlightedApp((prevState) => ({
          ...prevState,
          [appName]: true,
        }));
      }
    } else {
      if (highlightedApp[appName] != false) {
        setHighlightedApp((prevState) => ({
          ...prevState,
          [appName]: false,
        }));
      }
    }
  }

  const handleClickOutside = (e: Event) => {
    const clickedElement = e.target as HTMLElement;
    const elementClass = clickedElement.classList.value;
    const insideIcon = elementClass.includes("desktop_appIcon");
    const insideStart = elementClass.includes("taskbar_start");

    if (!insideIcon && !insideStart) {
      // Not working when clicking taskbar, to investigate in future
      setHighlightedApp((prevState) => ({
        ...prevState,
        [appName]: false,
      }));
    }
  };

  const handleClick = (appName: string) => {
    // eslint-disable-next-line no-use-before-define
    // @ts-expect-error: Type not being considered for event, used to handle double click
    if (event && event.detail == 2) {
      handleDoubleClick(appName);
    } else {
      setHighlightedApp(defaultAppStates);
      setHighlightedApp((prevState) => ({
        ...prevState,
        [appName]: !prevState[appName],
      }));
    }
  };

  const handleDoubleClick = (appName: string) => {
    if (openStates[appName] != true) {
      setProjectGuide(false);
      setResumeGuide(false);
      setSizzleGuide(false);
      setHighlightedApp((prevState) => ({
        ...prevState,
        [appName]: false,
      }));

      const zIndex = appStack.length;
      const shiftValue = zIndex % 3;
      const slideValue = Math.floor(zIndex / 3) * 150;

      const defaultX = 200 + slideValue + shiftValue * 30;
      const defaultY = shiftValue * 18;
      setSizePosStates((prevState) => ({
        ...prevState,
        [appName]: { width: "60vw", height: "90vh", x: defaultX, y: defaultY },
      }));

      setAppStack((prevState) => [...prevState, { appName, zIndex }]);

      setOpenStates((prevState) => ({
        ...prevState,
        [appName]: true,
      }));
    } else {
      const index = appStack.findIndex((item) => item.appName === appName);

      const modifiedStack = pushToTop(appStack, index);
      setAppStack(modifiedStack);
    }
  };

  const iconMask = (
    <section
      className={styles.appIconMask}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
      }}
    />
  );

  const mobileHref = isMobile ? url : undefined;

  const labelStyle = isHighlighted
    ? styles.appIconLabelHighlighted
    : styles.appIconLabel;

  return (
    <a
      className={styles.aMobileAppIcon}
      target="_blank"
      href={mobileHref}
      rel="noreferrer"
    >
      <section
        className={styles.appIcon}
        onClick={() => handleClick(appName)}
        ref={refOne}
      >
        {isHighlighted && iconMask}
        {appName == "Why I'm a Good Fit for Sizzle" ? (
          <img className={styles.appIconImage} src={src} alt={alt} />
        ) : (
          <Image
            className={styles.appIconImage}
            src={src}
            alt={alt}
            width={1}
            height={1}
          />
        )}
        <div className={`${tahoma.className} ${labelStyle}`}>{appName}</div>
      </section>
    </a>
  );
};

export default AppIcon;
