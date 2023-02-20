import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Navbar from "@/components/Navbar";

import blocks from "@/assets/styles/layout/blocks.module.css";

import Home from "@/pages/Home";
import TodoList from "@/pages/Todos";

import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <div className={blocks.pageWrapper}>
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
