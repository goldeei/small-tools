import NavLink from "./NavLink";
import Controls from "@/components/SiteSettings";

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
