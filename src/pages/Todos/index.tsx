import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ToolContainer } from "@/components/Layout";
import styled from "styled-components";

const TodoContainer = styled(ToolContainer)``;

export default function Todos() {
  const [storedTodos, setStoredTodos] = useLocalStorage("Todos", "");
  const [todos, setTodos] = useState(storedTodos);

  const deleteTodo = (id: number) => {
    const newTodos = [...todos];
    document.getElementById(`todo-${id}`)?.classList.add("deleted");
    newTodos[id].timeDeleted = Date.now();
    setTimeout(() => {
      return setTodos(newTodos);
    }, 1000);
  };
  const completeTodo = (id: number) => {
    const newTodos = [...todos];
    if (newTodos[id].complete) {
      newTodos[id].complete = false;
      document.getElementById(`todo-${id}`)?.classList.remove("complete");
    } else {
      newTodos[id].complete = true;
      document.getElementById(`todo-${id}`)?.classList.add("complete");
    }
    setTimeout(() => {
      return setTodos(newTodos);
    }, 1000);
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
  const clearTodos = () => {
    const newTodos = todos.map((todo: TodoItem) => {
      document.getElementById(`todo-${todo.id}`)?.classList.add("deleted");
      return {
        ...todo,
        timeDeleted: Date.now(),
      };
    });
    setTimeout(() => {
      return setTodos(newTodos);
    }, 1000);
  };
  useEffect(() => {
    setStoredTodos(todos);
    console.table(todos);
  }, [todos]);
  return (
    <TodoContainer>
      <button onClick={clearTodos}>Clear</button>
      <div className="todos-todolist">
        <h4>Todos</h4>
        <AddTodo addTodo={addTodo} />
        {todos.length > 0 &&
          todos.filter((todo: TodoItem) => todo.complete === false) &&
          todos.map((todo: TodoItem) => {
            if (!todo.complete === true && todo.timeDeleted === null) {
              return (
                <TodoItem
                  key={todo.id}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                  todo={todo}
                />
              );
            }
          })}
      </div>
      <div className="todos-todolist">
        <h4>Completed</h4>
        {todos.length > 0 &&
          todos.filter((todo: TodoItem) => todo.complete === true) &&
          todos.map((todo: TodoItem) => {
            if (todo.complete === true && todo.timeDeleted === null) {
              return (
                <TodoItem
                  key={todo.id}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                  todo={todo}
                />
              );
            }
          })}
      </div>
      <div>
        <h4>Recently Deleted</h4>
        {todos.length > 0 &&
          todos.filter((todo: TodoItem) => todo.timeDeleted !== null) &&
          todos.map((todo: TodoItem) => {
            if (todo.timeDeleted !== null) {
              return (
                <TodoItem
                  key={todo.id}
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                  todo={todo}
                />
              );
            }
          })}
      </div>
    </TodoContainer>
  );
}
