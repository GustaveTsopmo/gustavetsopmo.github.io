import React from "react";
import Layout from "../components/layouts/App";
import TitleSection from "../components/TitleSection";
import Image from 'next/image'
import CardDivider from "../components/CardDivider";

export default function Training() {

   const techs = [
      { name: 'html5', image: '/images/techs/html.png' },
      { name: 'css', image: '/images/techs/css.png' },
      { name: 'javascript', image: '/images/techs/javascript.png' },
      { name: 'typescript', image: '/images/techs/typescript.png' },
      { name: 'react', image: '/images/techs/react.png' },
      { name: 'vue', image: '/images/techs/vue.png' },
      { name: 'laravel', image: '/images/techs/nodejs.png' },
      { name: 'nodejs', image: '/images/techs/laravel.png' },
      { name: 'mongodb', image: '/images/techs/mongodb.png' },
      { name: 'mysql', image: '/images/techs/mysql.png' },
   ]

   const techsList = techs.map((tech) => (
      <TechCard name={tech.name} image={tech.image} key={tech.name} />
   ))

   const meta = {
      title: "About"
   }
   return (
      <Layout meta={meta}>
         <div className="px-2 md:px-4 lg:px-0 mb-10 md:mb-20">
            <TitleSection title="About Me." />
            <div className="flex flex-wrap sm:justify-center">
               <div className="w-full sm:w-3/5 sm:h-[24rem] md:w-2/5 relative h-[20rem] md md:h-[32rem]">
                  <div className="absolute h-18 md:h-28 w-18 md:w-28  top-12 left-3 rounded-sm bg-sky-500 bg-opacity-80 z-20 text-slate-800 dark:text-slate-200">
                     <div className="h-18 md:h-28 w-18 md:w-28 p-2 top-12 transition rounded-sm -translate-x-3 bg-opacity-90 -translate-y-3 right-2 bg-slate-100 dark:bg-slate-800 z-20 flex flex-col items-center justify-center">
                        <h3 className="text-2xl md:text-4xl font-bold mb-3">5</h3>
                        <p className="text-center font-bold uppercase text-xs md:text-sm">Year Of<br />Experienced</p>
                     </div>
                  </div>
                  <Image
                     layout="fill"
                     className="object-contain object-right shadow-lg rounded-sm"
                     src="/images/gustave-tsopmo-portrait.png"
                     placeholder="blur"
                     blurDataURL="/images/gustave-tsopmo-portrait.png"
                     alt="portrait" />
               </div>
               <div className="w-full md:w-3/5 md:pl-8 md:pr-0 mt-20 md:my-0">
                  <div className=" flex flex-col justify-center mb-14">
                     {/* <h1 className="text-4xl md:text-6xl font-bold md:text-left mb-3 text-slate-900 dark:text-slate-100">I am the king.</h1> */}
                     {/* <CardDivider className="flex items-center mb-4" /> */}
                     <p className="text-justify ">
                        {`
                           I'm a software developer that loves building products and web applications that impact millions of lives.
                        `}
                     </p>
                  </div>
                  <div className=" flex flex-col justify-center mb-14">
                     <h1 className="text-4xl md:text-6xl font-bold md:text-left mb-3 text-slate-900 dark:text-slate-100">My de story.</h1>
                     <CardDivider className="flex items-center mb-4" />
                     <p className="text-justify ">
                        {`
                           After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap and Tailwindcss so that I don't have to style everything by myself.
                        `}
                     </p>
                     <p className="text-justify mt-3">
                        {`
                        But now, I'm a legend. I've been coding in React, Vue, Node.js, Express, Next.js
                        MongoDB, MySQL, Bootstrap, Tailwindcss, Laravel.
                        `}
                     </p>
                  </div>
                  <div className=" flex flex-col justify-center mb-14">
                     <h1 className="text-4xl md:text-6xl font-bold md:text-left mb-3 text-slate-900 dark:text-slate-100">Tech Stack</h1>
                     <CardDivider className="flex items-center mb-4" />
                     <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-8 xl:grid-cols-10 gap-4">
                        {techsList}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Layout>

   );
}

const TechCard = (props) => (
   <div className="relative border dark:border-0 bg-white shadow h-14">
      <Image
         alt={props.name}
         src={props.image}
         placeholder="blur"
         layout='fill'
         className="object-contain"
         blurDataURL={props.image}
      />
   </div>
)