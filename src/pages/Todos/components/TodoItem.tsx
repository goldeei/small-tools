import classNames from "classnames";
import { Button } from "@/components/Buttons";
import {
  Checkmark,
  Close,
  Edit,
  DownCaret,
  Ellipses,
} from "@/components/Icons";
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
  & > .controls,
  & > .complete {
    margin: auto 0;
    display: flex;
    align-items: center;
  }
  & > .controls {
    height: 100%;
    padding: 0 0.5rem;
    gap: 0.25rem;
    display: flex;
    justify-content: space-around;
    background-color: blue;
    border-left: 1px solid black;
    &.expanded {
      flex-direction: column;
      padding: 0.5rem 0;
    }
    border-radius: 0.25rem;
    background-color: #c0efff;
    box-shadow: 0px 0px 2px 0px black;
  }
  & > .more {
    border: 1px solid black;
    background-color: blue;
    padding: 0 0.5rem;
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
  const [showDetails, setShowDetails] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const todoClass = classNames({
    complete: todo.complete,
    deleted: todo.timeDeleted,
  });

  const hasDetails = todo.description || todo.difficulty ? true : false;

  const toggleDetails = () => {
    if (showDetails) {
      setShowControls(false);
    }
    if (hasDetails) {
      return setShowDetails(!showDetails);
    }
  };
  const toggleControls = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    return setShowControls(!showControls);
  };
  const Controls = ({ showDetails, showControls }) => {
    if (showDetails || showControls) {
      return (
        <div className={`controls ${showDetails ? "expanded" : ""}`}>
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
      );
    }
  };
  return (
    <StyledTodoItem
      className={todoClass}
      id={`todo-${todo.id}`}
      onClick={toggleDetails}
    >
      <div className="complete">
        <Button onClick={(e) => e.stopPropagation()}>
          <Checkmark animate />
        </Button>
      </div>
      <div className="body">
        <div className={`header ${showDetails ? "expanded" : ""}`}>
          <span className="title">{todo.title}</span>
          {todo.date && <div className="due-date">Due: {todo.date}</div>}
        </div>
        {showDetails && (
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
      {!showDetails && (
        <Button className="more" onClick={(e) => toggleControls(e)}>
          <Ellipses orientation="vertical" />
        </Button>
      )}
      <Controls showDetails={showDetails} showControls={showControls} />
    </StyledTodoItem>
  );
}

export default TodoItem;
