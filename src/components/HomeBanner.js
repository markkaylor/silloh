import React from "react";
import bg from '../assets/bg.jpg'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Banner = styled.div`
  background-image: linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url(${bg});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-size: cover !important;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: b;
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

const Button = styled(Link)`
  color: white;
  background-color: #4b6b9ec9;
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  padding: 12px 4px;
  text-decoration: none;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
  border-radius: 3px;
  font-weight: bold;
`

const HomeBanner = () => {
  return (
    <Banner>
      <BannerContent>
        <h1>Hollis House</h1>
        <Button>Check Out The Shop!</Button>
      </BannerContent>
    </Banner>
  )
}

export default HomeBanner

