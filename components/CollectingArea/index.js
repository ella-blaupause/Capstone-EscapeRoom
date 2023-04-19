import styled from "styled-components";

const Area = styled.div`
  width: 130px;
  height: 130px;
  border: black solid;
  grid-column: 12 / span 4;
  grid-row: 1 / span 3;
  padding: 0 8px;
  display: ${(props) => (props.countPieces ? "grid" : null)};
  place-items: center;
  background-color: var(--my-yellow);
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
      <h5>Eingesammelte Puzzleteile</h5>
      <span style={{ padding: "8px" }}>🧩</span>
      <span>
        {countPieces}/{puzzlePieces.length}
      </span>
    </Area>
  );
}
