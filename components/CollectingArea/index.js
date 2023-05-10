import styled from "styled-components";
import { SvgPuzzleElement } from "../../utils/icons";
import useGlobalStore from "../../store";

const Area = styled.div`
  width: 100px;
  height: 100px;
  border: black solid;
  position: absolute;
  top: 0;
  right: 0;
  display: ${(props) => (props.countPieces ? "grid" : null)};
  background-color: #f5f4eb;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: inset 1px 1px 10px 1px var(--my-blue);
  color: initial;
`;

const StyledColorDiv0 = styled.div`
  height: 2em;
  width: 2em;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.color};
  color: initial;
`;

export default function CollectingArea() {
  const randomColors = useGlobalStore((state) => state.randomColors);
  const randomSymbols = useGlobalStore((state) => state.randomSymbols);
  const countPieces = useGlobalStore((state) => state.countPieces);
  const puzzlePieces = useGlobalStore((state) => state.puzzlePieces);
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
      <SvgPuzzleElement alt="Grünes Puzzleteil" />
      <span>
        {countPieces}/{puzzlePieces.length}
      </span>
    </Area>
  );
}
