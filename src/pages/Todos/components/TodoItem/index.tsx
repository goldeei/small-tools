import { useState } from "react";

import { Button } from "@/components/Buttons";
import { Checkmark } from "@/components/Icons";

import TodoBody from "../TodoBody";
import TodoControls from "./TodoControls";

import styles from "./todo-item.module.css";

interface Props {
  todo: TodoItem;
  className?: string;
  onUpdate: UpdateTodo;
}

function TodoItem({ todo, className, onUpdate, edit }: Props) {
  const [isExpanded, setExpanded] = useState(false);
  const [showControls, setShowControls] = useState(false);
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
    <div
      className={`${styles.container} ${className}`}
      id={`todo-${todo.id}`}
      onClick={toggleExpanded}
    >
      <div className={`${styles.complete}`}>
        <Button
          onClick={(e) => onUpdate(e, todo.id, "complete", !todo.complete)}
        >
          <Checkmark />
        </Button>
      </div>
      <div className={`${styles.title} item-header blue`}>{todo.title}</div>
      <div className="expand">
        <TodoControls todo={todo} onUpdate={onUpdate} edit={edit} />
      </div>
      {todo.description && (
        <div className={`${styles.description}`}>{todo.description}</div>
      )}
      {todo.date && (
        <div className={`${styles.date} subtitle muted spaced`}>
          Due: {todo.date}
        </div>
      )}
      {todo.difficulty !== 0 && (
        <div className={`${styles.difficulty} subtitle muted spaced`}>
          {todo.difficulty}
        </div>
      )}
      <div className="todo-controls"></div>
    </div>
  );
}

export default TodoItem;
