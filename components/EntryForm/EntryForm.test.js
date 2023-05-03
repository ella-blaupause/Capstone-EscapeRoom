import { render, screen } from "@testing-library/react";
import EntryForm from ".";
import userEvent from "@testing-library/user-event";

test("form has a label and input field", async () => {
  const inputRef = jest.fn();
  const onSolvedPuzzles = jest.fn();

  render(<EntryForm inputRef={inputRef} onSolvedPuzzles={onSolvedPuzzles} />);

  const label = screen.getByLabelText(/Wähle eine Frage aus/i);
  const input = screen.getByPlaceholderText(/antwort eingeben/i);
  const button = screen.getByRole("button", { name: /ok/i });

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  await userEvent.type(input, "test answer");
  expect(input).toHaveValue("test answer");

  userEvent.click(button);

  expect(onSolvedPuzzles).not.toHaveBeenCalled();
  expect(inputRef).toHaveBeenCalled();
});
