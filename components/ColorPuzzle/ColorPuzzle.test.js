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

test("onColorSwitch function is called with the correct parameter when a ColorDiv is clicked.", async () => {
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

  const colorDiv1 = screen.getByTestId("color-div-0");
  const colorDiv2 = screen.getByTestId("color-div-1");
  const colorDiv3 = screen.getByTestId("color-div-2");

  await userEvent.click(colorDiv1);
  expect(onColorSwitch).toHaveBeenCalledWith("first");

  await userEvent.click(colorDiv2);
  expect(onColorSwitch).toHaveBeenCalledWith("second");

  await userEvent.click(colorDiv3);
  expect(onColorSwitch).toHaveBeenCalledWith("third");
});

test("ColorDiv component has the correct color prop value", () => {
  const colors = ["red", "green", "blue"];
  const colorCounts = { first: 0, second: 1, third: 2 };
  const { rerender } = render(
    <ColorPuzzle
      onColorSwitch={() => {}}
      colors={colors}
      colorCounts={colorCounts}
      randomSymbols={["A", "B", "C"]}
    />
  );

  // Find the first ColorDiv component and verify its color prop value
  const colorDiv = screen.getByTestId("color-div-0");
  expect(colorDiv).toHaveStyle({ backgroundColor: "red" });

  // Update the props and rerender the component
  colorCounts.first = 1;
  rerender(
    <ColorPuzzle
      onColorSwitch={() => {}}
      colors={colors}
      colorCounts={colorCounts}
      randomSymbols={["A", "B", "C"]}
    />
  );

  // Verify that the second ColorDiv component now has the correct color prop value
  expect(colorDiv).toHaveStyle({ backgroundColor: "green" });

  // Find the second ColorDiv component and verify its color prop value
  const colorDiv1 = screen.getByTestId("color-div-1");
  expect(colorDiv).toHaveStyle({ backgroundColor: "green" });

  // Update the props and rerender the component
  colorCounts.second = 2;
  rerender(
    <ColorPuzzle
      onColorSwitch={() => {}}
      colors={colors}
      colorCounts={colorCounts}
      randomSymbols={["A", "B", "C"]}
    />
  );

  // Verify that the first ColorDiv component now has the correct color prop value
  expect(colorDiv1).toHaveStyle({ backgroundColor: "blue" });

  // Find the first ColorDiv component and verify its color prop value
  const colorDiv2 = screen.getByTestId("color-div-2");
  expect(colorDiv2).toHaveStyle({ backgroundColor: "blue" });

  // Update the props and rerender the component
  colorCounts.third = 0;
  rerender(
    <ColorPuzzle
      onColorSwitch={() => {}}
      colors={colors}
      colorCounts={colorCounts}
      randomSymbols={["A", "B", "C"]}
    />
  );

  // Verify that the second ColorDiv component now has the correct color prop value
  expect(colorDiv2).toHaveStyle({ backgroundColor: "red" });
});
