"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { defaultOpenStates } from "./constants/defaultValues";

interface WindowContextProps {
  isMaximized: boolean;
  setIsMaximized: Dispatch<SetStateAction<boolean>>;
  minimizedStates: Record<string, boolean>;
  setMinimizedStates: Dispatch<SetStateAction<Record<string, boolean>>>;
  openStates: Record<string, boolean>;
  setOpenStates: Dispatch<SetStateAction<Record<string, boolean>>>;
  appStack: appStack[];
  setAppStack: Dispatch<SetStateAction<appStack[]>>;
  startOpen: boolean;
  setStartOpen: Dispatch<SetStateAction<boolean>>;
}

interface WindowProviderProp {
  children: React.ReactNode;
}

export interface appStack {
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
  appStack: [],
  setAppStack: () => {},
  startOpen: false,
  setStartOpen: () => {},
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
  const [appStack, setAppStack] = useState<appStack[]>([]);
  // Re-evaluate if this state should be in this file in the future
  const [startOpen, setStartOpen] = useState(false);

  const contextValues = {
    isMaximized,
    setIsMaximized,
    minimizedStates,
    setMinimizedStates,
    openStates,
    setOpenStates,
    appStack,
    setAppStack,
    startOpen,
    setStartOpen,
  };
  return (
    <WindowContext.Provider value={contextValues}>
      {children}
    </WindowContext.Provider>
  );
};

export { WindowContextProvider, useWindowContext };
