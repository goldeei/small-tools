import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { Button } from "../../../Buttons";
import { userThemeAtom } from "@/recoil/atoms/userThemeAtom";

interface ThemeSettings {
  deviceTheme: boolean;
  theme: string;
}

function ThemeControl() {
  const [theme, setTheme] = useRecoilState(userThemeAtom);

  const changeTheme = (theme: string) => {
    setTheme({
      deviceTheme: false,
      theme: theme === "dark" ? "light" : "dark",
    });
  };

  return (
    <Button onClick={() => changeTheme(theme.theme)}>
      {theme.theme === "dark" ? (
        <span>Light Mode</span>
      ) : (
        <span>Dark Mode</span>
      )}
    </Button>
  );
}

export default ThemeControl;
