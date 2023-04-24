import { render, screen } from "@testing-library/react";
import CrosswordLayout from ".";
import { initialCrosswordClues } from "../../utils/utils";

test("table is correctly rendered with 8 rows and 8 columns.", async () => {
  const crosswordClues = initialCrosswordClues;

  render(
    <CrosswordLayout onCurrentClueId={"1"} crosswordClues={crosswordClues} />
  );
  const rows = await screen.findAllByRole("row");
  const columns = await screen.findAllByRole("cell");
  expect(rows).toHaveLength(8);
  expect(columns).toHaveLength(64);
});

test("questions are rendered as a list of items.", () => {
  const crosswordClues = initialCrosswordClues;
  render(
    <CrosswordLayout onCurrentClueId={"1"} crosswordClues={crosswordClues} />
  );

  const questionList = screen.getByRole("list");
  expect(questionList).toBeInTheDocument();

  const questionItems = screen.getAllByRole("listitem");
  expect(questionItems).toHaveLength(9);

  const question1 = screen.getByText(
    "Der Ort, an dem die Seelen der Verstorbenen hingelangen?"
  );
  expect(question1).toBeInTheDocument();

  const question2 = screen.getByText("Kleines Nagetier.");
  expect(question2).toBeInTheDocument();

  const question3 = screen.getByText("Eines der 4 Elemente.");
  expect(question3).toBeInTheDocument();

  const question4 = screen.getByText(
    "Wie nennt man den Verfasser eines Buches?"
  );
  expect(question4).toBeInTheDocument();

  const question5 = screen.getByText("Größeres Gewässer.");
  expect(question5).toBeInTheDocument();

  const question6 = screen.getByText("Eisige Kälte.");
  expect(question6).toBeInTheDocument();

  const question7 = screen.getByText(
    "Bezeichnung für eine Person, die du anhimmelst."
  );
  expect(question7).toBeInTheDocument();

  const question8 = screen.getByText(
    "Knuspriges Topping auf Kuchen, Muffins oder Eis."
  );
  expect(question8).toBeInTheDocument();

  const question9 = screen.getByText("Scheues Huftier mit Geweih.");
  expect(question9).toBeInTheDocument();
});
