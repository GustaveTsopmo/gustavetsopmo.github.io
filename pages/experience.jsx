import React from "react";
import Layout from "../components/layouts/App";
import TitleSection from '../components/TitleSection'
import CardDivider from '../components/CardDivider'

export default function Experience() {

   const meta = {
      title: 'Experience'
   }

   const experience = [
      {
         title: "Web & Mobile Development",
         company: "Kalio.io",
         project: "Api design for an agricultural services platform.",
         tasks: '',
         year: "Since 01 2022",
         companyLink: "https://kalio.io",
         technologies: "UML, draw.io, NodeJs, ReactJs, Tailwindcss, React Native, MongoDB",
      },
      {
         title: "Web Development",
         company: "ALSHDOWS Technologies",
         project: "Setting up a web application for online Business Plan Generation.",
         tasks: 'Implement the different features for the inserting of the dynamic contents of the platform and configure the security accesses at the platform level.',
         year: "01-2022 To 02-2022",
         companyLink: "https://myobus.cm",
         technologies: "HTML5, CSS3, PHP, MySQL, Laravel, Bootstrap, Livewire, AlpineJs, jQuery",
      },
      {
         title: "Backend Web Development",
         company: "NEXUS AFRICA SOLUTIONS",
         project: "Realisation of an E-learning platform.",
         tasks: 'Implement APIs for the management of training, courses and access rights of the E-learning platform.',
         year: "10-2021 To 01-2022",
         companyLink: "http://mode.afrika-django.com",
         technologies: "Laravel, NodeJs",
      },
      {
         title: "Full Stack Web Developer",
         company: "FIGUIL Corporation",
         project: "Design and implementation of an event planning platform.",
         tasks: 'Design the API for event creation, then implement the interfaces to consume this API.',
         year: "06-2020 To 04-2021",
         companyLink: "https://planningbreez.com",
         technologies: "UML, HTML5, CSS, Tailwindcss, PHP, Laravel, MySQL, Vuejs, Laravel Livewire, SQL.",
      },
      {
         title: "Full Stack Web Developer",
         company: "General Stores",
         project: "Development of an E-commerce and Inventory Management web application.",
         tasks: 'The complete development of all the modules of the application to allow: the management and the sale of the products, the establishment of the invoices and the follow-up of the orders, the management of the accounting.',
         year: "10-2019 To 11-2020",
         companyLink: "https://general-stores.net",
         technologies: "UML, HTML5, CSS, Bootstrap, PHP, Laravel, MySQL, Vuejs, Laravel Livewire, SQL.",
      },
      {
         title: "Bachelor Degree",
         company: "Arica Institute Of Computer Sciences",
         year: "2019",
         companyLink: "https://upes.co.in",
         technologies: "",
      },
      {
         title: "Full Stack Web Developer",
         company: "Univers Binaire SARL",
         project: "Development of an E-commerce application.",
         tasks: 'The complete development of all the modules of the application to allow: the management and the sale of the products, the establishment of the invoices and the follow-up of the orders, the management of the accounting.',
         year: "06-2017 To 10-2017",
         companyLink: "https://gtk.universbinaire.com",
         technologies: "UML, HTML5, CSS, PHP, MySQL, Vuejs, SQL, Bootstrap.",
      },
   ]


   return (
      <>
         <Layout meta={meta}>
            <section className="mb-8 px-2 md:px-0">
               <TitleSection title="My Experience" />
               <div className="bg-stale-100 dark:bg-slate-900 -mt-4">
                  <div className="grid grid-cols-1 dark:bg-slate-900 max-w-2xl mx-auto pt-20">
                     {/* Experience card */}
                     {experience.map((exp, key) => (
                        <>
                           <ExperienceCard
                              key={key}
                              title={exp.title}
                              project={exp.project}
                              technologies={exp.technologies}
                              tasks={exp.tasks}
                              year={exp.year}
                              company={exp.company}
                              companyLink={exp.companyLink}
                           />
                           {key === experience.length - 1 ? null : (
                              <div className="divider-container flex flex-col items-center -mt-2">
                                 <div className="md:w-6 w-4 md:h-6 h-4 bg-sky-500 rounded-full relative z-10">
                                    <div className="md:w-6 w-4 md:h-6 h-4 bg-sky-500 rounded-full relative z-10 animate-ping"></div>
                                 </div>
                                 <div className="w-1 h-20 md:h-40 bg-slate-300 dark:bg-sky-900 rounded-full -mt-2"></div>
                              </div>
                           )}
                        </>
                     ))}
                  </div>
               </div>
            </section>
         </Layout>
      </>
   );
}

const ExperienceCard = (props) => {
   return (
      <div className="relative border border-slate-300 dark:border-sky-900 p-4 rounded-md shadow-xl bg-slate-100 dark:bg-slate-800 z-10">
         <h1 className="absolute -top-10 left-0 md:-top-10 text-3xl md:text-4xl text-slate-400 font-bold dark:text-slate-700">
            {props.year}
         </h1>
         <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
         <h1 className="text-lg md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{props.title}</h1>
         <a href={props.companyLink} className="text-slate-500 uppercase font-semibold">
            {props.company}
         </a>
         </div>
         <CardDivider />
         <div className="text-slate-600 dark:text-slate-400">
            {props.project && (<p className="mt-3">{props.project}</p>) }
            {props.tasks && (<p className="mt-3"><span className="font-bold">Tasks : </span>{props.tasks}</p>) }
            {props.technologies && (<p className="my-3"><span className="font-bold">Technologies : </span>{props.technologies}</p>) }
         </div>
      </div>
   );
};