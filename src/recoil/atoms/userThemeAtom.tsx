import { atom } from "recoil";
import { updateLocalStorage } from "../effects/updateLocalStorage";

export const userThemeAtom = atom({
  key: "theme",
  default: {},
  effects: [updateLocalStorage("theme")],
});
