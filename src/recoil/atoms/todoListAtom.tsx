import { atom, selector } from "recoil";
import { updateLocalStorage } from "../effects/updateLocalStorage";

export const todoDataStateAtom = atom({
  key: "TodoData",
  default: {
    todos: [],
    labels: [],
  },
  effects: [updateLocalStorage("todoData")],
});

export const addTodoSelector = selector({
  key: "AddTodo",
  get: ({ get }) => {
    const todos = get(todoDataStateAtom).todos;
    return todos;
  },
  set: ({ set, get }, newTodo) => {
    const todos = get(todoDataStateAtom).todos || [];
    return set(todoDataStateAtom, {
      ...todoDataStateAtom,
      todos: [...todos, newTodo],
    });
  },
});

export const todoListFilterState = atom({
  key: "TodosFilter",
  default: "Inbox",
});

export const filterTodosSelector = selector({
  key: "FilteredTodos",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const todos = get(todoDataStateAtom).todos;

    switch (filter) {
      case "Inbox":
        return todos.filter(
          (todo: TodoItem) =>
            todo.complete === false && todo.timeDeleted === null
        );
      case "Completed":
        return todos.filter(
          (todo: TodoItem) =>
            todo.complete === true && todo.timeDeleted === null
        );
      case "Deleted":
        return todos.filter((todo: TodoItem) => todo.timeDeleted !== null);
      case "All":
        return todos;
      default:
        return todos;
    }
  },
});
