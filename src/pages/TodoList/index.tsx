import { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function TodoList() {
	const [storedTodos, setStoredTodos] = useLocalStorage("Todos", "");
	const [todos, setTodos] = useState(storedTodos);
	const deleteTodo = (id: number) => {
		const newTodos = [...todos];
		document.getElementById(`todo-${id}`)?.classList.add("deleted");
		newTodos[id].timeDeleted = Date.now();
		setTimeout(() => {
			return setTodos(newTodos);
		}, 1000);
	};
	const completeTodo = (id: number) => {
		const newTodos = [...todos];
		if (newTodos[id].complete) {
			newTodos[id].complete = false;
			document.getElementById(`todo-${id}`)?.classList.remove("complete");
		} else {
			newTodos[id].complete = true;
			document.getElementById(`todo-${id}`)?.classList.add("complete");
		}
		setTimeout(() => {
			return setTodos(newTodos);
		}, 1000);
	};
	const addTodo = (todo: TodoItem) => {
		const newTodos = [
			...todos,
			{
				id: todos.length,
				title: todo.title,
				description: todo.description,
				difficulty: todo.difficulty,
				date: todo.date,
				complete: false,
				timeDeleted: null,
			},
		];
		return setTodos(newTodos);
	};
	const clearTodos = () => {
		const newTodos = todos.map((todo: TodoItem) => {
			document.getElementById(`todo-${todo.id}`)?.classList.add("deleted");
			return {
				...todo,
				timeDeleted: Date.now(),
			};
		});
		setTimeout(() => {
			return setTodos(newTodos);
		}, 1000);
	};
	useEffect(() => {
		setStoredTodos(todos);
		console.table(todos);
	}, [todos]);
	return (
		<TodoListWrapper>
			<button onClick={clearTodos}>Clear</button>
			<TodoListContainer>
				<h4>Todos</h4>
				<AddTodo addTodo={addTodo} />
				{todos.length > 0 &&
					todos.filter((todo: TodoItem) => todo.complete === false) &&
					todos.map((todo: TodoItem) => {
						if (!todo.complete === true && todo.timeDeleted === null) {
							return (
								<TodoItem
									key={todo.id}
									completeTodo={completeTodo}
									deleteTodo={deleteTodo}
									todo={todo}
								/>
							);
						}
					})}
			</TodoListContainer>
			<TodoCompleteContainer>
				<h4>Completed</h4>
				{todos.length > 0 &&
					todos.filter((todo: TodoItem) => todo.complete === true) &&
					todos.map((todo: TodoItem) => {
						if (todo.complete === true && todo.timeDeleted === null) {
							return (
								<TodoItem
									key={todo.id}
									completeTodo={completeTodo}
									deleteTodo={deleteTodo}
									todo={todo}
								/>
							);
						}
					})}
			</TodoCompleteContainer>
			<TodoRecentlyDeletedContainer>
				<h4>Recently Deleted</h4>
				{todos.length > 0 &&
					todos.filter((todo: TodoItem) => todo.timeDeleted !== null) &&
					todos.map((todo: TodoItem) => {
						if (todo.timeDeleted !== null) {
							return (
								<TodoItem
									key={todo.id}
									completeTodo={completeTodo}
									deleteTodo={deleteTodo}
									todo={todo}
								/>
							);
						}
					})}
			</TodoRecentlyDeletedContainer>
		</TodoListWrapper>
	);
}

const TodoListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;
const TodoListContainer = styled.div`
	width: min(500px, 100%);
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const TodoCompleteContainer = styled.div`
	width: min(500px, 100%);
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const TodoRecentlyDeletedContainer = styled.div`
	width: min(500px, 100%);
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
