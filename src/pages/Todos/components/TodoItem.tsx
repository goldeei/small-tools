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
  background-color: #c0efff;
  align-items: center;
  & > .controls,
  & > .complete {
    display: flex;
    align-items: center;
  }
  & > .controls {
    height: fit-content;
    padding: 0 0.5rem;
    gap: 0.25rem;
    display: flex;
    &.expanded {
      flex-direction: column;
      padding: 0.5rem 0;
    }
    border-radius: 2rem;
    background-color: #c0efff;
    box-shadow: 0px 0px 2px 0px black;
  }
  & > .body {
    flex: 1;
    & > .header {
      display: flex;
      gap: 1rem;
      align-items: center;
      &.expanded {
        border-bottom: 1px solid blue;
      }
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

  const hasDetails = todo.description || todo.difficulty ? true : false;

  const showDetails = () => {
    if (hasDetails) {
      return details ? setShowDetails(false) : setShowDetails(true);
    }
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
        <div className={`header ${details ? "expanded" : ""}`}>
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
      <div className={`controls ${details ? "expanded" : ""}`}>
        <Button onClick={(e) => e.stopPropagation()}>
          <Close animate />
        </Button>
        {hasDetails && (
          <Button onClick={(e) => e.stopPropagation()}>
            <DownCaret />
          </Button>
        )}
        <Button onClick={(e) => e.stopPropagation()}>
          <Edit />
        </Button>
      </div>
    </StyledTodoItem>
  );
}

export default TodoItem;
