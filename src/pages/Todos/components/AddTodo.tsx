import React, { useEffect, useState } from "react";

const initial = {
  id: 0,
  title: "",
  description: "",
  difficulty: 0,
  date: "",
  complete: false,
  timeDeleted: false,
};

interface Props {
  todos: TodoItem[];
  updateTodos: (params: TodoItem[]) => void;
}

export default function AddTodo({ todos, updateTodos }: Props) {
  const [data, setData] = useState(initial);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data) return;
    addTodo(data);
    setData(initial);
    const form = document.getElementById("new-todo-form");
    form?.querySelectorAll("input").forEach((input) => (input.value = ""));
  };
  const addTodo = (todo: TodoItem) => {
    const newTodos = [
      ...todos,
      {
        id: todos.length,
        title: todo.title,
        description: todo.description,
        difficulty: todo.difficulty,
        date: todo.date,
        complete: false,
        timeDeleted: null,
      },
    ];
    return updateTodos(newTodos);
  };
  return (
    <div>
      Add Todo
      <form id="new-todo-form" onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          id="new-todo-title"
          name="title"
          placeholder="Title"
          required
        />
        <input
          onChange={handleInputChange}
          type="text"
          id="new-todo-description"
          name="description"
          placeholder="Description"
        />
        <input
          onChange={handleInputChange}
          type="range"
          id="new-todo-difficulty"
          name="difficulty"
          max="5"
          step="1"
          placeholder="Difficulty"
        />
        <input
          onChange={handleInputChange}
          type="date"
          id="new-todo-due"
          name="date"
          placeholder="Todo Due"
        />
        <button id="add-todo" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
}
