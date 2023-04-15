import styled from "styled-components";

const StyledClue = styled.div`
  grid-column: 3 / span 6;
  grid-row: 5 / span 2;
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

export default function Clue({ randomColors, randomSymbols }) {
  return (
    <StyledClue>
      <StyledColorDiv color={randomColors[1]} data-testid="color-div">
        {randomSymbols[1]}
      </StyledColorDiv>
      <StyledColorDiv color={randomColors[2]} data-testid="color-div">
        {randomSymbols[2]}
      </StyledColorDiv>
    </StyledClue>
  );
}
