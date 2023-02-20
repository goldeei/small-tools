import classNames from "classnames";
import { Button } from "@/components/Buttons";
import { Checkmark, Ellipses } from "@/components/Icons";
import styled from "styled-components";
import { useState } from "react";
import TodoBody from "./TodoBody";
import TodoControls from "./TodoControls";
import { motion } from "framer-motion";

interface Props {
  todo: TodoItem;
  onUpdate: UpdateTodo;
}

function TodoItem({ todo, onUpdate }: Props) {
  const [isExpanded, setExpanded] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const todoClass = classNames({
    complete: todo.complete,
    deleted: todo.timeDeleted,
  });

  const hasDetails = todo.description || todo.difficulty ? true : false;

  const toggleExpanded = () => {
    if (isExpanded) {
      setShowControls(false);
    }
    if (hasDetails) {
      return setExpanded(!isExpanded);
    }
  };
  const toggleControls = (e: React.MouseEvent) => {
    e.stopPropagation();
    return setShowControls(!showControls);
  };

  return (
    <StyledTodoItem
      className={`todo ${todoClass}`}
      id={`todo-${todo.id}`}
      onClick={toggleExpanded}
    >
      <div className="todo-complete">
        <Button
          onClick={(e) => onUpdate(e, todo.id, "complete", !todo.complete)}
        >
          <Checkmark />
        </Button>
      </div>
      <div className="todo-body">
        <TodoBody todo={todo} expanded={isExpanded} />
      </div>
      {!isExpanded && (
        <div className="expand">
          <Button onClick={(e) => toggleControls(e)}>
            <Ellipses orientation="vertical" />
          </Button>
        </div>
      )}
      {showControls || isExpanded ? (
        <div className="todo-controls">
          <TodoControls todo={todo} onUpdate={onUpdate} />
        </div>
      ) : null}
    </StyledTodoItem>
  );
}

const StyledTodoItem = styled(motion.div)`
  display: grid;
  border: 1px solid black;
  grid-template-columns: auto 1fr auto auto;
  .todo {
    &-complete {
      background-color: blue;
    }
  }
`;

export default TodoItem;
