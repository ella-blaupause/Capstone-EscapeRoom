import { render, screen } from "@testing-library/react";
import UserName from ".";

test("form is rendered properly with the correct label and input field.", async () => {
  render(<UserName />);

  const labelElement = screen.getByLabelText("Gebe deinen Spielername ein:");
  expect(labelElement).toBeInTheDocument();

  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();

  const buttonElement = screen.getByRole("button", { name: /Ok/i });
  expect(buttonElement).toBeInTheDocument();
});
