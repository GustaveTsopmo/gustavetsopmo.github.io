import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

export default function Error404() {
   return (
      <>
         <Head>
            <title>404 - Not Found</title>
         </Head>
         <div className="flex items-center justify-center bg-slate-100 h-screen">
            <div className="h-96 w-96 relative bg-slate-100">
               <Image
                  layout="fill"
                  className="object-contain shadow"
                  src='/images/404.svg'
                  alt="404 Not Found"
               />
            </div>
         </div>
      </>
   )
}
