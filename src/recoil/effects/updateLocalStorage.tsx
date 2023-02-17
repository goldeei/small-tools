import { AtomEffect } from "recoil";

/**
 * Updates or clears local storage at key
 * @param {string} key Key for object in local storage
 * @returns If isReset clear storage with key, else set storage item with key
 */
export const updateLocalStorage =
  (key: string): AtomEffect<any> =>
  ({ setSelf, onSet }) => {
    const storedValues = localStorage.getItem(key);
    if (storedValues != null) {
      setSelf(JSON.parse(storedValues));
    }

    onSet((newValue: any, _, isReset: boolean) => {
      console.log(newValue);
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
