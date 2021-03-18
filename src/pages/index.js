import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Feature from "../components/feature"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Feature />
    </Layout>
  )
}
