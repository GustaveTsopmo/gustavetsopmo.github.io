import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { useTheme } from "next-themes";
import {
  MdOutlineEmail,
  MdOutlineCall,
  MdOutlineLocationOn
} from 'react-icons/md'
import Typewriter from 'typewriter-effect';
import ContentLoader, {Facebook} from 'react-content-loader'


// const styles = {
//   heroDark: {
//     backgroundImage: `url(/images/hero-bg-dark.png)`,
//     backgroundPosition: 'left',
//     bacgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover'
//   },
//   heroLight: {
//     backgroundImage: `url(/images/hero-bg-light.png)`,
//     backgroundPosition: 'left',
//     bacgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover'
//   },
// }

export default function Hero() {
  const { theme } = useTheme();
  const [heroImage, setHeroImage] = useState();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div className={`px-4 md:px-0 text-white py-4 pt-20 bg-whit md:pt-24 mb-8 -mx-2 md:-mx-[7.5rem] -my-[7.8rem] bg-cover bg-center bg-no-repeat bg-[url('/images/hero-bg-light.png')] dark:bg-[url('/images/hero-bg-dark.png')]`} >
          {/* style={theme === 'dark' ? styles.heroDark : styles.heroLight} */}
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row md:my-8'>
            <div className='flex flex-col w-full lg:w-2/5 py-8 justify-center'>
              <p className='text-2xl md:text-4xl font-bold my-8 uppercase leading-relaxed md:leading-snug dark:text-sky-500'>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Developer, Programmer, Designer')
                      .callFunction(() => {
                        console.log('String typed out!');
                      })
                      .pauseFor(2500)
                      .callFunction(() => {
                        console.log('All strings were deleted');
                      })
                      .start();
                  }}
                />
              </p>
              <p className='mb-4 text-justify md:text-left'>
                I am a passionate developer. I have been developing websites and applications for 5 years.
                I am more than willing to put my skills and knowledge at the service of any person
                or company wishing to immerse and excel in the field of computer science.
              </p>
              <div>
                <p className='font-sans flex items-center text-sm md:text-lg my-2 md:my-2'>
                  <MdOutlineEmail className='mr-2 text-slate-200 dark:text-sky-500' />
                  gustavetsopmo.gt@gmail.com
                </p>
                <p className='font-sans flex items-center text-sm md:text-lg my-2 md:my-2'>
                  <FaGithub className='mr-2 text-slate-200 dark:text-sky-500' />
                  @gustavetsopmo
                </p>
                <p className='font-sans flex items-center text-sm md:text-lg my-2 md:my-2'>
                  <MdOutlineCall className='mr-2 text-slate-200 dark:text-sky-500' />
                  +237 695725725
                </p>
                <p className='font-sans flex items-center text-sm md:text-lg my-2 md:my-2'>
                  <MdOutlineLocationOn className='mr-2 text-slate-200 dark:text-sky-500' />
                  Cameroon, Yaounde, Awae.
                </p>
              </div>
            </div>
            <div className='flex flex-col lg:w-3/5 justify-center w-full -mt-12'>
              <div className='container'>
                <div className='relative flex flex-col justify-end min-w-0 break-words w-full'>
                  <div className='flex-auto h-80 md:h-[30rem] p-5 pb-0 lg:p-10 lg:pb-0 relative'>
                    <Image
                      className='object-contain'
                      layout='fill'
                      src='/images/gustave-tsopmo.png'
                      alt='Gustave TSOPMO'
                      placeholder='blur'
                      blurDataURL="/images/gustave-tsopmo.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
    </>
  )
}
