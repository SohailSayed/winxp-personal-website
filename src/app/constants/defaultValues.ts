import appList from "./appList";

const defaultOpenStates: Record<string, boolean> = appList.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: false };
  },
  {}
);

const defaultPositions: Record<string, number[]> = appList.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: [0, 0] };
  },
  {}
);

const defaultZPositions: Record<string, number> = appList.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: 0 };
  },
  {}
);

export { defaultOpenStates, defaultPositions, defaultZPositions };
