import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Feature from "../components/feature"
import Stats from "../components/stats"
import CTA from "../components/cta"

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
