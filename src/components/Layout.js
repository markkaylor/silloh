import React from "react";
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import { Link } from 'gatsby'

import './Layout.css'

import styled from 'styled-components'



const PageWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 70px auto 70px;
  grid-template-areas:
    'h h h h h h h h h h h h'
    '. m m m m m m m m m m .'
    '. m m m m m m m m m m .'
`

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



const Layout = ({ children }) => {
  if (window.location.pathname.length <= 1) {
    console.log('a')
    return (
      <HomeWrapper>
        <Header />
        <HomeBanner />
        <Main>
          {children}
        </Main>
      </HomeWrapper>
    )

  } else {
    console.log('b')
    return (
      <PageWrapper>
          <Header />
          <Main>
            {children}
          </Main>
        </PageWrapper>
      )
  }



}

export default Layout
