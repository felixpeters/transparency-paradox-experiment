import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/home/hero"
import Feature from "../components/home/feature"
import Stats from "../components/home/stats"
import CTA from "../components/home/cta"
import { useMixpanel } from "gatsby-plugin-mixpanel"

export default function Home({ location }) {
  const mixpanel = useMixpanel()
  const params = new URLSearchParams(location.search)
  const pid =
    params.get("pid") ||
    (location.state ? location.state.pid : null) ||
    "anonymous"
  const tic =
    params.get("tic") ||
    (location.state ? location.state.tic : null) ||
    "anonymous"
  mixpanel.identify(pid)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero tic={tic} />
      <Feature />
      <Stats />
      <CTA tic={tic} />
    </Layout>
  )
}
