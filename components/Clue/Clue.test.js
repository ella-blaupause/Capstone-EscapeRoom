import { render, screen } from "@testing-library/react";
import Clue from ".";

test("displays two different symbols", async () => {
  const randomColors = ["", "", "blue"];
  const randomSymbols = ["", "", "B"];
  render(<Clue randomColors={randomColors} randomSymbols={randomSymbols} />);
  const Symbol = await screen.findByText("B");

  expect(Symbol).toBeInTheDocument();
});

test("displays randomly provided colors", () => {
  const randomColors = ["", "red", "blue"];
  const randomSymbols = ["", "A", "B"];
  render(<Clue randomColors={randomColors} randomSymbols={randomSymbols} />);

  // find all StyledColorDiv components and check their styles
  const colorDiv = screen.getAllByTestId("color-div");

  expect(colorDiv[0]).toHaveStyle(`background-color: ${randomColors[2]};`);
});
