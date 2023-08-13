"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import {
  SizePosition,
  defaultOpenStates,
  defaultSizePos,
} from "./constants/defaultValues";

interface WindowContextProps {
  maximizedStates: Record<string, boolean>;
  setMaximizedStates: Dispatch<SetStateAction<Record<string, boolean>>>;
  minimizedStates: Record<string, boolean>;
  setMinimizedStates: Dispatch<SetStateAction<Record<string, boolean>>>;
  openStates: Record<string, boolean>;
  setOpenStates: Dispatch<SetStateAction<Record<string, boolean>>>;
  appStack: appStack[];
  setAppStack: Dispatch<SetStateAction<appStack[]>>;
  startOpen: boolean;
  setStartOpen: Dispatch<SetStateAction<boolean>>;
  sizePosStates: Record<string, SizePosition>;
  setSizePosStates: Dispatch<SetStateAction<Record<string, SizePosition>>>;
}

interface WindowProviderProp {
  children: React.ReactNode;
}

export interface appStack {
  appName: string;
  zIndex: number;
}

const WindowContext = createContext<WindowContextProps>({
  maximizedStates: defaultOpenStates,
  setMaximizedStates: () => {},
  minimizedStates: defaultOpenStates,
  setMinimizedStates: () => {},
  openStates: defaultOpenStates,
  setOpenStates: () => {},
  appStack: [],
  setAppStack: () => {},
  startOpen: false,
  setStartOpen: () => {},
  sizePosStates: defaultSizePos,
  setSizePosStates: () => {},
});

const useWindowContext = () => useContext(WindowContext);

const WindowContextProvider: React.FC<WindowProviderProp> = ({
  children,
}: WindowProviderProp) => {
  const [maximizedStates, setMaximizedStates] =
    useState<Record<string, boolean>>(defaultOpenStates);
  const [minimizedStates, setMinimizedStates] =
    useState<Record<string, boolean>>(defaultOpenStates);
  const [openStates, setOpenStates] =
    useState<Record<string, boolean>>(defaultOpenStates);
  const [appStack, setAppStack] = useState<appStack[]>([]);
  const [startOpen, setStartOpen] = useState(false);
  const [sizePosStates, setSizePosStates] =
    useState<Record<string, SizePosition>>(defaultSizePos);

  const contextValues = {
    maximizedStates,
    setMaximizedStates,
    minimizedStates,
    setMinimizedStates,
    openStates,
    setOpenStates,
    appStack,
    setAppStack,
    startOpen,
    setStartOpen,
    sizePosStates,
    setSizePosStates,
  };
  return (
    <WindowContext.Provider value={contextValues}>
      {children}
    </WindowContext.Provider>
  );
};

export { WindowContextProvider, useWindowContext };
