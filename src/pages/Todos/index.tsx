import { motion } from "framer-motion";
import { ToolContainer } from "@/components/Layout";
import ListTodos from "./components/TodoList";
import styled from "styled-components";
import Page from "@/components/Page";

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
  const Test = () => {
    return (
      <div className="card">
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
      </div>
    );
  };

  const TestSidebar = () => {
    return (
      <motion.ul>
        <li>dasdasdsa</li>
        <li>dsadfdgfsdg</li>
        <li>ghghafhfdh</li>
        <li>hfagdgdasg</li>
        <li>gadghgdgdsa</li>
        <li>gadsgdhafgfjgf</li>
        <li>hgsdjsghdhdfg</li>
        <li>afdashflkjlasj</li>
      </motion.ul>
    );
  };

  return <Page pageContent={<Test />} pageControl={<TestSidebar />} />;
}
