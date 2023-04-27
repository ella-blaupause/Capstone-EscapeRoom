import styled from "styled-components";
import { SvgArrowUndoUpLeft } from "../../utils/icons";
import Link from "next/link";

const StyledHeader = styled.header`
  background-color: var(--my-blue);
  width: 375px;
  height: 68px;
  top: 0px;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 0px;
  font-size: 24px;
  color: var(--my-yellow);
  text-shadow: 1px 0 10px var(--my-shadow);
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 10px;
  left: 15px;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Header({ children, isBackArrow }) {
  return (
    <StyledHeader>
      {isBackArrow && (
        <StyledLink href={"/room"}>
          <SvgArrowUndoUpLeft />
        </StyledLink>
      )}
      <Title>{children}</Title>
    </StyledHeader>
  );
}
