import { motion } from "framer-motion";
import { useRecoilState } from "recoil";

import TodoList from "./components/TodoList";
import Page from "@/components/Page";
import { todoListFilterState } from "@/recoil/atoms/todoListAtom";

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
      <div className="flex-column ">
        <label>
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
        <label>
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
        <label>
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
        <label>
          All
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
      // <select value={filter} onChange={updateFilter}>
      //   <option value="Show All">All</option>
      //   <option value="Show Completed">Completed</option>
      //   <option value="Show Uncompleted">Uncompleted</option>
      // </select>
    );
  };

  return <Page pageContent={<TodoList />} pageControl={<TestSidebar />} />;
}
