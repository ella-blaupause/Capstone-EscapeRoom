import styled from "styled-components";
import { SvgPuzzleElement } from "../../utils/icons";
import usePuzzlePiecesStore from "../../stores/puzzlePiecesStore";

const Area = styled.div`
  width: 100px;
  height: 100px;
  border: black solid;
  grid-column: 14 / span 4;
  grid-row: 1 / span 3;
  display: ${(props) => (props.countPieces ? "grid" : null)};
  background-color: #f5f4eb;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: inset 1px 1px 10px 1px var(--my-blue);
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
  randomColors,
  randomSymbols,
}) {
  const puzzlePieces = usePuzzlePiecesStore((state) => state.puzzlePieces);
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
      <SvgPuzzleElement alt="Grünes Pzzleteil" />
      <span>
        {countPieces}/{puzzlePieces.length}
      </span>
    </Area>
  );
}
