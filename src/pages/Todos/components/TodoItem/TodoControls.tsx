import { Button } from "@/components/Buttons";
import { Close, Edit } from "@/components/Icons";

interface Props {
  todo: TodoItem;
  onUpdate: UpdateTodo;
}

function TodoControls({ todo, onUpdate }: Props) {
  return (
    <div>
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
      <Button onClick={(e) => e.stopPropagation()}>
        <Edit />
      </Button>
    </div>
  );
}

export default TodoControls;
