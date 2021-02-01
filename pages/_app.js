/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/order */
/* eslint-disable semi */
/* eslint-disable max-len */

// Este arquivo contém códigos/dados que vão estar presentes em todas as páginas - SETUP

import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import db from "../db.json"; // json disponível na variável
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

// Theme provide
export default function App({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <>
      <Head>
        <title>Tibia Quiz</title>
        <link rel="icon" type="imagem/png" href="https://www.tibiawiki.com.br/images/7/76/Tibia_icon.png" />
        <link rel="preconnect" href="https://fonts. gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?  family=Lato:ital,wght@0,100;0,300;0,400;0,700;  0,900;1,100;1,300;1,400;1,700;1,900&  display=swap" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
