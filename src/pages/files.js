import React from "react"
import { graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const FilesPage = ({ data, location }) => {
  const siteTitle = "Files"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Files" />
      <ul>
        {data.allFile.edges.map(({ node }) => (
          <li>{node.name}</li>
        ))}
      </ul>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allFile {
      edges {
        node {
          name
          sourceInstanceName
        }
      }
    }
  }
`
export default FilesPage
