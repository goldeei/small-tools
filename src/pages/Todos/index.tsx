import { useCallback, useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ToolContainer } from "@/components/Layout";
import ListTodos from "./components/TodoList";
import styled from "styled-components";

const TodoContainer = styled(ToolContainer)`
  grid-template-areas:
    "completed active"
    "deleted active";
  grid-template-columns: 1fr 3fr;
  column-gap: 5%;
  row-gap: 2rem;
  & > .active {
    grid-area: active;
  }
  & > .completed {
    grid-area: completed;
  }
  & > .deleted {
    grid-area: deleted;
  }
`;

export default function Todos() {
  return (
    <TodoContainer>
      {/* <button onClick={clearTodos}>Clear</button> */}
      <div className="deleted">
        <h1>Deleted</h1>
        <ListTodos status={"deleted"} />
      </div>
      <div className="completed">
        <h1>Completed</h1>
        <ListTodos status={"completed"} />
      </div>
      <div className="active">
        <h1>Active</h1>
        <ListTodos status={"active"} />
      </div>
    </TodoContainer>
  );
}
