import appList from "./appList";

const appNames = appList.map((appData) => appData.appName);

const defaultOpenStates: Record<string, boolean> = appNames.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: false };
  },
  {}
);

export { defaultOpenStates };
