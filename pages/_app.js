import React from 'react';
import GlobalStyle from '../src/globalStyle';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
