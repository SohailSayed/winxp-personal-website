"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { defaultOpenStates, defaultPositions } from "./constants/defaultValues";

interface WindowContextProps {
  isMaximized: boolean;
  setIsMaximized: Dispatch<SetStateAction<boolean>>;
  minimizedStates: Record<string, boolean>;
  setMinimizedStates: Dispatch<SetStateAction<Record<string, boolean>>>;
  openStates: Record<string, boolean>;
  setOpenStates: Dispatch<SetStateAction<Record<string, boolean>>>;
  windowPositionStates: Record<string, number[]>;
  setWindowPositionStates: Dispatch<SetStateAction<Record<string, number[]>>>;
  appStack: appStack[];
  setAppStack: Dispatch<SetStateAction<appStack[]>>;
}

interface WindowProviderProp {
  children: React.ReactNode;
}

interface appStack {
  appName: string;
  zIndex: number;
}

const WindowContext = createContext<WindowContextProps>({
  isMaximized: false,
  setIsMaximized: () => {},
  minimizedStates: defaultOpenStates,
  setMinimizedStates: () => {},
  openStates: defaultOpenStates,
  setOpenStates: () => {},
  windowPositionStates: defaultPositions,
  setWindowPositionStates: () => {},
  appStack: [],
  setAppStack: () => {},
});

const useWindowContext = () => useContext(WindowContext);

const WindowContextProvider: React.FC<WindowProviderProp> = ({
  children,
}: WindowProviderProp) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [minimizedStates, setMinimizedStates] =
    useState<Record<string, boolean>>(defaultOpenStates);
  const [openStates, setOpenStates] =
    useState<Record<string, boolean>>(defaultOpenStates);
  const [windowPositionStates, setWindowPositionStates] =
    useState<Record<string, number[]>>(defaultPositions);
  const [appStack, setAppStack] = useState<appStack[]>([]);

  const contextValues = {
    isMaximized,
    setIsMaximized,
    minimizedStates,
    setMinimizedStates,
    openStates,
    setOpenStates,
    windowPositionStates,
    setWindowPositionStates,
    appStack,
    setAppStack,
  };
  return (
    <WindowContext.Provider value={contextValues}>
      {children}
    </WindowContext.Provider>
  );
};

export { WindowContextProvider, useWindowContext };
