import { render, screen } from "@testing-library/react";
import CollectingArea from ".";

test("handles different count of collected puzzle pieces.", async () => {
  const countPieces = 1;
  const puzzlePieces = [1, 2, 3];

  render(
    <CollectingArea
      countPieces={countPieces}
      puzzlePieces={puzzlePieces}
      randomColor={""}
      randomSymbol={""}
    />
  );
  const piecesCollected = await screen.findByText(
    `${countPieces}/${puzzlePieces.length}`
  );
  expect(piecesCollected).toBeInTheDocument();

  const newCountPieces = 2;
  render(
    <CollectingArea
      countPieces={newCountPieces}
      puzzlePieces={puzzlePieces}
      randomColor={""}
      randomSymbol={""}
    />
  );
  const updatedPiecesCollected = await screen.findByText(
    `${newCountPieces}/${puzzlePieces.length}`
  );
  expect(updatedPiecesCollected).toBeInTheDocument();
});
