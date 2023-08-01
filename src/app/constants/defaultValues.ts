import appList from "./appList";

const appNames = appList.map((appData) => appData.appName);

const defaultOpenStates: Record<string, boolean> = appNames.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: false };
  },
  {}
);

const defaultPositions: Record<string, number[]> = appNames.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: [0, 0] };
  },
  {}
);
export { defaultOpenStates, defaultPositions };
