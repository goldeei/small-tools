import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";

import Navbar from "@/components/Navbar";
import ThemeControl from "./components/ThemeControl";

import styles from "./App.module.css";

import Home from "@/pages/Home";
import TodoList from "@/pages/Todos";

function App() {
  return (
    <RecoilRoot>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.container}`}>
          <div>
            <ThemeControl />
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo-list" element={<TodoList />} />
          </Routes>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
