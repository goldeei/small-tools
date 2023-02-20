import { atom } from "recoil";
import { updateLocalStorage } from "../effects/updateLocalStorage";

export const todoState = atom({
  key: "todos",
  default: [],
  effects: [updateLocalStorage("todos")],
});
