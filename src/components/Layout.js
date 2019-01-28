import React from "react";
import Header from '../components/Header';

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

const Main = styled.div`
  grid-area: m;
  margin-top: 80px;
  display: grid;
  place-items: center;
`



const Layout = ({ children, location }) => {

  return (
    <PageWrapper>
      <Header />
      <Main>
        {children}
      </Main>
    </PageWrapper>
  )

}

export default Layout
