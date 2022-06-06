import Head from 'next/head'
import React from 'react'
import TitleSection from './TitleSection'
import { FaPhp } from "react-icons/fa";
import CardDivider from './CardDivider'

export default function Skills() {

  const skills = [
    {
      title: 'Back-end Development',
      description: `Api development with Nodejs.
                    Thanks to Php and its frameworks (Laravel, Symfoni), 
                    I can create dynamic websites, modular web applications and extraordinary APIs.`
    },
    {
      title: 'Ui Design',
      description: `Giving life, color to applications,
                    For better productivity, flexibility and maintainability,
                    I use modern frameworks such as Bootstrap and Tailwindcss css frameworks.`
    },
    {
      title: 'Graphic Design',
      description: `Design of Logo, Flyers, Business Card with Adobe Photoshop, Adobe Illustrator`
    },
    {
      title: 'Ux Design',
      
    },
    {
      title: 'Modélisation with UML',
      
    },
    {
      title: 'Collaborative work with Trello',
      
    },
    {
      title: 'Versionning with Git',
      
    },
    {
      title: 'Mobile developement',
      
    },
  ]

  const skillsList = skills.map((skill, key) => (
    <SkillCard key={key} title={skill.title} description={skill.description} />
  ))

  return (
    <>
      <Head>
        <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
      </Head>
      <div className="pt-8 px-2 md:px-0">
        <TitleSection title="My Skills" />
        <div>
          <section className="">
            <div className="mx-auto pb-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-3 gap-10">
                {skillsList}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}


const SkillCard = ({ title, description }) => (
  <div className="rounded bg-slate-100 shadow-md dark:bg-slate-800 p-4 border dark:border-sky-900">
    {/* <div className="pattern-dots-md grayLight"> */}
    <div className="flex-">
      <h2 className="text-lg mb-2 md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
     <CardDivider />
      <p className="leading-relaxed text-sm text-justify">
        {description}
      </p>
    </div>
    {/* </div> */}
  </div>
);