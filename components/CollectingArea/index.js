import styled from "styled-components";

const Area = styled.div`
  width: 130px;
  height: 130px;
  border: black solid;
  grid-column: 12 / span 4;
  grid-row: 1 / span 3;
  padding: 0 8px;
`;

export default function CollectingArea({ countPieces, puzzlePieces }) {
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
