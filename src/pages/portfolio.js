import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioHeader from "../components/portfolio/header"
import PortfolioPerformance from "../components/portfolio/performance"

export default function Survey() {
  return (
    <Layout>
      <SEO title="Musterportfolio" />
      <PortfolioHeader />
      <PortfolioPerformance />
    </Layout>
  )
}
