import { render, screen } from "@testing-library/react";
import CollectingArea from ".";
import userEvent from "@testing-library/user-event";
import useGlobalStore from "../../store";

jest.mock("../../store");

test("displays the correct number of puzzle pieces", async () => {
  const randomColors = ["red", "blue", "yellow", "green"];
  const randomSymbols = ["A", "B", "C", "D"];
  const countPieces = 2;
  const puzzlePieces = [
    { id: 1, color: "red", symbol: "A" },
    { id: 2, color: "blue", symbol: "B" },
    { id: 3, color: "yellow", symbol: "C" },
    { id: 4, color: "green", symbol: "D" },
  ];

  useGlobalStore.mockReturnValueOnce(randomColors);
  useGlobalStore.mockReturnValueOnce(randomSymbols);
  useGlobalStore.mockReturnValueOnce(countPieces);
  useGlobalStore.mockReturnValueOnce(puzzlePieces);

  render(<CollectingArea />);

  // Verify that the number of puzzle pieces is displayed correctly
  const countDisplay = screen.getByText(
    `${countPieces}/${puzzlePieces.length}`
  );
  expect(countDisplay).toBeInTheDocument();
});
