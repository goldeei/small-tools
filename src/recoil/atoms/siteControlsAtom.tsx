import { atom } from "recoil";

export const siteControlState = atom({
  key: "site_controls",
  default: { expanded: false, item: "tools" },
});
