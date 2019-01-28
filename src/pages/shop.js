import React from "react";
import Layout from '../components/Layout'
import PostListing from '../components/PostListing'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 50px;

  /*For Small*/
  @media screen and (max-width: 39.9375em) {
    grid-template-columns: 100%;
    padding: 0;
  }
`

const ProductIndex = ({data, location}) => {

  return (
    <Layout>
      <CardContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostListing post={node} />
        ))}
        </CardContainer>
      </Layout>
    )
}

export default ProductIndex

export const query = graphql`
  query ShopQuery {
    allMarkdownRemark (sort: {order: DESC, fields: [frontmatter___date]}){
      edges {
        node {
          frontmatter {
            title
            path
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
    }
  }
`

