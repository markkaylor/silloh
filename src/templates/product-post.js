import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

const ProductPostTemplate = ({data}) => {
 const { markdownRemark } = data
 const title = markdownRemark.frontmatter.title
 const html = markdownRemark.html

  return (
    <div>
      <h1>{title}</h1>
      <Img fixed={data.file.childImageSharp.size} />
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
    file(relativePath: { eq: "../../static/assets/casual-buzz.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
      }
    }
  }
  `
export default ProductPostTemplate
