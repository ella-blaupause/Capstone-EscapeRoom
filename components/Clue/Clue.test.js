import { render, screen } from "@testing-library/react";
import Clue from ".";

test("displays randomly provided color", async () => {
  // Mock the global store's randomColors value
  const mockColors = ["red", "green", "blue"];
  jest.spyOn(require("../../store"), "default").mockReturnValue({
    randomColors: mockColors,
    randomSymbols: ["*", "@", "#"],
  });

  // Render the Clue component
  render(<Clue />);

  // Ensure that the color div is rendered with the correct color
  const colorDiv = await screen.findByTestId("color-div");
  expect(colorDiv).toHaveStyle(`background-color: ${mockColors[2]}`);
});

test("displays randomly provided colors", () => {
  const mockColors = ["red", "green", "blue"];
  jest.spyOn(require("../../store"), "default").mockReturnValue({
    randomColors: mockColors,
    randomSymbols: ["*", "@", "#"],
  });

  render(<Clue />);

  // find all StyledColorDiv components and check their styles
  const colorDiv = screen.getAllByTestId("color-div");

  expect(colorDiv[0]).toHaveStyle(`background-color: ${randomColors[2]};`);
});
