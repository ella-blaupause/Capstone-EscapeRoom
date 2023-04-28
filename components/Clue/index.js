import styled from "styled-components";
import useColorCodePuzzleStore from "../../stores/colorCodePuzzleStore";

const StyledColorDiv = styled.div`
  grid-column: 3 / span 6;
  grid-row: 5 / span 2;
  display: flex;
  height: 2em;
  width: 2em;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.color};
`;

export default function Clue() {
  const randomColors = useColorCodePuzzleStore((state) => state.randomColors);
  const randomSymbols = useColorCodePuzzleStore((state) => state.randomSymbols);
  return (
    <StyledColorDiv color={randomColors[2]} data-testid="color-div">
      {randomSymbols[2]}
    </StyledColorDiv>
  );
}
