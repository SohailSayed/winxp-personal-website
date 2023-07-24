"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import {
  defaultClicks,
  defaultOpenStates,
  defaultPositions,
} from "./components/constants/defaultValues";

interface WindowContextProps {
  isClicked: boolean[];
  setIsClicked: Dispatch<SetStateAction<boolean[]>>;
  isMaximized: boolean;
  setIsMaximized: Dispatch<SetStateAction<boolean>>;
  minimizedStates: Record<string, boolean>;
  setMinimizedStates: Dispatch<SetStateAction<Record<string, boolean>>>;
  openStates: Record<string, boolean>;
  setOpenStates: Dispatch<SetStateAction<Record<string, boolean>>>;
  windowPositionStates: Record<string, number[]>;
  setWindowPositionStates: Dispatch<SetStateAction<Record<string, number[]>>>;
}

interface WindowProviderProp {
  children: React.ReactNode;
}

const WindowContext = createContext<WindowContextProps>({
  isClicked: defaultClicks,
  setIsClicked: () => {},
  isMaximized: false,
  setIsMaximized: () => {},
  minimizedStates: defaultOpenStates,
  setMinimizedStates: () => {},
  openStates: defaultOpenStates,
  setOpenStates: () => {},
  windowPositionStates: defaultPositions,
  setWindowPositionStates: () => {},
});

const useWindowContext = () => useContext(WindowContext);

const WindowContextProvider: React.FC<WindowProviderProp> = ({
  children,
}: WindowProviderProp) => {
  const [isClicked, setIsClicked] = useState<boolean[]>(defaultClicks);
  const [isMaximized, setIsMaximized] = useState(false);
  const [minimizedStates, setMinimizedStates] =
    useState<Record<string, boolean>>(defaultOpenStates);
  const [openStates, setOpenStates] =
    useState<Record<string, boolean>>(defaultOpenStates);
  const [windowPositionStates, setWindowPositionStates] =
    useState<Record<string, number[]>>(defaultPositions);

  const contextValues = {
    isClicked,
    setIsClicked,
    isMaximized,
    setIsMaximized,
    minimizedStates,
    setMinimizedStates,
    openStates,
    setOpenStates,
    windowPositionStates,
    setWindowPositionStates,
  };
  return (
    <WindowContext.Provider value={contextValues}>
      {children}
    </WindowContext.Provider>
  );
};

export { WindowContextProvider, useWindowContext };
