import styled from "styled-components";
import EntryForm from "../EntryForm/index.js";
import { useState } from "react";
import { columns, getGrid, rows } from "../../utils/utils.js";
import useCrosswordStore from "../../stores/crosswordStore.js";

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

export default function CrosswordLayout({ onSolvedPuzzles }) {
  const currentClueId = useCrosswordStore((state) => state.currentClueId);
  const pickCurrentClueId = useCrosswordStore(
    (state) => state.pickCurrentClueId
  );

  const crosswordClues = useCrosswordStore((state) => state.crosswordClues);

  const [countClickGrid, setCountClickGrid] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const grid = getGrid(crosswordClues);

  function handleCurrentClueId(crosswordCluesId) {
    pickCurrentClueId(crosswordCluesId);
  }

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
                          handleCurrentClueId(
                            grid[row][column].refernceCluesId[
                              countClickGrid % 2
                            ]
                          );
                          setCountClickGrid(countClickGrid + 1);
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

      <EntryForm onSolvedPuzzles={onSolvedPuzzles} />

      <StyledToggleList type="button" onClick={handleToggleList}>
        {isActive ? "Fragen verbergen" : "Fragen anzeigen"}
      </StyledToggleList>

      {isActive && (
        <StyledOl>
          {crosswordClues.map((crosswordClue) => (
            <StyledLi
              key={crosswordClue.id}
              isSelected={crosswordClue.id === currentClueId}
              onClick={() => handleCurrentClueId(crosswordClue.id)}
            >
              {crosswordClue.question}
            </StyledLi>
          ))}
        </StyledOl>
      )}
    </>
  );
}
