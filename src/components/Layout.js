import React from 'react';

import { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../hooks/DarkModeContext';

const Layout = styled.div`
    height : 100vh;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color: ${props => (
        props.darkMode ? "black" : "white"
    )};
    color: ${props => props.darkMode ? "white" : "black"};
`

export default props => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Layout darkMode={darkMode}>
        {props.children}
    </Layout>
)}