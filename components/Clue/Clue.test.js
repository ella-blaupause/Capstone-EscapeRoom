import { render, screen } from "@testing-library/react";
import Clue from ".";

test("renders clue", () => {
  render(<Clue />);
  const clueText = screen.getByText(/Gib den Code ein!/i);
  expect(clueText).toBeInTheDocument();
});
