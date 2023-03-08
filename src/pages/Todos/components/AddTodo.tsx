import React, { useState } from "react";

import CarouselChoice from "@/components/Form/ChoiceCarousel";

import { Button } from "@/components/Buttons";

import styles from "./TodoItem/todo-item.module.css";

const initial = {
  id: 0,
  title: "",
  description: "",
  difficulty: "",
  date: "",
  complete: false,
  timeDeleted: false,
};

interface Props {
  onUpdateData: (data: TodoItem) => void;
  close: (e?: any, id?: number) => void;
  todo: TodoItem;
}

export default function AddTodo({ close, onUpdateData, todo }: Props) {
  const [data, setData] = useState(initial);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(value);
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
  //TODO: Different methods for adding and editing, refactor to multiple components
  const addTodo = (todo: TodoItem) => {
    const newTodo = {
      id: Date.now(),
      title: todo.title,
      description: todo.description,
      difficulty: todo.difficulty,
      date: todo.date,
      complete: false,
      timeDeleted: null,
    };
    close();
    return onUpdateData(newTodo);
  };
  const placeholder = {
    title: todo?.title ? todo.title : "Add your title here...",
    description: todo?.description ? todo.description : "Description",
    difficulty: todo?.difficulty ? todo.difficulty : "Add your title here...",
    date: todo?.date ? todo.date : new Date().toDateString(),
  };

  return (
    <div>
      {!todo && <span>Add Todo</span>}
      <form
        id={todo ? `todo-${todo.id}__form` : "new-todo-form"}
        className={styles.container}
        onSubmit={handleSubmit}
      >
        <input
          className={`${styles.title} item-header blue`}
          onChange={handleInputChange}
          type="text"
          id="new-todo-title"
          name="title"
          placeholder={placeholder.title}
          required={todo ? false : true}
        />
        <button id="add-todo" type="submit">
          {todo ? "Edit Todo" : "Add Todo"}
        </button>
        <textarea
          className={styles.description}
          onChange={handleInputChange}
          id="new-todo-description"
          name="description"
          placeholder={placeholder.description}
        />
        <CarouselChoice
          id={"add-todo__difficulty"}
          name={"difficulty"}
          options={["easy", "mid", "hard"]}
          className={styles.difficulty}
          onChange={handleInputChange}
        />
        <input
          className={styles.date}
          onChange={handleInputChange}
          type="date"
          id="new-todo-due"
          name="date"
        />
      </form>
      <Button id="close-todo" onClick={() => close()}>
        X
      </Button>
    </div>
  );
}
