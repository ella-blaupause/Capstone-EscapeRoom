import { useState } from "react";
import styled from "styled-components";
import useGlobalStore from "../../store";
import { darkTheme, lightTheme } from "../../utils/utils";

const StyledThemeDiv = styled.div`
  position: absolute;
  top: 22px;
  right: 0px;
  margin: 0;
  background-color: inherit;
  width: 80px;
`;

const StyledThemeButton = styled.button`
  background-color: inherit;
  color: ${({ isDarkMode }) =>
    isDarkMode ? darkTheme.highlight : lightTheme.highlight};
  border-style: none;
  padding: 0;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledThemeUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: left;
  border: solid 1px black;
  font-size: 10px;
`;

const StyledLiButton = styled.button`
  width: 100%;
  text-align: left;
  background-color: inherit;
  color: ${({ isDarkMode }) =>
    isDarkMode ? darkTheme.highlight : lightTheme.highlight};
  border-style: none;
  &:hover {
    background-color: var(--my-beige);
  }
`;

export default function ThemeButton() {
  const [isActive, setIsActive] = useState(false);
  const isDarkMode = useGlobalStore((state) => state.isDarkMode);
  const chooseIsDarkMode = useGlobalStore((state) => state.chooseIsDarkMode);

  function handeleThemeButton() {
    setIsActive(!isActive);
  }

  function chooseTheme(bool) {
    chooseIsDarkMode(bool);
  }

  return (
    <StyledThemeDiv>
      <StyledThemeButton onClick={handeleThemeButton} isDarkMode={isDarkMode}>
        Theme
      </StyledThemeButton>
      {isActive && (
        <StyledThemeUl>
          <li>
            <StyledLiButton
              isDarkMode={isDarkMode}
              onClick={() => {
                chooseTheme(
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                );
                handeleThemeButton();
              }}
            >
              OS default
            </StyledLiButton>
          </li>
          <li>
            <StyledLiButton
              isDarkMode={isDarkMode}
              onClick={() => {
                chooseTheme(false);
                handeleThemeButton();
              }}
            >
              Light
            </StyledLiButton>
          </li>
          <li>
            <StyledLiButton
              isDarkMode={isDarkMode}
              onClick={() => {
                chooseTheme(true);
                handeleThemeButton();
              }}
            >
              Dark
            </StyledLiButton>
          </li>
        </StyledThemeUl>
      )}
    </StyledThemeDiv>
  );
}
