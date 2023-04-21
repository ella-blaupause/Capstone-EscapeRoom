import styled from "styled-components";
import { PuzzleElement } from "../../utils/icons";

const Area = styled.div`
  width: 100px;
  height: 100px;
  border: black solid;
  grid-column: 14 / span 4;
  grid-row: 1 / span 3;
  display: ${(props) => (props.countPieces ? "grid" : null)};
  place-items: center;
  background-color: var(--my-yellow);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
`;

const StyledColorDiv0 = styled.div`
  height: 2em;
  width: 2em;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.color};
`;

export default function CollectingArea({
  countPieces,
  puzzlePieces,
  randomColors,
  randomSymbols,
}) {
  if (countPieces === puzzlePieces.length) {
    return (
      <Area countPieces={countPieces}>
        <StyledColorDiv0 color={randomColors[0]}>
          {randomSymbols[0]}
        </StyledColorDiv0>
      </Area>
    );
  }

  return (
    <Area>
      <PuzzleElement alt="Grünes Pzzleteil" />
      <span>
        {countPieces}/{puzzlePieces.length}
      </span>
    </Area>
  );
}
