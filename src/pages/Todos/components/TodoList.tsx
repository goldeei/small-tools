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
  const addTodo = useSetRecoilState(addTodoSelector);
  const [todoData, setTodoData] = useRecoilState(todoDataStateAtom);
  const todoList = useRecoilValue(filterTodosSelector);
  const filter = useRecoilValue(todoListFilterState);

  const [isShowForm, setShowForm] = useState(0); //Form id

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
  const closeForm = () => {
    setShowForm(0);
  };
  const showForm = (e, id) => {
    setShowForm(id);
  };
  return (
    <div className="scrollY card">
      {filter}
      {todoList.map((todo: TodoItem) => (
        <>
          {isShowForm === todo.id ? (
            <AddTodo
              key={`${todo.id}__form`}
              todo={todo}
              onUpdateData={updateTodoData}
              close={closeForm}
            />
          ) : (
            <TodoItem
              key={`${todo.id}__todo`}
              todo={todo}
              onUpdate={updateTodoProperty}
              edit={showForm}
            />
          )}
        </>
      ))}
      {isShowForm === 1 ? (
        <AddTodo
          key={"newTodoForm"}
          onUpdateData={updateTodoData}
          close={closeForm}
        />
      ) : (
        <button onClick={() => setShowForm(1)}>Add Todo</button>
      )}
    </div>
  );
}

export default TodoList;
