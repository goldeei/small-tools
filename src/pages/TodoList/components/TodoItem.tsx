import styled from "styled-components";
import classNames from "classnames";
import { Button } from "@/components/Buttons";
import { Checkmark, Close } from "@/components/Icons";

function TodoItem({
	completeTodo,
	deleteTodo,
	todo,
}: {
	completeTodo: (params: number) => void;
	deleteTodo: (params: number) => void;
	todo: TodoItem;
}) {
	const todoClass = classNames({
		complete: todo.complete,
		deleted: todo.timeDeleted,
	});
	return (
		<TodoItemContainer className={todoClass} id={`todo-${todo.id}`}>
			<div className="controls">
				<Button onClick={() => completeTodo(todo.id)}>
					<Checkmark animate />
				</Button>
				<Button onClick={() => deleteTodo(todo.id)}>
					<Close animate />
				</Button>
			</div>
			<div className="details">
				<div className="header">
					<h3 className="title">{todo.title}</h3>
					<div className="difficulty">{todo.difficulty}</div>
				</div>
				<div className="description">{todo.description}</div>
				<div className="due-date">{todo.date}</div>
			</div>
		</TodoItemContainer>
	);
}

const TodoItemContainer = styled.div`
	display: flex;
	padding: 1rem;
	border: 1px solid black;
	gap: 1rem;
	transition: all 1s;
	&.complete {
		background-color: blue;
	}
	&.deleted {
		background-color: grey;
		.header {
			text-decoration: line-through;
		}
	}
	& > .controls {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		gap: 1rem;
		& > button {
			width: 100%;
			flex: 1 1 100%;
		}
	}
	& > .details {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		& > .header {
			display: flex;
			& > .title {
				margin: 0;
				flex: 1;
			}
		}
	}
`;

export default TodoItem;
