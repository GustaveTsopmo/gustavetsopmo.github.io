import Image from "next/image"
import React, { useState, useEffect } from "react"
import Dashboard from '../../components/layouts/Dashboard'
import PageHeader from "../../components/admin/PageHeader"
import Table from "../../components/admin/Table"
import { MdOutlineDelete, MdOutlineModeEdit } from "react-icons/md";

export default function Projects() {

   const meta = {
      title: 'Projects'
   }

   const tdClasses = `py-4 px-6 text-sm font-medium text-slate-900 whitespace-nowrap dark:text-white`
   const trClasses = `bg-white border-b dark:bg-slate-900 dark:border-slate-700`

   const thead = [
      'Title',
      'Description',
      'Technologies',
      'Actions'
   ]

   const tbody = [
      { title: "Project title", description: "Project description", technologies: "Project technos" },
      { title: "Project title 1", description: "Project description 1", technologies: "Project technos 2" },
      { title: "Project title 2", description: "Project description 2", technologies: "Project technos 2" },
   ]

   return (
      <>
         <Dashboard meta={meta}>
            <PageHeader title="Projects">
               <p>
                  List of products
               </p>
            </PageHeader>
            <Table thead={thead}>
               {tbody.map((item, key) =>
                  <tr className={trClasses} key={key}>
                     <td className={tdClasses}>{item.title}</td>
                     <td className={tdClasses}>{item.description}</td>
                     <td className={tdClasses}>{item.technologies}</td>
                     <td className={tdClasses}>
                        <button type="button" className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded text-sm px-2 py-2 text-center mr-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                           <MdOutlineDelete className="w-6 h-6" />
                        </button>
                        <button type="button" className="py-2 px-2 mr-2 mb-2 text-sm font-medium text-slate-900 bg-white rounded border border-slate-200 hover:bg-slate-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700">
                           <MdOutlineModeEdit className="w-6 h-6" />
                        </button>
                     </td>
                  </tr>
               )}
            </Table>
         </Dashboard>
      </>
   )
}
