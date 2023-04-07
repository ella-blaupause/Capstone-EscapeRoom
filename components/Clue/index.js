import styled from "styled-components";

const StyledClue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const StyledColorDiv = styled.div`
  height: 2em;
  width: 2em;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.color};
`;

export default function Clue({ randomColor, randomSymbol }) {
  return (
    <>
      <p>Gib den Code ein!</p>
      <StyledClue>
        <StyledColorDiv color={randomColor[0]} data-testid="color-div">
          {randomSymbol[0]}
        </StyledColorDiv>
        <StyledColorDiv color={randomColor[1]} data-testid="color-div">
          {randomSymbol[1]}
        </StyledColorDiv>
        <StyledColorDiv color={randomColor[2]} data-testid="color-div">
          {randomSymbol[2]}
        </StyledColorDiv>
      </StyledClue>
    </>
  );
}
