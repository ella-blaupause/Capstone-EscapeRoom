import styled from "styled-components";
import { questions } from "../../utils/utils";

const StyledTable = styled.table`
  border-collapse: collapse;
  grid-column: 1;
  grid-row: 1;
  width: 150px;
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
      <ol>
        {questions.map((question) => (
          <li key={question.id}>{question.question}</li>
        ))}
      </ol>
    </>
  );
}
