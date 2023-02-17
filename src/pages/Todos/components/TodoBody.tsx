interface Props {
  todo: TodoItem;
}

function TodoBody({ todo }: Props) {
  return (
    <div>
      <div className="header">{todo.title}</div>
      <div className="description">{todo.description}</div>
      <div className="dueDate">{todo.date}</div>
      <div className="effort">{todo.difficulty}</div>
    </div>
  );
}

export default TodoBody;
