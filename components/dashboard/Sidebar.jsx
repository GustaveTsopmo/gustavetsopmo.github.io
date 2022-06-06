import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useRouter } from 'next/router'
import Link from 'next/link'


const Sidebar = (props) => {
   const router = useRouter()

   const classNames = `flex items-center mt-4 py-2 px-6 text-slate-500 
                       dark:text-slate-500 hover:text-slate-800 font-semibold 
                       hover:bg-sky-500 w-11/12 rounded-r-full
                       dark:hover:bg-slate-800 hover:bg-opacity-40 
                       dark:hover:text-slate-100 hover:font-bold`
   const activeClassNames = `flex items-center mt-4 py-2 px-6 bg-sky-500 w-11/12 rounded-r-full
                       text-slate-900 font-bold dark:bg-slate-800 bg-opacity-40 dark:text-slate-100`;

   return (
      <nav className="mt-10">
         <Link href="/admin">
            <a className={router.asPath === '/admin' ? activeClassNames : classNames}>
               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                     d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                     d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
               </svg>

               <span className="mx-3">Dashboard</span>
            </a>
         </Link>
         <Link href="/admin/projects">
            <a className={router.asPath === '/admin/projects' ? activeClassNames : classNames}>
               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                     d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                  </path>
               </svg>
               <span className="mx-3">Projects</span>
            </a>
         </Link>
         <Link href="/admin/socials">
            <a className={router.asPath === '/admin/socials' ? activeClassNames : classNames}>
               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                     d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                  </path>
               </svg>

               <span className="mx-3">Socials</span>
            </a>
         </Link>
         <Link href="/admin/social-icons">
            <a className={router.asPath === '/admin/social-icons' ? activeClassNames : classNames}>
               <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                     d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z">
                  </path>
               </svg>
               <span className="mx-3">Soaial icons</span>
            </a>
         </Link>
      </nav>
   )
}

export default Sidebar
