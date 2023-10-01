import { atom } from "recoil";
import { POMO_MINUTE, TO_MILLISECONDS, TO_SECONDS } from "./commonConfig";

export const remainState = atom({
  key: "remainState",
  default: POMO_MINUTE * TO_SECONDS * TO_MILLISECONDS,
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
