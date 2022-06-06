import React, { useState, useEffect } from "react"
import Dashboard from '../../components/layouts/Dashboard'

export default function Socials() {
   const meta = {
      title: 'Socials'
   }

   return (
      <>
         <Dashboard meta={meta}>
            <div className="p-4">Dashboard</div>
         </Dashboard>
      </>
   )
}
