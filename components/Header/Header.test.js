import { render, screen } from "@testing-library/react";
import Header from ".";

test("renders the title correctly", async () => {
  const title = "Test Title";
  render(<Header isBackArrow={false}>{title}</Header>);
  const titleElement = await screen.findByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});
