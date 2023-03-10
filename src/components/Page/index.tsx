import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";

import styles from "./page.module.css";

interface Props {
  pageControl: React.ReactNode;
  pageContent: React.ReactNode;
}

function Page({ pageControl, pageContent }: Props) {
  return (
    <div className={`${styles.pageWrapper}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.sidebarContainer}`}>
          <div className={`card shadow__near ${styles.navWrapper}`}>
            <Navbar />
          </div>
          <div className={`card shadow__near ${styles.sidebarWrapper}`}>
            {pageControl}
          </div>
        </div>
        <div className={`${styles.contentContainer}`}>
          <header className={`card shadow__near ${styles.headerWrapper}`}>
            dsadsadsa
          </header>
          <div className={`${styles.contentWrapper}`}>{pageContent}</div>
        </div>
      </div>
      <footer className={`card shadow__near ${styles.footerWrapper}`}>
        <div>dsadsad</div>
        <div>dsadsad</div>
      </footer>
    </div>
  );
}

export default Page;
