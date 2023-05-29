import { useState } from "react";
import md from "react-icons/md/index";
const { MdNightlight, MdLightMode } = md;

export default function DarkMode() {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <div className="flex cursor-pointer">
      {isDarkMode ? (
        <div onClick={() => setDarkMode(true)}>
          <MdLightMode title="Change to Light" />
        </div>
      ) : (
        <div onClick={() => setDarkMode(false)}>
          <MdNightlight title="Change to Dark" />
        </div>
      )}
    </div>
  );
}
