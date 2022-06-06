import React, { useState, useEffect } from "react"
import Dashboard from '../../components/layouts/Dashboard'
import { getSession, signIn, useSession } from "next-auth/react"

export default function SocialIcons() {
   const meta = {
      title: 'SocialIcons'
   }

   return (
      <>
         <Dashboard meta={meta}>
            <div className="p-4">Dashboard</div>
         </Dashboard>
      </>
   )
}
