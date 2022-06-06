import React from 'react'

export default function TitleSection(props) {
   return (
      <div className="inline-block bg-sky-500 bg-opacity-80 rounded-r-full my-14 md:my-28 pr-4 md:pr-36 -ml-4 md:-mx-[8rem] md:pl-[7rem]">
         <div className="inline-block tranform bg-opacity-95 translate-x-3 -translate-y-1 md:h-28 pr-4 -ml-4 md:-mx-[8rem] pl-4 md:pl-[7rem] bg-slate-100 shadow-xl rounded-r-full dark:bg-slate-800">
            <h1 className="text-5xl md:text-9xl font-bold text-slate-500 dark:text-slate-200">
               {props.title}
            </h1>
         </div>
      </div>
   );
}
