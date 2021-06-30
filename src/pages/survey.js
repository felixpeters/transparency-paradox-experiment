import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SurveyHeader from "../components/survey/header"
import SurveyForm from "../components/survey/form"

export default function Survey({ location }) {
  const tic = (location.state ? location.state.tic : null) || "anonymous"
  return (
    <Layout>
      <SEO title="Anlageassistent" />
      <SurveyHeader />
      <SurveyForm tic={tic} />
    </Layout>
  )
}
