import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioHeader from "../components/portfolio/header"
import PortfolioPerformance from "../components/portfolio/performance"
import InvestmentList from "../components/portfolio/investments"
import PortfolioOverview from "../components/portfolio/overview"
import PortfolioStructure from "../components/portfolio/structure"
import PortfolioCTA from "../components/portfolio/cta"
import { useStaticQuery, graphql } from "gatsby"

function getPortfolioId(inputs) {
  let portfolioId = 0
  if (inputs.investmentStrategy === "Klassisch") {
    switch (inputs.riskShare) {
      case 0:
        portfolioId = 0
        break
      case 20:
        portfolioId = 2
        break
      case 50:
        portfolioId = 4
        break
      case 80:
        portfolioId = 6
        break
      case 100:
        portfolioId = 8
        break
    }
  } else if (inputs.investmentStrategy === "Nachhaltig") {
    switch (inputs.riskShare) {
      case 0:
        portfolioId = 1
        break
      case 20:
        portfolioId = 3
        break
      case 50:
        portfolioId = 5
        break
      case 80:
        portfolioId = 7
        break
      case 100:
        portfolioId = 9
        break
    }
  }
  return portfolioId
}

function Portfolio({ location, data }) {
  const inputs = location.state || {
    investmentAmount: 10000,
    riskShare: 50,
    investmentStrategy: "Klassisch",
  }
  const portfolioId = getPortfolioId(inputs)
  const portfolio = data.allPortfoliosJson.nodes[portfolioId]

  return (
    <Layout>
      <SEO title="Ihr Musterportfolio" />
      <PortfolioHeader />
      <PortfolioOverview strategy={inputs} />
      <PortfolioPerformance />
      <InvestmentList />
      <PortfolioCTA />
    </Layout>
  )
}

export const query = graphql`
  query {
    allPortfoliosJson {
      nodes {
        id
        cost_yearly
        investment_strategy
        return_yearly
        risk_share
        risk_yearly
        fonds {
          cost_yearly
          id
          name
          return_yearly
          risk_yearly
          weight
        }
      }
    }
  }
`

export default Portfolio
