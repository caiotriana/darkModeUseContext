import React from 'react';

import ContextWrapper from "./components/ContextWrapper";
import Layout from "./components/Layout";
import DarkModeSwitch from './components/DarkModeSwitch'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin : 0;
    padding : 0;
  }
`

export default () => (
  <>
  <GlobalStyle />
  <ContextWrapper>
    <Layout>
      <DarkModeSwitch />
      </Layout>
  </ContextWrapper>
  </>
);