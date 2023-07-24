import appList from "./appList";

const defaultClicks = [false, false, false, false];
const defaultOpenStates: Record<string, boolean> = appList.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: false };
  },
  {}
);

// Temporary until icons in homepage implemented
const trueOpenStates: Record<string, boolean> = appList.reduce(
  (accumulator, value) => {
    return { ...accumulator, [value]: true };
  },
  {}
);

const defaultPosition = [50, 52.5];

export { defaultClicks, defaultOpenStates, trueOpenStates, defaultPosition };
