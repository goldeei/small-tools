import { motion } from "framer-motion";

import SiteControl from "@/components/SiteControl";

import styles from "./page.module.css";

interface Props {
  pageControl: React.ReactNode;
  pageContent: React.ReactNode;
}

function Page({ pageControl, pageContent }: Props) {
  return (
    <div className={styles.container}>
      <div className="card">
        <SiteControl />
        {pageControl}
      </div>
      {pageContent}
    </div>
  );
}

export default Page;
