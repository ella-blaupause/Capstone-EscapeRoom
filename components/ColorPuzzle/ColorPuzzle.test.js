import { render, screen } from "@testing-library/react";
import ColorPuzzle from ".";

test("renders a form with the Symbols", () => {
  render(<ColorPuzzle />);

  const symbole1 = screen.getByText(/◇/i);
  const symbole2 = screen.getByText(/△/i);
  const symbole3 = screen.getByText(/☆/i);
  expect(symbole1).toBeInTheDocument();
  expect(symbole2).toBeInTheDocument();
  expect(symbole3).toBeInTheDocument();
});
