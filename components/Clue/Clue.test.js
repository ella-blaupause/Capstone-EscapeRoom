import { render, screen } from "@testing-library/react";
import Clue from ".";

test("if the component renders the correct color", async () => {
  const randomColors = ["", "", "rgb(56, 92, 255)"];

  render(<Clue />);
  const colorDiv = await screen.findByTestId("color-div");
  expect(colorDiv).toHaveStyle(`background-color: ${randomColors[2]}`);
});
