import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";

import Navbar from "@/components/Navbar";
import ThemeControl from "./components/ThemeControl";

import blocks from "@/assets/styles/layout/blocks.module.css";

import Home from "@/pages/Home";
import TodoList from "@/pages/Todos";

function App() {
  // const [isDark, setDark] = useRecoilState(userThemeAtom);
  // const setTheme = (current) => {
  //   console.log(current);
  //   document.documentElement?.setAttribute(
  //     "data-theme",
  //     isDark ? "dark" : "light"
  //   );
  //   setDark(current);
  // };

  return (
    <RecoilRoot>
      <ThemeControl />
      <div className={`${blocks.pageWrapper}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
