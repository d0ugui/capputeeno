import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  a {
    text-decoration: none;
  }
`;
