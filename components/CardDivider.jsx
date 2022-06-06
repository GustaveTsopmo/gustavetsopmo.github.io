import React from 'react'

export default function CardDivider(props) {
   return (
      <div className={props.className}>
         <div className="mb-2 h-1 rounded-full bg-sky-500 w-1/3">
            {/* <div className="h-1 relative z-10 rounded-full bg-slate-100 w-full transform translate-y-1 -translate-x-[3px]"></div> */}
         </div>
      </div>
   )
}
