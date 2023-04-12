import { render, screen } from "@testing-library/react";
import CollectingArea from ".";

// eslint-disable-next-line jest/valid-title
test("Test if the header `Eingesammelte Puzzleteile` is rendered", async () => {
  render(<CollectingArea countPieces={0} puzzlePieces={[]} />);
  const header = await screen.findByText(/Eingesammelte Puzzleteile/i);
  expect(header).toBeInTheDocument();
});

// eslint-disable-next-line jest/valid-title
test("Test that the component handles different count of collected puzzle pieces.", async () => {
  const countPieces = 0;
  const puzzlePieces = [{ id: 1 }, { id: 2 }, { id: 3 }];
  render(
    <CollectingArea countPieces={countPieces} puzzlePieces={puzzlePieces} />
  );
  const piecesCollected = await screen.findByText(
    `${countPieces}/${puzzlePieces.length}`
  );
  expect(piecesCollected).toBeInTheDocument();

  const newCountPieces = 3;
  render(
    <CollectingArea countPieces={newCountPieces} puzzlePieces={puzzlePieces} />
  );
  const updatedPiecesCollected = await screen.findByText(
    `${newCountPieces}/${puzzlePieces.length}`
  );
  expect(updatedPiecesCollected).toBeInTheDocument();
});
