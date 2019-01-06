import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProductPostTemplate = ({data}) => {
 const { markdownRemark } = data
 const title = markdownRemark.frontmatter.title
 const html = markdownRemark.html
 const image = markdownRemark.frontmatter.image.childImageSharp.fixed

 console.log(markdownRemark);
  return (
    <div>
      <Img fixed={image}/>
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
        image {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
  `
export default ProductPostTemplate
