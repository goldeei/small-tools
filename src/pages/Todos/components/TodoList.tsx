import { useState } from "react";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import {
  todoDataStateAtom,
  addTodoSelector,
  filterTodosSelector,
  todoListFilterState,
} from "@/recoil/atoms/todoListAtom";

import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

function TodoList() {
  const [editing, setEditing] = useState(false);

  const addTodo = useSetRecoilState(addTodoSelector);
  const [todoData, setTodoData] = useRecoilState(todoDataStateAtom);
  const todoList = useRecoilValue(filterTodosSelector);
  const filter = useRecoilValue(todoListFilterState);

  const updateTodoProperty: UpdateTodo = (e, id, key, value) => {
    e.stopPropagation();
    let updatedTodos = [...todoData.todos].map((item): TodoItem => {
      if (item.id === id) return { ...item, [key]: value };
      else return item;
    });
    setTodoData({ ...todoData, todos: updatedTodos });
  };
  const updateTodoData = (data: TodoItem) => {
    addTodo(data);
  };

  return (
    <div>
      {filter}
      {todoList.map((todo: TodoItem) => (
        <TodoItem todo={todo} onUpdate={updateTodoProperty} />
      ))}
      {editing ? (
        <AddTodo
          showForm={setEditing}
          todoListLength={todoData.todos.length}
          onUpdateData={updateTodoData}
          editing={editing}
        />
      ) : (
        <button onClick={() => setEditing(!editing)}>+</button>
      )}
    </div>
  );
}

export default TodoList;
