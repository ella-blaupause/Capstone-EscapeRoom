import React from "react";
import { render, screen } from "@testing-library/react";
import PuzzlePieces from ".";

test("Ensure that the puzzle pieces are displayed in the correct positions on the grid", async () => {
  const initialPuzzlePieces = [
    {
      id: 0,
      position: { row: 2, column: 10 },
    },
    {
      id: 1,
      position: { row: 4, column: 4 },
    },
    {
      id: 2,
      position: { row: 6, column: 12 },
    },
    {
      id: 3,
      position: { row: 8, column: 3 },
    },
    {
      id: 4,
      position: { row: 9, column: 9 },
    },
    {
      id: 5,
      position: { row: 11, column: 4 },
    },
    {
      id: 6,
      position: { row: 14, column: 6 },
    },
    {
      id: 7,
      position: { row: 16, column: 15 },
    },
    {
      id: 8,
      position: { row: 18, column: 4 },
    },
  ];

  render(<PuzzlePieces puzzlePieces={initialPuzzlePieces} />);

  const puzzlePieces = screen.getAllByRole("button");

  // Check that the correct number of puzzle pieces are displayed
  expect(puzzlePieces.length).toBe(9);

  // Check that the puzzle pieces are displayed in the correct positions
  expect(puzzlePieces[0]).toHaveStyle("grid-row: 2;");
  expect(puzzlePieces[0]).toHaveStyle("grid-column: 10;");

  expect(puzzlePieces[1]).toHaveStyle("grid-row: 4;");
  expect(puzzlePieces[1]).toHaveStyle("grid-column: 4;");

  expect(puzzlePieces[2]).toHaveStyle("grid-row: 6;");
  expect(puzzlePieces[2]).toHaveStyle("grid-column: 12;");

  expect(puzzlePieces[3]).toHaveStyle("grid-row: 8;");
  expect(puzzlePieces[3]).toHaveStyle("grid-column: 3;");

  expect(puzzlePieces[4]).toHaveStyle("grid-row: 9;");
  expect(puzzlePieces[4]).toHaveStyle("grid-column: 9;");

  expect(puzzlePieces[5]).toHaveStyle("grid-row: 11;");
  expect(puzzlePieces[5]).toHaveStyle("grid-column: 4;");

  expect(puzzlePieces[6]).toHaveStyle("grid-row: 14;");
  expect(puzzlePieces[6]).toHaveStyle("grid-column: 6;");

  expect(puzzlePieces[7]).toHaveStyle("grid-row: 16;");
  expect(puzzlePieces[7]).toHaveStyle("grid-column: 15;");

  expect(puzzlePieces[8]).toHaveStyle("grid-row: 18;");
  expect(puzzlePieces[8]).toHaveStyle("grid-column: 4;");

  // Check that the puzzle piece displayed on the grid
  expect(puzzlePieces[0]).toBeInTheDocument();
  expect(puzzlePieces[1]).toBeInTheDocument();
  expect(puzzlePieces[2]).toBeInTheDocument();
  expect(puzzlePieces[3]).toBeInTheDocument();
  expect(puzzlePieces[4]).toBeInTheDocument();
  expect(puzzlePieces[5]).toBeInTheDocument();
  expect(puzzlePieces[6]).toBeInTheDocument();
  expect(puzzlePieces[7]).toBeInTheDocument();
  expect(puzzlePieces[8]).toBeInTheDocument();
});
