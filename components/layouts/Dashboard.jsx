import React, { useState } from "react"
import Sidebar from '../dashboard/Sidebar'
import Header from '../dashboard/Header'
import Head from 'next/head'
import Image from "next/image"

export default function DashboardLayout(props) {
   const [siedebarOpen, setSidebarOpen] = useState(false)

   const customMeta = props.meta

   const meta = {
      title: `${customMeta?.title ? customMeta.title + ' - ' : ''} Dashboard | Gustave TSOPMO Full-stack Developer`,
      description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
      image: "/avatar.png",
      type: "website",
      customMeta,
   };

   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
           <title>{meta.title}</title>
         </Head>
         <div>
            <div className="flex h-screen bg-slate-200">
               <div onClick={() => setSidebarOpen(false)} className={` ${siedebarOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`}></div>

               <div className={` ${siedebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-white dark:bg-slate-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0`}>
                  <div className="flex items-center justify-start pl-4 mt-8">
                     <div className="flex items-center">
                        <span className="text-sky-500 text-2xl mx-2 font-bold">Dashboard</span>
                     </div>
                  </div>

                  <Sidebar />
               </div>
               <div className="flex-1 flex flex-col overflow-hidden">
                  <Header>
                     <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                        </svg>
                     </button>
                  </Header>
                  <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-200 dark:bg-slate-800">
                     <div className="container mx-auto px-6 py-8">
                        {props.children}
                     </div>
                  </main>
               </div>
            </div>
         </div>
      </>
   );
}
