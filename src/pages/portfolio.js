import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioHeader from "../components/portfolio/header"
import PortfolioPerformance from "../components/portfolio/performance"
import InvestmentList from "../components/portfolio/investments"
import PortfolioOverview from "../components/portfolio/overview"
import PortfolioStructure from "../components/portfolio/structure"

export default function Survey() {
  return (
    <Layout>
      <SEO title="Musterportfolio" />
      <PortfolioHeader />
      <PortfolioOverview />
      <PortfolioStructure />
      <PortfolioPerformance />
      <InvestmentList />
    </Layout>
  )
}
