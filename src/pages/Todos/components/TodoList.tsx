import { useState } from "react";
import styled from "styled-components";
import { LayoutGroup, AnimatePresence } from "framer-motion";

import { useRecoilState } from "recoil";
import { todoState } from "@/recoil/atoms/todoListAtom";

import { ToolContainer } from "@/components/Layout";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

function TodoList({ status }: { status: string }) {
  const [todos, setTodos] = useRecoilState(todoState);
  const [editing, setEditing] = useState(false);

  const onUpdate: UpdateTodo = (e, id, key, value) => {
    e.stopPropagation();
    let updatedData = [...todos].map((item) => {
      if (item.id === id) return { ...item, [key]: value };
      else return item;
    });
    setTodos(updatedData);
  };

  const filterTodos = (status: string) => {
    if (todos.length === 0) return [];
    if (status === "deleted") {
      return todos.filter((todo: TodoItem) => todo.timeDeleted !== null);
    } else if (status === "completed") {
      return todos.filter(
        (todo: TodoItem) => todo.complete === true && todo.timeDeleted === null
      );
    } else {
      return todos.filter(
        (todo: TodoItem) => todo.complete === false && todo.timeDeleted === null
      );
    }
  };

  const todoList = filterTodos(status);
  return (
    <StyledTodoList>
      <AnimatePresence>
        {todoList.length !== 0 &&
          todoList
            .slice(0)
            .reverse()
            .map((todo: TodoItem) => (
              <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
            ))}
      </AnimatePresence>
      {status === "active" &&
        (editing ? (
          <AddTodo
            todos={todos}
            setTodos={setTodos}
            showForm={setEditing}
            editing={editing}
          />
        ) : (
          <button onClick={() => setEditing(!editing)}>+</button>
        ))}
    </StyledTodoList>
  );
}

const StyledTodoList = styled(ToolContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;
`;

export default TodoList;
