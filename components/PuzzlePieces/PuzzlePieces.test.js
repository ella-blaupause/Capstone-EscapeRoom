import React from "react";
import { render, screen } from "@testing-library/react";
import PuzzlePieces from ".";

test("puzzle pieces are displayed in the correct positions on the grid", async () => {
  const initialPuzzlePieces = [
    {
      id: 0,
      position: { row: 2, column: 3 },
      isCollected: false,
    },
    {
      id: 1,
      position: { row: 3, column: 11 },
      isCollected: false,
    },
    {
      id: 2,
      position: { row: 5, column: 13 },
      isCollected: false,
    },
    {
      id: 3,
      position: { row: 8, column: 3 },
      isCollected: false,
    },
    {
      id: 4,
      position: { row: 9, column: 9 },
      isCollected: false,
    },
    {
      id: 5,
      position: { row: 12, column: 7 },
      isCollected: false,
    },
    {
      id: 6,
      position: { row: 15, column: 1 },
      isCollected: false,
    },
    {
      id: 7,
      position: { row: 18, column: 10 },
      isCollected: false,
    },
    {
      id: 8,
      position: { row: 21, column: 12 },
      isCollected: false,
    },
  ];

  render(<PuzzlePieces puzzlePieces={initialPuzzlePieces} />);

  const puzzlePieces = screen.getAllByRole("button");

  // Check that the correct number of puzzle pieces are displayed
  expect(puzzlePieces.length).toBe(9);

  // Check that the puzzle pieces are displayed in the correct positions
  expect(puzzlePieces[0]).toHaveStyle("grid-row: 2;");
  expect(puzzlePieces[0]).toHaveStyle("grid-column: 3;");

  expect(puzzlePieces[1]).toHaveStyle("grid-row: 3;");
  expect(puzzlePieces[1]).toHaveStyle("grid-column: 11;");

  expect(puzzlePieces[2]).toHaveStyle("grid-row: 5;");
  expect(puzzlePieces[2]).toHaveStyle("grid-column: 13;");

  expect(puzzlePieces[3]).toHaveStyle("grid-row: 8;");
  expect(puzzlePieces[3]).toHaveStyle("grid-column: 3;");

  expect(puzzlePieces[4]).toHaveStyle("grid-row: 9;");
  expect(puzzlePieces[4]).toHaveStyle("grid-column: 9;");

  expect(puzzlePieces[5]).toHaveStyle("grid-row: 12;");
  expect(puzzlePieces[5]).toHaveStyle("grid-column: 7;");

  expect(puzzlePieces[6]).toHaveStyle("grid-row: 15;");
  expect(puzzlePieces[6]).toHaveStyle("grid-column: 1;");

  expect(puzzlePieces[7]).toHaveStyle("grid-row: 18;");
  expect(puzzlePieces[7]).toHaveStyle("grid-column: 10;");

  expect(puzzlePieces[8]).toHaveStyle("grid-row: 21;");
  expect(puzzlePieces[8]).toHaveStyle("grid-column: 12;");

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
