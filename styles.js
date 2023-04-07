import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 10%;
    font-family: system-ui;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
