import React from 'react'
import Layout from "../components/layouts/App";
import TitleSection from '../components/TitleSection'
import Skills from '../components/Skills'

export default function skills() {
  const meta = {
    title: "Skills"
  }
  return (
    <Layout meta={meta}>
        <Skills />
    </Layout>
  )
}
