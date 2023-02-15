import classNames from "classnames";
import { Button } from "@/components/Buttons";
import { Checkmark, Close, Edit, DownCaret } from "@/components/Icons";
import styled from "styled-components";
import { useState } from "react";

interface Props {
  completeTodo: (params: number) => void;
  deleteTodo: (params: number) => void;
  todo: TodoItem;
}

const StyledTodoItem = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 0.5rem;
  gap: 0.5rem;
  & > .controls,
  & > .complete {
    display: flex;
    align-items: center;
  }
  & > .body {
    flex: 1;
    & > .header {
      display: flex;
      gap: 1rem;
      align-items: center;
      & > .title {
        flex: 1;
      }
    }
  }
`;

function TodoItem({ completeTodo, deleteTodo, todo }: Props) {
  const [details, setShowDetails] = useState(false);
  const todoClass = classNames({
    complete: todo.complete,
    deleted: todo.timeDeleted,
  });

  const showDetails = () => {
    details ? setShowDetails(false) : setShowDetails(true);
  };

  return (
    <StyledTodoItem
      className={todoClass}
      id={`todo-${todo.id}`}
      onClick={showDetails}
    >
      <div className="complete">
        <Button onClick={(e) => e.stopPropagation()}>
          <Checkmark animate />
        </Button>
      </div>
      <div className="body">
        <div className="header">
          <span className="title">{todo.title}</span>
          {todo.date && <div className="due-date">Due: {todo.date}</div>}
        </div>
        {details && (
          <>
            {todo.description && (
              <div className="description">{todo.description}</div>
            )}
            {todo.difficulty !== 0 && (
              <div className="difficulty">Effort: {todo.difficulty}</div>
            )}
          </>
        )}
      </div>
      <div className="controls">
        <Button onClick={(e) => e.stopPropagation()}>
          <Close animate />
        </Button>
        <Button onClick={(e) => e.stopPropagation()}>
          <DownCaret />
        </Button>
        <Button onClick={(e) => e.stopPropagation()}>
          <Edit />
        </Button>
      </div>
    </StyledTodoItem>
  );
}

export default TodoItem;
