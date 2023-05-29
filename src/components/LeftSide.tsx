import sl from "react-icons/sl/index";
import tb from "react-icons/tb/index";

const { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } =
  sl;
const { TbBrandCodepen } = tb;

export default function LeftSide() {
  return (
    <div className="-ml-5 hidden h-full w-full flex-col items-center justify-end gap-4 text-textDark dark:text-textLight mdl:flex">
      <div className="flex flex-col gap-2">
        <a
          href="https://github.com/inupurnomo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:text-textGreen inline-flex h-10 w-10 cursor-pointer items-center justify-center text-xl transition-all duration-300 hover:-translate-y-2">
            <SlSocialGithub />
          </span>
        </a>
        <a
          href="https://instagram.com/inupurnomo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:text-textGreen inline-flex h-10 w-10 cursor-pointer items-center justify-center text-xl transition-all duration-300 hover:-translate-y-2">
            <SlSocialInstagram />
          </span>
        </a>
        <a
          href="https://twitter.com/inupurnomo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:text-textGreen inline-flex h-10 w-10 cursor-pointer items-center justify-center text-xl transition-all duration-300 hover:-translate-y-2">
            <SlSocialTwitter />
          </span>
        </a>
        <a
          href="https://linkedin.com/in/inupurnomo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:text-textGreen inline-flex h-10 w-10 cursor-pointer items-center justify-center text-xl transition-all duration-300 hover:-translate-y-2">
            <SlSocialLinkedin />
          </span>
        </a>
        <a
          href="https://codepen.io/inupurnomo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:text-textGreen inline-flex h-10 w-10 cursor-pointer items-center justify-center text-xl transition-all duration-300 hover:-translate-y-2">
            <TbBrandCodepen />
          </span>
        </a>
      </div>
      <div className="h-20 w-[1px] bg-textDark dark:bg-textLight"></div>
    </div>
  );
}
