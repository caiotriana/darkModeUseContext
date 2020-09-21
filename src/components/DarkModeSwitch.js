import React from 'react';

import { useContext } from "react";
import { DarkModeContext } from "../hooks/DarkModeContext";

import styled from 'styled-components';



export default () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const Button = styled.button`
    background : transparent;
    border : none;
    padding : 16px 24px;
    color : ${darkMode ? '#fff' : '#000'};
    border : .8px solid ${darkMode ? '#fff' : '#000'};
    cursor : pointer;

    outline : none;
`;


  return (
    <Button onClick={toggleDarkMode}>
      Click for {darkMode ? "light mode" : "dark mode"}
    </Button>
  );
};