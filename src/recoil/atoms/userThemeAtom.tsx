import { atom } from "recoil";
import { updateLocalStorage } from "../effects/updateLocalStorage";

const defaultValue = {
  deviceTheme: true,
  theme: "light",
};

export const userThemeAtom = atom({
  key: "theme",
  default: defaultValue,
  effects: [updateLocalStorage("theme", defaultValue)],
});
