import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";

import styles from "./App.module.css";

import Home from "@/pages/Home";
import TodoList from "@/pages/Todos";
import { userThemeAtom } from "./recoil/atoms/userThemeAtom";

function App() {
  const [theme, setTheme] = useRecoilState(userThemeAtom);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark"
    ).matches;
    const prefersColorScheme = prefersDark ? "dark" : "light";
    const deviceTheme = theme.deviceTheme;
    if (prefersColorScheme !== theme.theme && deviceTheme === true) {
      setTheme({ ...theme, theme: prefersColorScheme });
    }
  }, []);

  useEffect(() => {
    document.documentElement?.setAttribute("data-theme", theme.theme);
  }, [theme]);

  return (
    <div className={`${styles.container}`}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
