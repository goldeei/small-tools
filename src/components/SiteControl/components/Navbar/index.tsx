import { useMatch, useResolvedPath } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";

import { siteControlState } from "@/recoil/atoms/siteControlsAtom";

import { Home, Gear, Shapes } from "@/components/Icons";

import NavLink from "./NavLink";
import ExpandedNav from "./ExpandedNav";

import styles from "./navbar.module.css";
import useTimeout from "@/hooks/useTimeout";

export default function Navbar() {
  const resolvedPath = useResolvedPath("/");
  const isHome = useMatch({ path: resolvedPath.pathname, end: true });
  const [siteControls, setSiteControls] = useRecoilState(siteControlState);

  const toggleExpanded = (item: string) => {
    setSiteControls({ ...siteControls, expanded: true, item: item });
  };

  const [setTimer, clearTimer] = useTimeout(() => {
    setSiteControls({ ...siteControls, expanded: false });
  }, 1000);
  const closeExpanded = () => {
    setTimer();
  };
  const cancelClose = () => {
    clearTimer();
  };

  return (
    <nav
      className={styles.container}
      onMouseLeave={closeExpanded}
      onMouseEnter={cancelClose}
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
      <AnimatePresence initial={false}>
        {siteControls.expanded ? (
          <motion.div
            className={styles.dropdown}
            initial={{ height: 0 }}
            animate={{ height: 100 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ExpandedNav item={siteControls.item} />
            <button
              onClick={() =>
                setSiteControls({ ...siteControls, expanded: false })
              }
            >
              Close
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
