import { render, screen } from "@testing-library/react";
import CollectingArea from ".";

test("if the component displays the header 'Eingesammelte Puzzleteile' correctly.", async () => {
  render(
    <CollectingArea
      countPieces={""}
      puzzlePieces={""}
      randomColor={""}
      randomSymbol={""}
    />
  );

  const header = screen.getByRole("heading", {
    name: "Eingesammelte Puzzleteile",
  });

  expect(header).toBeInTheDocument();
});

test("that the component handles different count of collected puzzle pieces.", async () => {
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
