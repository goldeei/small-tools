import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";

import styles from "./App.module.css";

import Background from "./components/Background";
import Home from "@/pages/Home";
import TodoList from "@/pages/Todos";
import { userThemeAtom } from "./recoil/atoms/userThemeAtom";

function App() {
  const [theme, setTheme] = useRecoilState(userThemeAtom);

  //Set site theme
  //Use device controlled theme if not previously set manually
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark"
    ).matches;
    const prefersColorScheme = prefersDark ? "dark" : "light";
    const deviceControlsTheme = theme.deviceControlsTheme;
    if (deviceControlsTheme === true) {
      setTheme({ ...theme, theme: prefersColorScheme });
      document.documentElement?.setAttribute("data-theme", prefersColorScheme);
    } else {
      document.documentElement?.setAttribute("data-theme", theme.theme);
    }
  }, []);

  return (
    <div className={`${styles.container}`}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
      <Background />
    </div>
  );
}

export default App;
