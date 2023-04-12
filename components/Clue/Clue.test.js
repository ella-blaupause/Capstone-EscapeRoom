import { render, screen } from "@testing-library/react";
import Clue from ".";

// eslint-disable-next-line jest/valid-title
test("Test if each StyledColorDiv component displays the correct symbol.", async () => {
  const randomColor = ["red", "blue"];
  const randomSymbol = ["A", "B"];
  render(<Clue randomColor={randomColor} randomSymbol={randomSymbol} />);
  const firstSymbol = await screen.findByText("A");
  const secondSymbol = await screen.findByText("B");

  expect(firstSymbol).toBeInTheDocument();
  expect(secondSymbol).toBeInTheDocument();
});

// eslint-disable-next-line jest/valid-title
test("Test if each StyledColorDiv component is correctly styled with the provided color.", async () => {
  const randomColor = ["green", "blue"];
  const randomSymbol = ["A", "B"];
  render(<Clue randomColor={randomColor} randomSymbol={randomSymbol} />);
  const colorDivs = screen.getAllByTestId("color-div");
  expect(colorDivs).toHaveLength(2);
  expect(colorDivs[0]).toHaveStyle(`background-color: ${randomColor[0]};`);
  expect(colorDivs[1]).toHaveStyle(`background-color: ${randomColor[1]};`);
});
