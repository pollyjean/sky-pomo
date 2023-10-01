import { atom } from "recoil";

export const minutesState = atom({
  key: "minutesState",
  default: 0,
});
export const hoursState = atom({
  key: "hoursState",
  default: 0,
});
export const roundState = atom({
  key: "roundState",
  default: 0,
});
export const goalState = atom({
  key: "goalState",
  default: 0,
});

export const playState = atom({
  key: "playState",
  default: false,
});
