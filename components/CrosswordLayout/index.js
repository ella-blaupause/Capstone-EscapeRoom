import styled from "styled-components";
import useGrid from "../../lib/Hook/useGrid.js";
import EntryForm from "../EntryForm/index.js";

const StyledTable = styled.table`
  border-collapse: collapse;
  grid-column: 1;
  grid-row: 1;
`;

const Cell = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: transparent;
  font-style: initial;
  text-align: center;
  border: solid black;
  background-color: ${({ isBlack }) => isBlack && "black"};
  cursor: pointer;
`;

const StyledOl = styled.ol`
  grid-column: 2;
  grid-row: 1;
  cursor: pointer;
`;

export default function CrosswordLayout({
  onCurrentClueId,
  crosswordClues,
  onData,
  onChangeData,
  currentClueId,
  entryCharacterLength,
}) {
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
                        type="button"
                        isBlack={grid[row][column] === -1}
                        disabled={grid[row][column] === -1}
                        onClick={() => onCurrentClueId(grid[row][column].id)}
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

      <EntryForm
        onData={onData}
        onChangeData={onChangeData}
        currentClueId={currentClueId}
        entryCharacterLength={entryCharacterLength}
      />

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
