import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li>
            <article>
              <Link to={node.fields.slug}>
                {" "}
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <p>{node.excerpt}</p>
            </article>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
