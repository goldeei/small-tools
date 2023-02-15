import { Route, Routes } from "react-router-dom";

import Navbar from "@/components/Navbar";
import { Wrapper } from "@/components/Layout"

import Home from "@/pages/Home";
import TodoList from "@/pages/TodoList";

import "./App.css";

function App() {
	return (
		<>
			<Wrapper>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/todo-list" element={<TodoList />} />
				</Routes>
			</Wrapper>
		</>
	);
}

export default App;
