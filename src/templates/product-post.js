import React from 'react'
import { graphql } from 'gatsby'

const ProductPostTemplate = ({data}) => {
 const { markdownRemark } = data
 const title = markdownRemark.frontmatter.title
 const html = markdownRemark.html

  return (
    <div>
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{__html: html}}
      />

    </div>
  )
}

export const productPageQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
  `
export default ProductPostTemplate