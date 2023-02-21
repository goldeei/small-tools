import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import SiteControl from "./components/SiteControl";

import styles from "./App.module.css";

import Home from "@/pages/Home";
import TodoList from "@/pages/Todos";

function App() {
  return (
    <RecoilRoot>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.container}`}>
          <SiteControl />
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
