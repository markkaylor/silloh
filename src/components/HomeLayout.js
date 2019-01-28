import React from "react";
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';

import './Layout.css'

import styled from 'styled-components'

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 70px auto 70px;
  grid-template-areas:
    'h h h h h h h h h h h h'
    'b b b b b b b b b b b b'
    '. m m m m m m m m m m .'
`

const Main = styled.div`
  grid-area: m;
  margin-top: 80px;
  display: grid;
  place-items: center;
`

const HomeLayout = ({ children, location }) => {
  return (
    <HomeWrapper>
      <Header />
      <HomeBanner />
      <Main location={location}>
        {children}
      </Main>
    </HomeWrapper>
  )
}

export default HomeLayout

