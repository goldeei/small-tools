import { Button } from "@/components/Buttons";
import { Close, Edit } from "@/components/Icons";
import styles from "./todo-item.module.css";

interface Props {
  todo: TodoItem;
  onUpdate: UpdateTodo;
}

function TodoControls({ todo, onUpdate, edit }: Props) {
  return (
    <div className={`${styles.controls}`}>
      {todo.timeDeleted === null ? (
        <Button
          onClick={(e) => onUpdate(e, todo.id, "timeDeleted", Date.now())}
        >
          <Close />
        </Button>
      ) : (
        <Button onClick={(e) => onUpdate(e, todo.id, "timeDeleted", null)}>
          Restore
        </Button>
      )}
      <Button onClick={(e) => edit(e, todo.id)}>
        <Edit />
      </Button>
    </div>
  );
}

export default TodoControls;
