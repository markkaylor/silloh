import React from "react";
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'


const Card = styled.div`
  background-color: white;
  border-radius: 6px;
  // box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  &:hover {
    cursor: pointer;
  }
`

const CardImage = styled.div`
  img {
    border-radius: 6px;
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

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;

    h2 {
        font-size: 1rem;
      }

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

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`


const PostListing = ({ post }) => {
  return (
    <Card>
      <CardImage>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid}/>
      </CardImage>
      <CardContent key={post.frontmatter.path}>
        <div>
          <h2>Cutting {post.frontmatter.title}</h2>
          <h3>$200.00</h3>
        </div>
        <Button to={post.frontmatter.path}>
          Take a Look!
        </Button>
      </CardContent>
    </Card>

  )
}


export default PostListing
