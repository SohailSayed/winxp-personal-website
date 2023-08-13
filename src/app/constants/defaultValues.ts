import appList from "./appList";

export interface SizePosition {
  width: string;
  height: string;
  x: number;
  y: number;
}

const appNames = appList.map((appData) => appData.appName);

const defaultOpenStates: Record<string, boolean> = appNames.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: false };
  },
  {}
);

const defaultSizePos: Record<string, SizePosition> = appNames.reduce(
  (accumulator, value) => {
    return {
      ...accumulator,
      [value]: { width: "60vw", height: "90vh", x: 200, y: 50 },
    };
  },
  {}
);

export { defaultOpenStates, defaultSizePos };
