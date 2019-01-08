import React from "react";

import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

import styled from 'styled-components'


const Card = styled.div`
  width: 400px;
  height: 250px;
  margin: 30px auto 0;
  background-color: white;
  border-radius: 6px
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  display: flex;

`

const CardImage = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardContent = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-left: 1px dashed grey;
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
`

const ProductIndex = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
     {edges.map(edge => {
        const {frontmatter} = edge.node
        return (
          <Card>
            <CardImage>
            <Img fixed={frontmatter.image.childImageSharp.fixed}/>
            </CardImage>
            <CardContent key={frontmatter.path}>
              <h2>Cuttin{frontmatter.title}d</h2>
              <h3>$200.00</h3>
              <Button to={frontmatter.path}>
                Take a Look!
              </Button>
            </CardContent>
          </Card>
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
                fixed(width: 400, height: 400) {
                  ...GatsbyImageSharpFixed
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
