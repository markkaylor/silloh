import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/logo.jpg'

const HeaderContainer = styled.div`
  grid-area: h;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
  height: 150px;
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 1;
`

const LogoContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  img {
    height: 60px;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 155px;
`

const TitleAndDescription = ({ data }) => {
    return (
      <LogoContent>
        <img src={logo} alt="Logo"/>
        <Links>
          <div>Home</div>
          <div>About</div>
        </Links>
      </LogoContent>
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
