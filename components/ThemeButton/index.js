import styled from "styled-components";

const StyledThemeButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: inherit;
  color: inherit;
`;

export default function ThemeButton() {
  return <StyledThemeButton>Theme</StyledThemeButton>;
}
