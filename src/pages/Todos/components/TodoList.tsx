import { ToolContainer } from "@/components/Layout";
import styled from "styled-components";
import TodoItem from "./TodoItem";

interface Props {
  todos: TodoItem[];
  status: string;
}

const StyledTodoList = styled(ToolContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function TodoList({ todos, status }: Props) {
  const filterTodos = (status: string) => {
    if (todos.length === 0) return [];
    if (status === "deleted") {
      return todos.filter((todo: TodoItem) => todo.timeDeleted !== null);
    } else if (status === "completed") {
      return todos.filter(
        (todo: TodoItem) => todo.complete === true && todo.timeDeleted === null
      );
    } else {
      return todos.filter(
        (todo: TodoItem) => todo.complete === false && todo.timeDeleted === null
      );
    }
  };
  const todoList = filterTodos(status);
  return (
    <StyledTodoList>
      {todoList.length !== 0 &&
        todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </StyledTodoList>
  );
}

export default TodoList;
