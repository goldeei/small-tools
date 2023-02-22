import Navbar from "./components/Navbar";
import Controls from "./components/Controls";

import styles from "./site-control.module.css";

function SiteControl() {
  return (
    <div className={`${styles.container} card`}>
      <Navbar />
    </div>
  );
}

export default SiteControl;
