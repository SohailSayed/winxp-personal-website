import appList from "./appList";

const defaultClicks = [false, false, false, false];
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

export { defaultClicks, defaultOpenStates, defaultPositions };
