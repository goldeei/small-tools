import NavLink from "./NavLink";
import Controls from "../Controls";

interface Props {
  item: string;
}

function ExpandedNav({ item }: Props) {
  return (
    <>
      {item === "settings" && <Controls />}
      {item === "tools" && <NavLink to="/todo-list">TodoList</NavLink>}
    </>
  );
}

export default ExpandedNav;
