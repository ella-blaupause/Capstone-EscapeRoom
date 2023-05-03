import { render, screen } from "@testing-library/react";
import CollectingArea from ".";
import userEvent from "@testing-library/user-event";
import useGlobalStore from "../../store";

jest.mock("../../store");

describe("CollectingArea component", () => {
  it("displays the correct number of puzzle pieces", async () => {
    // Mock the values returned by the useGlobalStore hook
    const mockRandomColors = ["#ff0000", "#00ff00", "#0000ff"];
    const mockRandomSymbols = ["A", "B", "C"];
    const mockCountPieces = 1;
    const mockPuzzlePieces = [{}, {}, {}];
    useGlobalStore.mockReturnValue({
      randomColors: mockRandomColors,
      randomSymbols: mockRandomSymbols,
      countPieces: mockCountPieces,
      puzzlePieces: mockPuzzlePieces,
    });

    // Render the component
    render(<CollectingArea />);

    // Check that the component displays the correct number of puzzle pieces
    expect(
      screen.getByText(`${mockCountPieces}/${mockPuzzlePieces.length}`)
    ).toBeInTheDocument();

    // Simulate completing the puzzle
    useGlobalStore.mockReturnValue({
      randomColors: mockRandomColors,
      randomSymbols: mockRandomSymbols,
      countPieces: mockPuzzlePieces.length,
      puzzlePieces: mockPuzzlePieces,
    });
    await act(async () => {
      await userEvent.click(screen.getByAltText("Grünes Puzzleteil"));
    });
    expect(
      screen.getByText(`${mockPuzzlePieces.length}/${mockPuzzlePieces.length}`)
    ).toBeInTheDocument();
  });
});
