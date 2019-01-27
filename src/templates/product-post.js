import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'

const ProductDetailsCard = styled.div`
  width: 1000px;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-gap: 20px;
  margin-top: 20px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`


const CardContent = styled.div`


`

const CardImage = styled.div`
box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  img {
    border-radius: 6px 0px 0px 6px;

  }

`

const ProductPostTemplate = ({data}) => {
 const { markdownRemark } = data
 const title = markdownRemark.frontmatter.title
 const html = markdownRemark.html
 const image = markdownRemark.frontmatter.image.childImageSharp.fluid

  return (
    <Layout>
      <ProductDetailsCard>
        <CardImage>
          <Img fluid={image}/>
        </CardImage>
        <CardContent>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{__html: html}}
        />
        </CardContent>
      </ProductDetailsCard>
    </Layout>
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
            fluid(maxWidth: 630){
                  ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `
export default ProductPostTemplate
