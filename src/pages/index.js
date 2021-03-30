import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import Feature from "../components/home/feature"
import Stats from "../components/home/stats"
import CTA from "../components/home/cta"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Feature />
      <Stats />
      <CTA />
    </Layout>
  )
}
