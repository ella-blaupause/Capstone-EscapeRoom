import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--my-blue);
  width: 320px;
  height: 68px;
  top: 0px;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const Title = styled.h1`
  position: absolute;
  top: 0px;
  font-size: 24px;
  color: var(--my-yellow);
`;

export default function Header({ children }) {
  return (
    <StyledHeader>
      <Title>{children}</Title>
    </StyledHeader>
  );
}
