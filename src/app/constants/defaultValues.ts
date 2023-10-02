import { appStack } from "../WindowContext";
import appList from "./appList";

export interface SizePosition {
  width: string;
  height: string;
  x: number;
  y: number;
}

const appNames = appList.map((appData) => appData.appName);

const defaultAppStates: Record<string, boolean> = appNames.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: false };
  },
  {}
);

const defaultOpenStates: Record<string, boolean> = appNames.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: false };
  },
  {}
);
defaultOpenStates["Welcome Guide"] = true;

const defaultAppStack: appStack[] = [{ appName: "Welcome Guide", zIndex: 0 }];

const defaultSizePos: Record<string, SizePosition> = appNames.reduce(
  (accumulator, value) => {
    return {
      ...accumulator,
      [value]: { width: "60vw", height: "90vh", x: 300, y: 0 },
    };
  },
  {}
);

export { defaultOpenStates, defaultAppStates, defaultAppStack, defaultSizePos };
