import styled from "styled-components";
import { SvgArrowUndoUpLeft } from "../../utils/icons";
import Link from "next/link";
import useGlobalStore from "../../store";
import ThemeButton from "../ThemeButton";
import { darkTheme, lightTheme } from "../../utils/utils";

const StyledHeader = styled.header`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? darkTheme.bar : lightTheme.bar};
  width: 375px;
  height: 68px;
  top: 0px;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  color: ${({ isDarkMode }) =>
    isDarkMode ? darkTheme.text : "var(--my-yellow)"};
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 0px;
  font-size: 24px;
  text-shadow: 1px 0 10px black;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 16px;
  left: 25px;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Header({ children, isBackArrow }) {
  const isDarkMode = useGlobalStore((state) => state.isDarkMode);

  return (
    <StyledHeader isDarkMode={isDarkMode}>
      {isBackArrow && (
        <StyledLink href={"/room"}>
          <SvgArrowUndoUpLeft isDarkMode={isDarkMode} />
        </StyledLink>
      )}
      <Title>{children}</Title>
      <ThemeButton aria-label="theme" />
    </StyledHeader>
  );
}
