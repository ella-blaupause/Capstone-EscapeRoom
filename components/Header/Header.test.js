import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders the title correctly", async () => {
  const title = "Test Title";
  render(<Header>{title}</Header>);
  const titleElement = await screen.findByText(title);
  expect(titleElement).toBeInTheDocument();
});
