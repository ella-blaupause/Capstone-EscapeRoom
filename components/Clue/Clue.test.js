import { render, screen } from "@testing-library/react";
import Clue from ".";

test("displays two different symbols", async () => {
  const randomColor = ["", "red", "blue"];
  const randomSymbol = ["", "A", "B"];
  render(<Clue randomColor={randomColor} randomSymbol={randomSymbol} />);
  const firstSymbol = await screen.findByText("A");
  const secondSymbol = await screen.findByText("B");

  expect(firstSymbol).toBeInTheDocument();
  expect(secondSymbol).toBeInTheDocument();
});

test("displays randomly provided colors", async () => {
  const randomColor = ["", "red", "blue"];
  const randomSymbol = ["", "A", "B"];
  render(<Clue randomColor={randomColor} randomSymbol={randomSymbol} />);

  // find all StyledColorDiv components and check their styles
  const colorDivs = screen.getAllByTestId("color-div");
  expect(colorDivs).toHaveLength(2);
  expect(colorDivs[0]).toHaveStyle(`background-color: ${randomColor[1]};`);
  expect(colorDivs[1]).toHaveStyle(`background-color: ${randomColor[2]};`);
});
