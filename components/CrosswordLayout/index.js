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
  border: solid
    ${({ isSelected }) => (isSelected ? "var(--my-orange)" : "black")};

  background-color: ${({ isBlack }) => isBlack && "black"};
  cursor: pointer;
`;

const StyledOl = styled.ol`
  grid-column: 2;
  grid-row: 1;

  cursor: pointer;
`;

const StyledLi = styled.li`
  border: solid
    ${({ isSelected }) => (isSelected ? "var(--my-orange)" : "transparent")};
`;

export default function CrosswordLayout({
  onCurrentClueId,
  crosswordClues,
  onData,
  onChangeData,
  currentClueId,
  entryCharacterLength,
}) {
  const rows = [0, 1, 2, 3, 4, 5, 6, 7];
  const columns = [0, 1, 2, 3, 4, 5, 6, 7];
  const grid = useGrid(crosswordClues);

  return (
    <>
      <StyledTable>
        <tbody>
          {rows.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => {
                  return (
                    <td key={columnIndex}>
                      <Cell
                        type="button"
                        isBlack={grid[row][column] === -1}
                        isSelected={
                          grid[row][column] !== -1 &&
                          grid[row][column].id.includes(currentClueId)
                        }
                        disabled={grid[row][column] === -1}
                        onClick={() => onCurrentClueId(grid[row][column].id[0])}
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
          <StyledLi
            key={crosswordClue.id}
            isSelected={crosswordClue.id === currentClueId}
            onClick={() => onCurrentClueId(crosswordClue.id)}
          >
            {crosswordClue.question}
          </StyledLi>
        ))}
      </StyledOl>
    </>
  );
}
