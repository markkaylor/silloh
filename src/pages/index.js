import React from "react";

import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

import styled from 'styled-components'

import bg from '../assets/bg.jpg'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  padding: 1.25rem 8rem;
`

const Card = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    &:hover {
      cursor: pointer;
    }
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

const Banner = styled.div`
  background-image: linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url(${bg});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  height: calc(100vh - 150px);
  background-size: cover !important;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    font-weight: bold;
    text-shadow: 0px 1px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 25px;
    font-weight: lighter;
    color: rgb(255, 255, 255);
    opacity: 0.6;
    margin-bottom: 30px;
  }

`

const ProductIndex = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
    <Banner>
    <BannerContent>
        <h1>Hollis House</h1>
        <p>Woodworking & Design</p>
        <Button>See Our Work</Button>
      </BannerContent>
    </Banner>
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
                  <h2>Cutting {frontmatter.title}d</h2>
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
