import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ColorPuzzle from ".";

test("if the text `Gib den Code ein!` is rendered", () => {
  const onColorSwitch = jest.fn();
  const colors = ["red", "blue", "green"];
  const colorCounts = { first: 0, second: 1, third: 2 };
  const randomSymbols = ["A", "B", "C"];

  render(
    <ColorPuzzle
      onColorSwitch={onColorSwitch}
      colors={colors}
      colorCounts={colorCounts}
      randomSymbols={randomSymbols}
    />
  );
  const textElement = screen.getByText("Gib den Code ein!");
  expect(textElement).toBeInTheDocument();
});

test("onClick event is fired when a ColorDiv is clicked.", async () => {
  const onSolvedPuzzles = jest.fn();
  render(<ColorPuzzle onSolvedPuzzles={onSolvedPuzzles} />);

  const colorDiv0 = screen.getByTestId("color-div-0");
  const colorDiv1 = screen.getByTestId("color-div-1");
  const colorDiv2 = screen.getByTestId("color-div-2");

  await userEvent.click(colorDiv0);
  expect(onSolvedPuzzles).not.toHaveBeenCalled();

  await userEvent.click(colorDiv1);
  expect(onSolvedPuzzles).not.toHaveBeenCalled();

  await userEvent.click(colorDiv2);
  expect(onSolvedPuzzles).not.toHaveBeenCalled();
});

test("renders three ColorDiv", async () => {
  render(<ColorPuzzle onSolvedPuzzles={() => {}} />);
  const colorDivs = await screen.findAllByTestId(/^color-div-\d$/);
  expect(colorDivs).toHaveLength(3);
});
