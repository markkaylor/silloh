import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'
import BuyButton from '../components/BuyButton'

const ProductDetailsCard = styled.div`
  width: 1000px;
  border-radius: 6px;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-gap: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CardImage = styled.div`
box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  img {
    border-radius: 6px;
    
  }

`

const ProductPostTemplate = ({data}) => {
 const { markdownRemark } = data
 const title = markdownRemark.frontmatter.title
 const html = markdownRemark.html
 const image = markdownRemark.frontmatter.image.childImageSharp.fluid
 const siteTitle = data.site.siteMetadata.title
 const siteDescription = data.site.siteMetadata.description

  return (
    <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: siteDescription }]}
      title={siteTitle}
      link={[{
        href:"https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css",
        rel:"stylesheet",
        type:"text/css" 
      }]}
      script={[{ 
        type: 'text/javascript', 
        url:"",
        id: "snipcart",
        "data-api-key": "MjVjOWVjYmQtY2JmZS00MDA3LTg0ODItNGNjMDBmMjlhOTZhNjM2ODI4MzQ4MzA2OTU4NTA0",
        src:"https://cdn.snipcart.com/scripts/2.0/snipcart.js" 
      },{
        type: 'text/javascript',
        src:"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"
    }]} />
      <ProductDetailsCard>
        <CardImage>
          <Img fluid={image}/>
        </CardImage>
        <CardContent>
          <h1>{title}</h1>
          <div
            dangerouslySetInnerHTML={{__html: html}}
          />
          <BuyButton post={markdownRemark.frontmatter} />
        </CardContent>
        
      </ProductDetailsCard>
    </Layout>
  )
}

export const productPageQuery = graphql`
  query($pathSlug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { path: { eq: $pathSlug} }) {
      html
      frontmatter {
        title
        id
        price
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
