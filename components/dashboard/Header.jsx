import React, { useState } from 'react'
import Logout from '../Logout';
import ThemeSwitcher from '../ThemeSwitcher'


const Header = (props) => {

   return (
      <header className="flex justify-between items-center py-4 px-6 bg-white dark:bg-slate-900 border-b-2 border-sky-500">
         <div className="flex items-center">
            {props.children}
         </div>

         <div className="flex items-center">
            <Logout classes="" />
            <ThemeSwitcher />
         </div>
      </header>
   )
}

export default Header
