import classNames from "classnames";
import { Button } from "@/components/Buttons";
import { Checkmark, Close } from "@/components/Icons";

interface Props {
  completeTodo: (params: number) => void;
  deleteTodo: (params: number) => void;
  todo: TodoItem;
}

function TodoItem({ completeTodo, deleteTodo, todo }: Props) {
  const todoClass = classNames({
    complete: todo.complete,
    deleted: todo.timeDeleted,
  });
  return (
    <div className={todoClass} id={`todo-${todo.id}`}>
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
    </div>
  );
}

export default TodoItem;
