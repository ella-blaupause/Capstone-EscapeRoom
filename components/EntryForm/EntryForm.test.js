import { render, screen } from "@testing-library/react";
import EntryForm from ".";

test("renders a label and an input with the correct attributes", () => {
  const onData = jest.fn();
  const currentClueId = 1;

  render(
    <EntryForm
      onData={onData}
      currentClueId={currentClueId}
      name="answer"
      labelText="Was wird in Konzerten, Opern, Musicals und Filmen aufgeführt?"
      placeholder="Antwort eingeben"
    />
  );

  const input = screen.getByLabelText(
    /Was wird in Konzerten, Opern, Musicals und Filmen aufgeführt?/i
  );
  expect(input).toHaveAttribute("placeholder", "Antwort eingeben");
  expect(input).toHaveAttribute("name", "answer");
});
