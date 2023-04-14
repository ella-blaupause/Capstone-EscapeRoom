import styled from "styled-components";
import { crosswordClues } from "../../utils/utils";

const StyledTable = styled.table`
  border-collapse: collapse;
  grid-column: 1;
  grid-row: 1;
`;

//Styled vor Tr  und Td weggelassen, wegen besserer Lesbarkeit
const Tr = styled.tr`
  text-align: center;
`;

const Td = styled.td`
  width: 20px;
  height: 20px;
  display: table-cell;
  border: solid black;
  background-color: ${({ isBlack }) => (isBlack ? "black" : null)};
`;

const StyledOl = styled.ol`
  grid-column: 2;
  grid-row: 1;
`;

export default function CrosswordLayout() {
  return (
    <>
      <StyledTable>
        <tbody>
          <Tr>
            <Td isBlack></Td>
            <Td></Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
          </Tr>
          <Tr>
            <Td isBlack></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td isBlack></Td>
          </Tr>
          <Tr>
            <Td isBlack></Td>
            <Td></Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td isBlack></Td>
            <Td></Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
            <Td></Td>
          </Tr>
        </tbody>
      </StyledTable>
      <StyledOl>
        {crosswordClues.map((crosswordClue) => (
          <li key={crosswordClue.id}>{crosswordClue.question}</li>
        ))}
      </StyledOl>
    </>
  );
}
