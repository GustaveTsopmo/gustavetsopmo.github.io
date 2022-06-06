import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Navbar(props) {
   const router = useRouter();
   const [open, setOpen] = useState(false);

   const classesDependsOnHeroBgImage = (router.asPath === '/') ? ' md:text-slate-100 md:dark:text-slate-400' : 'text-slate-700'

   const linkClass = `block py-2 mt-3 md:mt-0 pr-4 pl-3 ${classesDependsOnHeroBgImage} 
   dark:text-slate-400 dark:hover:bg-sky-500 dark:hover:text-slate-800 rounded-lg hover:bg-slate-50 dark:border-slate-300
   md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 md:rounded-0 md:dark:hover:text-sky-500 md:dark:hover:bg-transparent md:font-semibold`

   const activeLinkClass = `block py-2 mt-3 md:mt-0 pr-4 pl-3 text-slate-300 rounded-lg bg-sky-500 dark:border-slate-700
   md:border-0 md:p-0 md:dark:text-sky-500 font-bold md:rounded-0 md:bg-transparent md:text-sky-500`;

   const brandClass = (router.asPath === '/') ? ` ${open ? ' dark:text-slate-200 text-slate-900 md:dark:text-slate-300 ' : ' text-slate-100 md:dark:text-slate-300 ' } ` : 'dark:text-slate-100'

   return (
      <nav className={`px-4 md:px-0 py-4 mx-auto max-w-7xl relative z-50 border-b border-slate-300 dark:border-sky-900 ${open && 'bg-slate-200 dark:bg-slate-900 border-slate-300 dark:border-sky-900 rounded-b-lg'} transition-all duration-500 ease-in-out md:bg-transparent`}>
         <div className="container flex flex-wrap justify-between items-center">
            <Link href="/">
               <a className={brandClass + " flex flex-col"}>
                  <span className="text-lg font-bold whitespace-nowrap">Gustave TSOPMO</span>
                  <span className="text-md">Full-stack Developer</span>
               </a>
            </Link>
            <button onClick={() => setOpen(!open)} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600" aria-controls="mobile-menu-2" aria-expanded="false">
               <span className="sr-only">Open main menu</span>
               {open && (<svg className=" w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>)}
               {!open && (<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>)}
            </button>
            <div className={`${open ? '' : 'hidden'} w-full md:block md:w-auto`} id="mobile-menu">
               <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium transition-all duration-700 ease-in-out">
                  <li>
                     <Link href="/" >
                        <a className={router.asPath === "/" ? activeLinkClass : linkClass}>
                           Home
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/about">
                        <a className={router.asPath === "/about" ? activeLinkClass : linkClass}>
                           About
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/skills">
                        <a className={router.asPath === "/skills" ? activeLinkClass : linkClass}>
                           Skills
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/experience">
                        <a className={router.asPath === "/experience" ? activeLinkClass : linkClass}>
                           Experience
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/contact">
                        <a className={router.asPath === "/contact" ? activeLinkClass : linkClass}>
                           Contact
                        </a>
                     </Link>
                  </li>

                  <li>
                     <ThemeSwitcher />
                  </li>
                  {/* <Logout classes={linkClass} /> */}
               </ul>
            </div>
         </div>
      </nav>
   );
}

