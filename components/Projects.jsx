import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image';
import { MdOutlineEast } from "react-icons/md"
import TitleSection from "./TitleSection"
import CardDivider from './CardDivider'
import ContentLoader, { Facebook } from 'react-content-loader'

export default function Projects() {

   const projects = [
      {
         title: "Planning breez",
         description: "Event planning platform. With which you can plan an event very easily and quickly.",
         url: "https://planning-breez.com",
         image: "/images/planning-breez.png",
         technologies: "Laravel, Bootstrap, VueJs."
      },
      {
         title: "Figuil Corporation",
         description: "Presentation site of the services of the company Figuil Corporation. ",
         url: "https://figuil.com",
         image: "/images/figuil-corporation.png",
         technologies: "Laravel, VueJs, IniertiaJs, Tailwindcss"
      },
      {
         title: "MyOBus",
         description: "Online business plan generation. Allows companies to generate online business plans with very easily.",
         url: "https://myobus.cm",
         image: "/images/myobus.png",
         technologies: "Laravel, Livewire, Bootstrap, Alpinejs."
      },
      {
         title: "General Stores",
         description: "Site of sale of online. With modules of management of sale locally, establishment of invoices and management of stock.",
         url: "https://general-stores.net",
         image: "/images/general-stores.png",
         technologies: "Laravel, Livewire, AlpineJs, Tainwindcss"
      },
      {
         title: "My portfolio",
         description: "Application to present my profile. My services, my skills, contacts and resume.",
         url: "/",
         image: '/images/portfolio.png',
         technologies: "ReactJs, NodeJs, Tailwindcss."
      },
   ];

   const projectList = projects.map((project, key) => (
      <ProjectCard
         key={key}
         title={project.title}
         description={project.description}
         technologies={project.technologies}
         url={project.url}
         image={project.image}
      />
   ))

   return (
      <div className="py-8 px-2 md:px-0">
         <TitleSection title="My projects" />
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-3 gap-10">
            {projectList}
         </div>
      </div>
   );
}

const ProjectCard = ({ title, description, technologies, url, image }) => {
   return (
      <div className="w-full bg-slate-100 rounded-lg border border-slate-300 shadow-md dark:bg-slate-800 dark:border-sky-900">
         {image && (
            <div className="overflow-hidden rounded-t-lg">
               <a href={url} target="blank">
                  <div className="h-48 rounded-t-lg bg-cover bg-no-repeat relative transform hover:scale-125 transition duration-1000 ease-in-out">
                     {/* style={{ backgroundImage: `url(${image})` }} */}
                     <Image 
                        alt="title"
                        src={image}
                        layout='fill'
                        placeholder="blur"
                        blurDataURL={image}
                        loading="lazy"
                     />
                     <div className="bg-slate-800 absolute inset-0 rounded-t-lg bg-opacity-40"></div>
                  </div>
               </a>
            </div>
         )}
         <div className="p-4">
            <a href={url} target="blank">
               <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h5>
            </a>
            <CardDivider />
            <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">{description}</p>
            <p className="mb-3 font-normal text-slate-700 dark:text-slate-400"><span className="font-semibold">Made with:</span> {technologies}</p>
            <a href={url} target="blank" className="inline-flex items-center visited:text-sky-800 text-sm font-medium text-center text-sky-500 hover:text-sky-700 dark:text-sky-500 dark:hover:text-sky-700">
               Consult
               <MdOutlineEast className="ml-2" />
            </a>
         </div>
      </div>
   )
}