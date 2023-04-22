import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px 10px 20px;
  font-size: ${(prop) => prop.fontSize};
  background: var(--my-orange);
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-color: black;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function MyButton({ children, fontSize, onNewGame }) {
  return (
    <StyledButton type="button" fontSize={fontSize} onClick={() => onNewGame()}>
      {children}
    </StyledButton>
  );
}
