import React from "react";
import Header from '../components/Header';

import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import './Layout.css'

const Wrapper = styled.div`
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
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        {children}
      </Main>
    </Wrapper>
  )
}

export default Layout
