import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EntryChatGPT from ".";

test("renders a label and an input with the correct attributes", async () => {
  render(<EntryChatGPT />);

  // Check for the label
  const labelElement = screen.getByText(
    "Du brauchst Hilfe? Vielleicht bringt dich ChatGPT weiter!"
  );
  expect(labelElement).toBeInTheDocument();

  // Check for the input
  const inputElement = screen.getByPlaceholderText("Gib deine Frage ein ...");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("type", "text");
  expect(inputElement).toHaveAttribute("name", "question");
  expect(inputElement).toHaveValue("");

  // Enter text into the input
  await userEvent.type(inputElement, "Test question");
  expect(inputElement).toHaveValue("Test question");
});
