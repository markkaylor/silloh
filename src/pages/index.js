import React from "react";

import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 50px;
  padding: 1.25rem 8rem;
`

const Card = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  &:hover {
    cursor: pointer;
  }
`

const CardImage = styled.div`
  img {
    border-radius: 6px 6px 0px 0px;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }

`

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 20px 20px;

  h2 {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 0px;
  }

  h3 {
    margin-top: 0px;
  }
`

const Button = styled(Link)`
  color: white;
  background-color: #4b6b9ec9;
  width: 120px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding: 8px 2px;
  text-decoration: none;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
  border-radius: 3px;
`

const ProductIndex = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
    <CardContainer>
     {edges.map(edge => {
        const {frontmatter} = edge.node
        return (
            <Card>
              <CardImage>
                <Img fluid={frontmatter.image.childImageSharp.fluid}/>
              </CardImage>
              <CardContent key={frontmatter.path}>
                <div>
                  <h2>Cuttin{frontmatter.title}d</h2>
                  <h3>$200.00</h3>
                </div>
                <Button to={frontmatter.path}>
                  Take a Look!
                </Button>
              </CardContent>
            </Card>

        )
      })}
     </CardContainer>
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

export default ProductIndex
