import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function ContainerBlock(props) {
   const router = useRouter();
   const customMeta = props.meta

   const meta = {
      title: ` ${customMeta?.title ? customMeta.title + ' - ' : ''} Full-stack Developer Web And Mobile.`,
      description: `I am a passionate developer. I have been developing websites and web applications for 5 years.`,
      image: "/images/gustave-tsopmo-portrait.png",
      type: "website",
      customMeta,
   };
   return (
      <div>
         <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={meta.description} name="description" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta
               property="og:url"
               content={`https://gustavetsopmo.vercel.app${router.asPath}`}
            />
            <link
               rel="canonical"
               href={`https://gustavetsopmo.vercel.app${router.asPath}`}
            />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content="Gustave TSOPMO" />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@gustavetsopmo" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
            {meta.date && (
               <meta property="article:published_time" content={meta.date} />
            )}
         </Head>
         <main className="dark:bg-slate-900 bg-white w-full min-h-screen dark:text-slate-100">
            <Navbar />
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-0 py-4 flex-grow">{props.children}</div>
            <Footer />
         </main>
      </div>
   );
}