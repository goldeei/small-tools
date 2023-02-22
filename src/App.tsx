import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import styles from "./App.module.css";

import Home from "@/pages/Home";
import TodoList from "@/pages/Todos";

function App() {
  return (
    <RecoilRoot>
      <div className={`${styles.container}`}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
