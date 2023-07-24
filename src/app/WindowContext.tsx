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
  defaultPosition,
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
  windowPosition: number[];
  setWindowPosition: Dispatch<SetStateAction<number[]>>;
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
  windowPosition: defaultPosition,
  setWindowPosition: () => {},
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
  const [windowPosition, setWindowPosition] =
    useState<number[]>(defaultPosition);

  const contextValues = {
    isClicked,
    setIsClicked,
    isMaximized,
    setIsMaximized,
    minimizedStates,
    setMinimizedStates,
    openStates,
    setOpenStates,
    windowPosition,
    setWindowPosition,
  };
  return (
    <WindowContext.Provider value={contextValues}>
      {children}
    </WindowContext.Provider>
  );
};

export { WindowContextProvider, useWindowContext };
