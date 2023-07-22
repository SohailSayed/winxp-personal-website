"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface WindowContextProps {
  isClicked: boolean[];
  setIsClicked: Dispatch<SetStateAction<boolean[]>>;
  isMaximized: boolean;
  setIsMaximized: Dispatch<SetStateAction<boolean>>;
  isMinimized: boolean;
  setIsMinimized: Dispatch<SetStateAction<boolean>>;
}

interface WindowProviderProp {
  children: React.ReactNode;
}

const defaultClicks = [false, false, false, false];

const WindowContext = createContext<WindowContextProps>({
  isClicked: defaultClicks,
  setIsClicked: () => {},
  isMaximized: false,
  setIsMaximized: () => {},
  isMinimized: false,
  setIsMinimized: () => {},
});

const useWindowContext = () => useContext(WindowContext);

const WindowContextProvider: React.FC<WindowProviderProp> = ({
  children,
}: WindowProviderProp) => {
  const [isClicked, setIsClicked] = useState<boolean[]>(defaultClicks);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const contextValues = {
    isClicked,
    setIsClicked,
    isMaximized,
    setIsMaximized,
    isMinimized,
    setIsMinimized,
  };
  return (
    <WindowContext.Provider value={contextValues}>
      {children}
    </WindowContext.Provider>
  );
};

export { WindowContextProvider, useWindowContext };
