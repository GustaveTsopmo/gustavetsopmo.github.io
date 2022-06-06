import React from 'react'

export default function Table(props) {

   if (props.thead === undefined || (props.tbody !== undefined && (props.thead.length !== props.tbody.length))) {
      return (
         <div className="flex p-4 mb-4 my-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
            <div>
               <span className="font-bold">Oups!</span> Verify that you have filled in thead and tbody in the Table.
            </div>
         </div>
      )
   }

   const thClasses = `py-3 px-6 text-xs md:text-sm font-medium tracking-wider text-left text-slate-700 uppercase dark:text-slate-400 font-semibold`

   const theadItems =
      props.thead.map((item, key) =>
         <th key={key}
            className={thClasses} >
            {item}
         </th>
      )

   return (
      <div className="flex flex-col mt-8">
         <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-slate-200">
               <table className="min-w-full">
                  <thead className="bg-slate-50 dark:bg-slate-700">
                     <tr>
                        {theadItems}
                     </tr>
                  </thead>

                  <tbody>
                     {props.children}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}
