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

  //Set theme defaults and user preference
  useEffect(() => {
    if (Object.keys(theme).length !== 0 && theme.deviceTheme === false) return;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const prefersColorScheme = prefersDark ? "dark" : "light";
    console.log(theme);
    let themeSettings = {} as ThemeSettings;
    //If no local theme info, set defaults and push to local storage
    if (Object.keys(theme).length === 0) {
      themeSettings.deviceTheme = true;
      themeSettings.theme = prefersColorScheme;
      setTheme(themeSettings);
    } else if (
      theme.deviceTheme === true &&
      theme.theme !== prefersColorScheme
    ) {
      //Check if user changed device theme since last load, change theme
      setTheme({ ...theme, theme: prefersColorScheme });
    }
  }, []);

  useEffect(() => {
    document.documentElement?.setAttribute("data-theme", theme.theme);
  }, [theme]);

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
