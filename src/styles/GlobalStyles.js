import { css } from '@emotion/react';

import eotRegular from '../fonts/Poppins-Regular.eot';
import eotMedium from '../fonts/Poppins-Medium.eot';
import eotSemiBold from '../fonts/Poppins-SemiBold.eot';
import woff2Regular from '../fonts/Poppins-Regular.woff2';
import woff2Medium from '../fonts/Poppins-Medium.woff2';
import woff2SemiBold from '../fonts/Poppins-SemiBold.woff2';
import woffRegular from '../fonts/Poppins-Regular.woff';
import woffMedium from '../fonts/Poppins-Medium.woff';
import woffSemiBold from '../fonts/Poppins-SemiBold.woff';
import svgRegular from '../fonts/Poppins-Regular.svg';
import svgMedium from '../fonts/Poppins-Medium.svg';
import svgSemiBold from '../fonts/Poppins-SemiBold.svg';
import ttfRegular from '../fonts/Poppins-Regular.ttf';
import ttfMedium from '../fonts/Poppins-Medium.ttf';
import ttfSemiBold from '../fonts/Poppins-SemiBold.ttf';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: normal;
    src: url('${eotRegular}');
    src: url('${eotRegular}?#iefix') format('embedded-opentype'),
      url('${woff2Regular}') format('woff2'),
      url('${woffRegular}') format('woff'),
      url('${ttfRegular}') format('truetype'),
      url('${svgRegular}#Poppins-Regular') format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 500;
    font-style: normal;
    src: url('${eotMedium}');
    src: url('${eotMedium}?#iefix') format('embedded-opentype'),
      url('${woff2Medium}') format('woff2'), url('${woffMedium}') format('woff'),
      url('${ttfMedium}') format('truetype'),
      url('${svgMedium}#Poppins-Medium') format('svg');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 600;
    font-style: normal;
    src: url('${eotSemiBold}');
    src: url('${eotSemiBold}?#iefix') format('embedded-opentype'),
      url('${woff2SemiBold}') format('woff2'),
      url('${woffSemiBold}') format('woff'),
      url('${ttfSemiBold}') format('truetype'),
      url('${svgSemiBold}#Poppins-SemiBold') format('svg');
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    width: 100vw;
  }

  body {
    width: 100vw;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;

    font-style: normal;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
