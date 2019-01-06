import React from "react";

import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const ProductIndex = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
     {edges.map(edge => {
        const {frontmatter} = edge.node
        return (
          <div key={frontmatter.path}>
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query ProductIndexQuery {
    allMarkdownRemark (sort: {order: DESC, fields: [frontmatter___date]}){
      edges {
        node {
          frontmatter {
            title
            path
            image {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ProductIndex
