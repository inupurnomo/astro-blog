import { motion } from "framer-motion";
// import {AiOutlineCaretRight} from "react-icons/ai";
import pkg from "react-icons/ai/index";
const { AiOutlineCaretRight } = pkg;

export default function Apple() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-titleFont text-xl font-medium">
        Engineer <span className="tracking-wide text-textPrimary">@Apple</span>
      </h3>
      <p className="mt-1 text-sm font-medium">Jan 2023 - Present</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="flex gap-2 text-base">
          <span className="mt-1 text-textPrimary">
            <AiOutlineCaretRight />
          </span>
          Deliver high-quality, robust production code for a diverse array of
          projects for clients including Harvard Business School, Everytown for
          Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The
          19th News, and more
        </li>
        <li className="flex gap-2 text-base">
          <span className="mt-1 text-textPrimary">
            <AiOutlineCaretRight />
          </span>
          Work alongside creative directors to lead the research, development,
          and architecture of technical solutions to fulfill business
          requirements
        </li>
        <li className="flex gap-2 text-base">
          <span className="mt-1 text-textPrimary">
            <AiOutlineCaretRight />
          </span>
          Collaborate with designers, project managers, and other engineers to
          transform creative concepts into production realities for clients and
          stakeholders
        </li>
        <li className="flex gap-2 text-base">
          <span className="mt-1 text-textPrimary">
            <AiOutlineCaretRight />
          </span>
          Provide leadership within engineering department through close
          collaboration, knowledge shares, and mentorship
        </li>
      </ul>
    </motion.div>
  );
}
