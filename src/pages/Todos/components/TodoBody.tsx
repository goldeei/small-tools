interface Props {
  todo: TodoItem;
  expanded: boolean;
}

function TodoBody({ todo, expanded }: Props) {
  return (
    <>
      <div className="header">{todo.title}</div>
      {expanded && (
        <div className="details">
          <div className="description">{todo.description}</div>
          <div className="dueDate">{todo.date}</div>
          <div className="effort">{todo.difficulty}</div>
        </div>
      )}
    </>
  );
}

export default TodoBody;
