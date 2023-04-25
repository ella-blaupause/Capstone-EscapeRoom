import styled from "styled-components";

import EntryForm from "../EntryForm/index.js";
import { useState } from "react";
import { columns, getGrid, rows } from "../../utils/utils.js";

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
  font-family: "Comic Sans MS", sans-serif;
`;

const StyledToggleList = styled.button`
  padding: 10px 20px 10px 20px;
  background: var(--my-orange);
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-color: black;
  &:hover {
    transform: scale(1.1);
  }
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
  const [countClick, setCountClick] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const grid = getGrid(crosswordClues);

  function handleToggleList() {
    setIsActive(!isActive);
  }

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
                          grid[row][column].refernceCluesId.includes(
                            currentClueId
                          )
                        }
                        disabled={grid[row][column] === -1}
                        onClick={() => {
                          onCurrentClueId(
                            grid[row][column].refernceCluesId[countClick % 2]
                          );
                          setCountClick(countClick + 1);
                        }}
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

      <StyledToggleList type="button" onClick={handleToggleList}>
        {isActive ? "Hinweise verbergen" : "Hinweise anzeigen"}
      </StyledToggleList>

      {isActive && (
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
      )}
    </>
  );
}
