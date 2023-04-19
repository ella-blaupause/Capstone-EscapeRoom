import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --my-beige: #f5f0e1;
    --my-blue: #1e3d59;
    --my-yellow: #ffc13b;
    --my-orange: #ff6e40;
  }

  body {
    margin: 0;
    font-family: 'Comic Sans MS', sans-serif;
    background-color: var(--my-beige);
  }

 
`;
