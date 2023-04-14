import { render, screen } from "@testing-library/react";
import Clue from ".";

test("displays two different symbols", async () => {
  const randomColors = ["", "red", "blue"];
  const randomSymbols = ["", "A", "B"];
  render(<Clue randomColors={randomColors} randomSymbols={randomSymbols} />);
  const firstSymbol = await screen.findByText("A");
  const secondSymbol = await screen.findByText("B");

  expect(firstSymbol).toBeInTheDocument();
  expect(secondSymbol).toBeInTheDocument();
});

test("displays randomly provided colors", () => {
  const randomColors = ["", "red", "blue"];
  const randomSymbols = ["", "A", "B"];
  render(<Clue randomColors={randomColors} randomSymbols={randomSymbols} />);

  // find all StyledColorDiv components and check their styles
  const colorDivs = screen.getAllByTestId("color-div");
  expect(colorDivs).toHaveLength(2);
  expect(colorDivs[0]).toHaveStyle(`background-color: ${randomColors[1]};`);
  expect(colorDivs[1]).toHaveStyle(`background-color: ${randomColors[2]};`);
});
