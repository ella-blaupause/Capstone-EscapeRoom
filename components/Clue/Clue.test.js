import { render, screen } from "@testing-library/react";
import Clue from ".";

// eslint-disable-next-line jest/valid-title
test("Test if the text `Gib den Code ein!` is rendered", () => {
  render(
    <Clue
      randomColor={["red", "green", "blue"]}
      randomSymbol={["a", "b", "c"]}
    />
  );
  const textElement = screen.getByText("Gib den Code ein!");
  expect(textElement).toBeInTheDocument();
});

// eslint-disable-next-line jest/valid-title
test("Test if each StyledColorDiv component displays the correct symbol.", async () => {
  const randomColor = ["red", "blue", "yellow"];
  const randomSymbol = ["A", "B", "C"];
  render(<Clue randomColor={randomColor} randomSymbol={randomSymbol} />);
  const firstSymbol = await screen.findByText("A");
  const secondSymbol = await screen.findByText("B");
  const thirdSymbol = await screen.findByText("C");
  expect(firstSymbol).toBeInTheDocument();
  expect(secondSymbol).toBeInTheDocument();
  expect(thirdSymbol).toBeInTheDocument();
});

// eslint-disable-next-line jest/valid-title
test("Test if each StyledColorDiv component is correctly styled with the provided color.", async () => {
  const randomColor = ["red", "green", "blue"];
  const randomSymbol = ["A", "B", "C"];
  render(<Clue randomColor={randomColor} randomSymbol={randomSymbol} />);
  const colorDivs = screen.getAllByTestId("color-div");
  expect(colorDivs).toHaveLength(3);
  expect(colorDivs[0]).toHaveStyle(`background-color: ${randomColor[0]};`);
  expect(colorDivs[1]).toHaveStyle(`background-color: ${randomColor[1]};`);
  expect(colorDivs[2]).toHaveStyle(`background-color: ${randomColor[2]};`);
});
