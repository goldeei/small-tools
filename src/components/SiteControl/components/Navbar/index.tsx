import { useState } from "react";
import { useMatch, useResolvedPath } from "react-router-dom";

import { Home, Gear, Shapes } from "@/components/Icons";

import Controls from "../Controls";
import NavLink from "./NavLink";
import ExpandedNav from "./ExpandedNav";

import styles from "./navbar.module.css";

export default function Navbar() {
  const resolvedPath = useResolvedPath("/");
  const isHome = useMatch({ path: resolvedPath.pathname, end: true });

  const [isExpanded, setExpanded] = useState(false);
  const [expandedItem, setExpandedItem] = useState(false);

  const toggleExpanded = (item) => {
    setExpandedItem(item);
    setExpanded(true);
  };

  return (
    <nav
      className={styles.container}
      // onMouseLeave={() => {
      //   setExpanded(false);
      // }}
    >
      <ul>
        <NavLink to="/">
          <Home />
        </NavLink>
        <button onClick={() => toggleExpanded("tools")}>
          <Shapes />
        </button>
        <button onClick={() => toggleExpanded("settings")}>
          <Gear />
        </button>
      </ul>
      {isExpanded ? (
        <div className={styles.dropdown}>
          <ExpandedNav item={expandedItem} />
          <button onClick={() => setExpanded(false)}>Close</button>
        </div>
      ) : null}
    </nav>
  );
}
