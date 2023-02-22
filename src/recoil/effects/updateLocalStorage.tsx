import { AtomEffect, DefaultValue, useRecoilValueLoadable } from "recoil";
import { userThemeAtom } from "../atoms/userThemeAtom";

/**
 * Updates or clears local storage at key
 * @param {string} key Key for object in local storage
 * @returns If isReset clear storage with key, else set storage item with key
 */
export const updateLocalStorage =
  (key: string, defaultValue: any): AtomEffect<any> =>
  ({ setSelf, onSet }) => {
    const storedValues = localStorage.getItem(key);
    if (storedValues != null) {
      setSelf(JSON.parse(storedValues));
    } else {
      //Set local storage to atom defaults if none exist
      localStorage.setItem(key, JSON.stringify(defaultValue));
    }

    onSet((newValue: any, _, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
