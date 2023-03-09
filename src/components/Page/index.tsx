import { motion } from "framer-motion";

import SiteControl from "@/components/SiteControl";

import styles from "./page.module.css";

interface Props {
  pageControl: React.ReactNode;
  pageContent: React.ReactNode;
}

function Page({ pageControl, pageContent }: Props) {
  return (
    <div className={`${styles.container}`}>
      <div className={`card shadow__near ${styles.navWrapper}`}>
        <SiteControl />
      </div>
      <header className={`card shadow__near ${styles.headerWrapper}`}></header>
      <div className={`card shadow__near ${styles.sidebarWrapper}`}>
        {pageControl}
      </div>
      <div className={`${styles.contentWrapper}`}>{pageContent}</div>
      <footer className={`card shadow__near ${styles.footerWrapper}`}></footer>
    </div>
  );
}

export default Page;
