import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import PuzzlePieces from ".";

test("Ensure that the puzzle pieces are displayed in the correct positions on the grid", async () => {
  render(<PuzzlePieces />);

  const puzzlePieces = screen.getAllByRole("button");

  // Check that the correct number of puzzle pieces are displayed
  expect(puzzlePieces.length).toBe(9);

  // Check that the puzzle pieces are displayed in the correct positions
  expect(puzzlePieces[0]).toHaveStyle("grid-row: 1;");
  expect(puzzlePieces[0]).toHaveStyle("grid-column: 11;");

  expect(puzzlePieces[1]).toHaveStyle("grid-row: 3;");
  expect(puzzlePieces[1]).toHaveStyle("grid-column: 8;");

  expect(puzzlePieces[2]).toHaveStyle("grid-row: 4;");
  expect(puzzlePieces[2]).toHaveStyle("grid-column: 5;");

  expect(puzzlePieces[3]).toHaveStyle("grid-row: 7;");
  expect(puzzlePieces[3]).toHaveStyle("grid-column: 3;");

  expect(puzzlePieces[4]).toHaveStyle("grid-row: 9;");
  expect(puzzlePieces[4]).toHaveStyle("grid-column: 9;");

  expect(puzzlePieces[5]).toHaveStyle("grid-row: 10;");
  expect(puzzlePieces[5]).toHaveStyle("grid-column: 4;");

  expect(puzzlePieces[6]).toHaveStyle("grid-row: 13;");
  expect(puzzlePieces[6]).toHaveStyle("grid-column: 1;");

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
