import { createGlobalStyle } from "styled-components";
import { Montserrat } from "@next/font/google";
import useGlobalStore from "./store";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const lightTheme = {
  background: "var(--my-beige)",
};

const darkTheme = {
  background: "var(--dark-background)",
};

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    //My colors
    --my-beige: #f5f0e1;
    --my-blue: #1e3d59;
    --my-yellow: #ffc13b;
    --my-orange: #ff6e40;

    //Font styles 
    --font-family: ${montserrat.style.fontFamily};

    //My dafk mode
    --dark-background: #5c769c;
    --dark-bar: #172e4f;
    --dark-font-color: #d5d5d5;
    --dark-highlight-color: #ffa07a;
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var( --font-family);
    background-color: ${(props) =>
      props.isDarkMode ? darkTheme.background : lightTheme.background};
  }

 
`;
