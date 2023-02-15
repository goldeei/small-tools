import classNames from "classnames";
import { Button } from "@/components/Buttons";
import { Checkmark, Close } from "@/components/Icons";
import styled from "styled-components";

interface Props {
  completeTodo: (params: number) => void;
  deleteTodo: (params: number) => void;
  todo: TodoItem;
}

const StyledTodoItem = styled.div`
  display: flex;
  border: 1px solid black;
`;

function TodoItem({ completeTodo, deleteTodo, todo }: Props) {
  const todoClass = classNames({
    complete: todo.complete,
    deleted: todo.timeDeleted,
  });
  return (
    <StyledTodoItem className={todoClass} id={`todo-${todo.id}`}>
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
    </StyledTodoItem>
  );
}

export default TodoItem;
