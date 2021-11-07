import { createGlobalStyle } from "styled-components";
import Head from "next/head";

import theme from "utils/theme";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    width: 375px;
    background: ${theme.white};
    font-family: "SourceSansPro";
    font-style: normal;
    letter-spacing: 0.15px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  #__next {
    position: relative;
    overflow: hidden;
  }

  h1 {
    font-family: "SourceSansProBold";
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: 0.1px;
    color: ${theme.dark};
    padding-bottom: 8px;
    margin: 0;
  }

  h2 {
    font-family: "SourceSansProSemi";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.1px;
    color: ${theme.dark};
    margin: 0;
  }

  @font-face {
    font-family: "SourceSansPro";
    src: url("fonts/SourceSansPro-Regular.ttf")
        format("truetype"),
      url("fonts/SourceSansPro-Regular.woff")
        format("woff"),
      url("fonts/SourceSansPro-Regular.woff2")
        format("woff2");
  }

@font-face {
  font-family: "SourceSansProBold";
  src: url("fonts/SourceSansPro-Bold.ttf")
      format("truetype"),
    url("fonts/SourceSansPro-Bold.woff")
      format("woff"),
    url("fonts/SourceSansPro-Bold.woff2")
      format("woff2");
}

@font-face {
  font-family: "SourceSansProSemi";
  src: url("fonts/SourceSansPro-SemiBold.ttf")
      format("truetype"),
    url("fonts/SourceSansPro-SemiBold.woff")
      format("woff"),
    url("fonts/SourceSansPro-SemiBold.woff2")
      format("woff2");
}
`;

const Container = ({ children }: { children: any }) => {
  return (
    <>
      <Head>
        <title>Valk Digital</title>
      </Head>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Container;
