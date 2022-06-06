import React from 'react'

export default function PageHeader(props) {
   return (
      <div>
         <h1 className="text-slate-700 dark:text-slate-300 text-3xl font-semibold">{props.title}</h1>
         <div className="mt-3">
            {props.children}
         </div>
      </div>
   )
}
