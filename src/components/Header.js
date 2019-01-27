import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import logo from '../assets/logo.jpg'
import { Link } from 'gatsby'


const HeaderContainer = styled.div`
  grid-area: h;
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #B3B3B3;
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
    height: 90px;
  }
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`

const TitleAndDescription = ({ data }) => {
    return (
      <LogoContent>
        <Link to='/'><img src={logo} alt="Logo"/></Link>
        <Links>
          <HeaderLink to='/'>Home</HeaderLink>
          <HeaderLink>Shop</HeaderLink>
          <HeaderLink>Gallery</HeaderLink>
          <HeaderLink>About</HeaderLink>
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
