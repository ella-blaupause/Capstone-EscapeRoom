import styled from "styled-components";
import { SvgPuzzleElement } from "../../utils/icons";

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
  box-shadow: inset 0px 0px 10px 2px var(--my-blue);
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
      <SvgPuzzleElement alt="Grünes Pzzleteil" />
      <span>
        {countPieces}/{puzzlePieces.length}
      </span>
    </Area>
  );
}
