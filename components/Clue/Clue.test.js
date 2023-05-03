import { render, screen } from "@testing-library/react";
import Clue from ".";
import useGlobalStore from "../../store";

test("renders the correct color", () => {
  const randomColors = ["red", "green", "blue"];
  const randomSymbols = ["A", "B", "C"];

  useGlobalStore.setState({ randomSymbols, randomColors });

  render(<Clue />);

  const colorDiv = screen.getByTestId("color-div");
  expect(colorDiv).toHaveStyle({ backgroundColor: "blue" });
});
