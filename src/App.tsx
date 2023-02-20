import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Navbar from "@/components/Navbar";

import blocks from "@/assets/styles/layout/blocks.module.css";

import Home from "@/pages/Home";
import TodoList from "@/pages/Todos";

import "./App.css";
import { useState } from "react";

function App() {
  const [isDark, setDark] = useState(false);

  const setTheme = (current) => {
    console.log(current);
    document.documentElement?.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    setDark(current);
  };

  return (
    <RecoilRoot>
      <button onClick={() => setTheme(!isDark)}>Test</button>
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
