import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdBrightness3 } from "react-icons/md"

export default function ThemeSwitcher() {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   return (
      <button
         aria-label="Toggle Dark Mode"
         type="button"
         className="rounded-full focus:outline-none bg-slate-100 dark:bg-slate-700 ml-3 mt-6 md:my-0 border border-slate-300 dark:border-sky-800 w-[3rem]"
         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
         {mounted && (
            <span className={`w-full h-full
               flex ${theme === 'dark' ? 'justify-end' : 'justify-start'}
               dark:text-slate-400 dark:hover:text-sky-700 dark:border-slate-300
               md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:dark:hover:text-sky-500 md:dark:hover:bg-transparent md:font-semibold`}
            >
               {theme === "light" ? (<MdLightMode className="w-6 h-6 p-1 rounded-full bg-slate-500 text-slate-300" />) : (<MdBrightness3 className="w-6 h-6 p-1 rounded-full bg-sky-500 text-slate-300" />)}
            </span>
         )}
      </button>
   );
}