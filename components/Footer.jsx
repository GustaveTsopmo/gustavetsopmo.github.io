import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosHeart } from "react-icons/io";


export default function Footer() {
   const router = useRouter();

   const linkClass = " text-sm text-slate-500 hover:underline dark:text-slate-400 font-semibold"
   const activeLinkClass = " text-sm text-sky-500 hover:underline dark:text-sky-500 font-bold"

   return (
      <footer className="px-4 py-4 md:px-0 md:py-8 md:bg-transparent max-w-7xl mx-auto border-t border-slate-300 dark:border-sky-900">
         <div className="flex flex-col md:flex-row items-center justify-between">
            <Link passHref href="/" target="_blank" className="flex items-center mb-4 sm:mb-0">
               <span className="self-center text- font-medium whitespace-nowrap dark:text-white">&copy; Gustave TSOPMO. All rights reserved.</span>
            </Link>
            <span>
               Designed by Gustave TSOPMO
            </span>
            {/* <ul className="flex flex-wrap items-center mb-6 sm:mb-0 space-x-4 md:space-x-6">
               <li>
                  <Link href="/experience">
                     <a className={router.asPath === "/experience" ? activeLinkClass : linkClass}>
                        Expérience
                     </a>
                  </Link>
               </li>
            </ul> */}
         </div>
      </footer>

   );
}