import { useRecoilState } from "recoil";

import TodoList from "./components/TodoList";
import Page from "@/components/Page";
import { todoListFilterState } from "@/recoil/atoms/todoListAtom";

import { Inbox, CheckmarkSquare, Trash } from "@/components/Icons";

import styles from "./todos.modules.css";

export default function TodoPage() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  //If move to checkboxes
  // const updateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const target = e.target;
  //   const currFilters = target.checked
  //     ? [...filterArray, target.value]
  //     : filterArray.filter((x) => x !== target.value);
  //   console.log(currFilters);
  //   setFilter(currFilters);
  // };

  const updateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const TestSidebar = () => {
    return (
      <div className="flex-column radios-as-buttons">
        <label className={`btn has-icon ${filter === "Inbox" ? "active" : ""}`}>
          <Inbox />
          Inbox
          <input
            id="inbox-filter"
            type="radio"
            name="todo-filters"
            value="Inbox"
            checked={filter === "Inbox"}
            onChange={updateFilter}
            hidden
          />
        </label>
        <label
          className={`btn has-icon ${filter === "Completed" ? "active" : ""}`}
        >
          <CheckmarkSquare />
          Completed
          <input
            id="completed-filter"
            type="radio"
            name="todo-filters"
            value="Completed"
            checked={filter === "Completed"}
            onChange={updateFilter}
            hidden
          />
        </label>
        <label
          className={`btn has-icon ${filter === "Deleted" ? "active" : ""}`}
        >
          <Trash />
          Deleted
          <input
            id="deleted-filter"
            type="radio"
            name="todo-filters"
            value="Deleted"
            checked={filter === "Deleted"}
            onChange={updateFilter}
            hidden
          />
        </label>
        <label className={`btn ${filter === "All" ? "active" : ""}`}>
          Show All
          <input
            id="all-filter"
            type="radio"
            name="todo-filters"
            value="All"
            checked={filter === "All"}
            onChange={updateFilter}
            hidden
          />
        </label>
      </div>
    );
  };

  return <Page pageContent={<TodoList />} pageControl={<TestSidebar />} />;
}
