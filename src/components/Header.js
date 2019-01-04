import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  grid-area: h;
  border: 1px dashed black;
`

const TitleDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between
`

const TitleAndDescription = ({ data }) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description

    return (
      <TitleDescriptionContainer>
        <h2>{title}</h2>
        <p>{description}</p>
      </TitleDescriptionContainer>
    )
  }

const Header = () => {
  return (
    <HeaderContainer>
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={data => <TitleAndDescription data={data} />}
      />
    </HeaderContainer>
  )
}

export default Header
