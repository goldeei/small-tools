import React, { useState } from "react";

import styles from "./TodoItem/todo-item.module.css";

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
  setTodos: (params: TodoItem[]) => void;
  showForm: (params: boolean) => void;
  editing: boolean;
}

export default function AddTodo({ todos, setTodos, editing, showForm }: Props) {
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
    return setTodos(newTodos);
  };
  return (
    <div>
      Add Todo
      <form
        id="new-todo-form"
        className={styles.container}
        onSubmit={handleSubmit}
      >
        <input
          className={`${styles.title} item-header blue`}
          onChange={handleInputChange}
          type="text"
          id="new-todo-title"
          name="title"
          placeholder="Add your title here..."
          required
        />
        <button id="add-todo" type="submit">
          Add Todo
        </button>
        <input
          className={styles.description}
          onChange={handleInputChange}
          type="text"
          id="new-todo-description"
          name="description"
          placeholder="Description"
        />
        <input
          className={styles.effort}
          onChange={handleInputChange}
          type="range"
          id="new-todo-difficulty"
          name="difficulty"
          max="5"
          step="1"
          placeholder="Difficulty"
        />
        <input
          className={styles.date}
          onChange={handleInputChange}
          type="date"
          id="new-todo-due"
          name="date"
          placeholder="Todo Due"
        />
      </form>
      <button id="close-todo" onClick={() => showForm(!editing)}>
        X
      </button>
    </div>
  );
}
