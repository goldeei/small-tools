import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Navbar from "@/components/Navbar";
import { Wrapper } from "@/components/Layout";

import Home from "@/pages/Home";
import TodoList from "@/pages/Todos";

import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </Wrapper>
    </RecoilRoot>
  );
}

export default App;
