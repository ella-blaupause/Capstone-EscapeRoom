import { render, screen } from "@testing-library/react";
import EntryForm from ".";

test("renders a label and an input with the correct attributes", () => {
  const onData = jest.fn();
  const currentClueId = 1;

  render(<EntryForm onData={onData} currentClueId={currentClueId} />);

  const labelElement = screen.getByLabelText(/Hinweis:/i);
  const inputElement = screen.getByPlaceholderText("Antwort eingeben");

  expect(labelElement).toBeInTheDocument();
  expect(labelElement.getAttribute("for")).toBe("answer");
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.getAttribute("id")).toBe("answer");
  expect(inputElement.getAttribute("type")).toBe("text");
  expect(inputElement.getAttribute("name")).toBe("answer");
});
