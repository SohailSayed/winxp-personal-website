"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import appList from "./components/constants/appList";

interface WindowContextProps {
  isClicked: boolean[];
  setIsClicked: Dispatch<SetStateAction<boolean[]>>;
  isMaximized: boolean;
  setIsMaximized: Dispatch<SetStateAction<boolean>>;
  isMinimized: boolean;
  setIsMinimized: Dispatch<SetStateAction<boolean>>;
  openStates: Record<string, boolean>;
  setOpenStates: Dispatch<SetStateAction<Record<string, boolean>>>;
}

interface WindowProviderProp {
  children: React.ReactNode;
}

const defaultClicks = [false, false, false, false];
const defaultOpenStates: Record<string, boolean> = appList.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: false };
  },
  {}
);

const WindowContext = createContext<WindowContextProps>({
  isClicked: defaultClicks,
  setIsClicked: () => {},
  isMaximized: false,
  setIsMaximized: () => {},
  isMinimized: false,
  setIsMinimized: () => {},
  openStates: defaultOpenStates,
  setOpenStates: () => {},
});

const useWindowContext = () => useContext(WindowContext);

const WindowContextProvider: React.FC<WindowProviderProp> = ({
  children,
}: WindowProviderProp) => {
  const [isClicked, setIsClicked] = useState<boolean[]>(defaultClicks);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [openStates, setOpenStates] =
    useState<Record<string, boolean>>(defaultOpenStates);

  const contextValues = {
    isClicked,
    setIsClicked,
    isMaximized,
    setIsMaximized,
    isMinimized,
    setIsMinimized,
    openStates: openStates,
    setOpenStates: setOpenStates,
  };
  return (
    <WindowContext.Provider value={contextValues}>
      {children}
    </WindowContext.Provider>
  );
};

export { WindowContextProvider, useWindowContext };
