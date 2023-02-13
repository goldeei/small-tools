import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import TodoList from "@/pages/TodoList";

import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/todo-list" element={<TodoList />} />
			</Routes>
		</>
	);
}

export default App;
