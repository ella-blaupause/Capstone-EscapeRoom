import { render, screen } from "@testing-library/react";
import CrosswordLayout from ".";
import { initialCrosswordClues } from "../../utils/utils";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("table is correctly rendered with 8 rows and 8 columns.", async () => {
  const crosswordClues = initialCrosswordClues;
  const onCurrentClueId = jest.fn();
  const onData = jest.fn();
  const onChangeData = jest.fn();
  const currentClueId = 1;
  const entryCharacterLength = 5;

  render(
    <CrosswordLayout
      onCurrentClueId={onCurrentClueId}
      crosswordClues={crosswordClues}
      onData={onData}
      onChangeData={onChangeData}
      currentClueId={currentClueId}
      entryCharacterLength={entryCharacterLength}
    />
  );

  const rows = await screen.findAllByRole("row");
  const columns = await screen.findAllByRole("cell");
  expect(rows).toHaveLength(8);
  expect(columns).toHaveLength(64);
});

test("questions are rendered as a list of items if isActive=true.", async () => {
  const crosswordClues = initialCrosswordClues;
  const onCurrentClueId = jest.fn();
  const onData = jest.fn();
  const onChangeData = jest.fn();
  const currentClueId = 1;
  const entryCharacterLength = 5;

  render(
    <CrosswordLayout
      onCurrentClueId={onCurrentClueId}
      crosswordClues={crosswordClues}
      onData={onData}
      onChangeData={onChangeData}
      currentClueId={currentClueId}
      entryCharacterLength={entryCharacterLength}
    />
  );
  const toggleButton = screen.getByRole("button", {
    name: "Fragen anzeigen",
  });
  await userEvent.click(toggleButton);

  const questionList = screen.getByRole("list");
  expect(questionList).toBeInTheDocument();

  const questionItems = screen.getAllByRole("listitem");
  expect(questionItems).toHaveLength(9);

  const question1 = screen.getByRole("list");
  expect(question1).toHaveTextContent(
    /Der Ort, an dem die Seelen der Verstorbenen hingelangen?/i
  );

  const question2 = screen.getByRole("list");
  expect(question2).toHaveTextContent(/Kleines Nagetier/i);

  const question3 = screen.getByRole("list");
  expect(question3).toHaveTextContent(/Eines der 4 Elemente/i);

  const question4 = screen.getByRole("list");
  expect(question4).toHaveTextContent(
    /Wie nennt man den Verfasser eines Buches?/i
  );

  const question5 = screen.getByRole("list");
  expect(question5).toHaveTextContent(/Größeres Gewässer/i);

  const question6 = screen.getByRole("list");
  expect(question6).toHaveTextContent(/Eisige Kälte/i);

  const question7 = screen.getByRole("list");
  expect(question7).toHaveTextContent(
    /Bezeichnung für eine Person, die du anhimmelst/i
  );

  const question8 = screen.getByRole("list");
  expect(question8).toHaveTextContent(
    /Knuspriges Topping auf Kuchen, Muffins oder Eis/i
  );

  const question9 = screen.getByRole("list");
  expect(question9).toHaveTextContent(/Scheues Huftier mit Geweih/i);
});
