import { useMatch, useResolvedPath } from "react-router-dom";

import styles from "./navbar.module.css";

import NavLink from "./NavLink";

export default function Navbar() {
  const resolvedPath = useResolvedPath("/");
  const isHome = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <nav>
      <ul>
        <NavLink to="/">Simple Tools</NavLink>
        <NavLink to="/todo-list">TodoList</NavLink>
      </ul>
    </nav>
  );
}
