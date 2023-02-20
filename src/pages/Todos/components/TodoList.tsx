import { useState } from "react";
import styled from "styled-components";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";

import { useRecoilState } from "recoil";
import { todoState } from "@/recoil/atoms/todoListAtom";

import { ToolContainer } from "@/components/Layout";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {},
};

const item = {
  hidden: { opacity: 0, y: -25 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 25 },
};

function TodoList({ status }: { status: string }) {
  const [todos, setTodos] = useRecoilState(todoState);
  const [editing, setEditing] = useState(false);
  const [sort, setSort] = useState("reverse");
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
    const revTodos = todos.slice(0).reverse();
    if (status === "deleted") {
      return revTodos.filter((todo: TodoItem) => todo.timeDeleted !== null);
    } else if (status === "completed") {
      return revTodos.filter(
        (todo: TodoItem) => todo.complete === true && todo.timeDeleted === null
      );
    } else {
      return revTodos.filter(
        (todo: TodoItem) => todo.complete === false && todo.timeDeleted === null
      );
    }
  };

  const todoList = filterTodos(status);
  return (
    <StyledTodoList
      as={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence>
        {todoList.length !== 0 &&
          todoList.map((todo: TodoItem) => (
            <motion.div key={todo.id} variants={item}>
              <TodoItem todo={todo} onUpdate={onUpdate} />
            </motion.div>
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
  border: 1px solid blue;
  padding: 1rem;
`;

export default TodoList;
