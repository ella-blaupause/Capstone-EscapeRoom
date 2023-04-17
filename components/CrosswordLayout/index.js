import styled from "styled-components";

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

export default function CrosswordLayout({ onCurrentClueId, crosswordClues }) {
  return (
    <>
      <StyledTable>
        <tbody>
          <Tr>
            <Td isBlack></Td>
            <Td>
              <sup>1</sup>
              {crosswordClues[0].isCorrectlyAnswered && "M"}
            </Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
          </Tr>
          <Tr>
            <Td isBlack></Td>
            <Td>
              <sup>2</sup>
              {(crosswordClues[0].isCorrectlyAnswered ||
                crosswordClues[1].isCorrectlyAnswered) &&
                "U"}
            </Td>
            <Td> {crosswordClues[1].isCorrectlyAnswered && "H"}</Td>
            <Td>{crosswordClues[1].isCorrectlyAnswered && "R"}</Td>
            <Td isBlack></Td>
          </Tr>
          <Tr>
            <Td isBlack></Td>
            <Td>{crosswordClues[0].isCorrectlyAnswered && "S"}</Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
            <Td>
              <sup>4</sup>
              {crosswordClues[3].isCorrectlyAnswered && "O"}
            </Td>
          </Tr>
          <Tr>
            <Td>
              <sup>3</sup>
              {crosswordClues[2].isCorrectlyAnswered && "T"}
            </Td>
            <Td>
              {(crosswordClues[0].isCorrectlyAnswered ||
                crosswordClues[2].isCorrectlyAnswered) &&
                "I"}
            </Td>
            <Td>{crosswordClues[2].isCorrectlyAnswered && "S"}</Td>
            <Td>{crosswordClues[2].isCorrectlyAnswered && "C"}</Td>
            <Td>
              {(crosswordClues[2].isCorrectlyAnswered ||
                crosswordClues[3].isCorrectlyAnswered) &&
                "H"}
            </Td>
          </Tr>
          <Tr>
            <Td isBlack></Td>
            <Td>{crosswordClues[0].isCorrectlyAnswered && "K"}</Td>
            <Td isBlack></Td>
            <Td isBlack></Td>
            <Td>{crosswordClues[3].isCorrectlyAnswered && "R"}</Td>
          </Tr>
        </tbody>
      </StyledTable>
      <StyledOl>
        {crosswordClues.map((crosswordClue) => (
          <li
            key={crosswordClue.id}
            onClick={() => onCurrentClueId(crosswordClue.id)}
          >
            {crosswordClue.question}
          </li>
        ))}
      </StyledOl>
    </>
  );
}
