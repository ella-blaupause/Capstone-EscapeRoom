import styled from "styled-components";
import useGrid from "../../lib/Hook/useGrid.js";

const StyledTable = styled.table`
  border-collapse: collapse;
  grid-column: 1;
  grid-row: 1;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  text-align: center;
  border: solid black;
  background-color: ${({ isBlack }) => isBlack && "black"};
`;

const StyledOl = styled.ol`
  grid-column: 2;
  grid-row: 1;
`;

export default function CrosswordLayout({ onCurrentClueId, crosswordClues }) {
  const grid = useGrid(crosswordClues);
  return (
    <>
      <StyledTable>
        <tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((column, columnIndex) => {
                  return (
                    <td key={columnIndex}>
                      <Cell
                        isBlack={grid[row][column] === -1}
                        onClick={() => handleClick(grid[row][column].id)}
                      >
                        <small>
                          <sup>{grid[row][column].sup} </sup>
                        </small>

                        {grid[row][column].letter}
                      </Cell>
                    </td>
                  );
                })}
              </tr>
            );
          })}
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
