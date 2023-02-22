import { motion } from "framer-motion";

import Page from "@/components/Page";

export default function Home() {
  const TestControl = () => {
    return (
      <motion.ul>
        <li>dasdasdsa</li>
        <li>ghghafhfdh</li>
        <li>dsadfdgfsdg</li>
        <li>hfagdgdasg</li>
        <li>gadsgdhafgfjgf</li>
        <li>gadghgdgdsa</li>
        <li>afdashflkjlasj</li>
        <li>hgsdjsghdhdfg</li>
      </motion.ul>
    );
  };

  return <Page pageContent={<div>Hello</div>} pageControl={<TestControl />} />;
}
