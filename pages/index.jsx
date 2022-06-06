import Head from "next/head";
import Layout from "../components/layouts/App";
import { useState } from 'react'
// import dynamic from 'next/dynamic'
// dynamic(() => import('flowbite'), { ssr: false })
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

export default function Home() {

  return (
    <>
      <Layout
        title="Gustave TSOPMO Développeur Full-stack"
        description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
      >
        <Hero />
        <Projects />
        {/* <Skills /> */}
      </Layout>
    </>
  );
}