import { render, screen } from "@testing-library/react";
import ColorPuzzle from ".";

test("renders a form with the Symbols", () => {
  render(<ColorPuzzle />);

  const form = screen.getByRole("form", { name: /ColorCode/i });
  expect(form).toBeInTheDocument();
});
