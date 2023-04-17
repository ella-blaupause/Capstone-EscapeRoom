import { render, screen } from "@testing-library/react";
import CrosswordLayout from ".";

test("table is correctly rendered with five rows and five columns.", async () => {
  const crosswordClues = [
    {
      id: 1,
      question: "Was wird in Konzerten, Opern, Musicals und Filmen aufgeführt?",
      answer: "Musik",
      isCorrectlyAnswered: false,
    },
    {
      id: 2,
      question: "Welches Gerät wird verwendet, um die Zeit zu messen?",
      answer: "Uhr",
      isCorrectlyAnswered: false,
    },
    {
      id: 3,
      question:
        "Welches Möbelstück kann man zum Essen, Arbeiten oder Schreiben verwenden?",
      answer: "Tisch",
      isCorrectlyAnswered: false,
    },
    {
      id: 4,
      question: "Welches Körperteil ermöglicht es uns, zu hören?",
      answer: "Ohr",
      isCorrectlyAnswered: false,
    },
  ];

  render(
    <CrosswordLayout onCurrentClueId={"1"} crosswordClues={crosswordClues} />
  );
  const rows = await screen.findAllByRole("row");
  const columns = await screen.findAllByRole("cell");
  expect(rows).toHaveLength(5);
  expect(columns).toHaveLength(25);
});

test("questions are rendered as a list of items.", () => {
  const crosswordClues = [
    {
      id: 1,
      question: "Was wird in Konzerten, Opern, Musicals und Filmen aufgeführt?",
      answer: "Musik",
      isCorrectlyAnswered: false,
    },
    {
      id: 2,
      question: "Welches Gerät wird verwendet, um die Zeit zu messen?",
      answer: "Uhr",
      isCorrectlyAnswered: false,
    },
    {
      id: 3,
      question:
        "Welches Möbelstück kann man zum Essen, Arbeiten oder Schreiben verwenden?",
      answer: "Tisch",
      isCorrectlyAnswered: false,
    },
    {
      id: 4,
      question: "Welches Körperteil ermöglicht es uns, zu hören?",
      answer: "Ohr",
      isCorrectlyAnswered: false,
    },
  ];

  render(
    <CrosswordLayout onCurrentClueId={"1"} crosswordClues={crosswordClues} />
  );

  const questionList = screen.getByRole("list");
  expect(questionList).toBeInTheDocument();

  const questionItems = screen.getAllByRole("listitem");
  expect(questionItems).toHaveLength(4);

  const question1 = screen.getByText(
    "Was wird in Konzerten, Opern, Musicals und Filmen aufgeführt?"
  );
  expect(question1).toBeInTheDocument();

  const question2 = screen.getByText(
    "Welches Gerät wird verwendet, um die Zeit zu messen?"
  );
  expect(question2).toBeInTheDocument();

  const question3 = screen.getByText(
    "Welches Möbelstück kann man zum Essen, Arbeiten oder Schreiben verwenden?"
  );
  expect(question3).toBeInTheDocument();

  const question4 = screen.getByText(
    "Welches Körperteil ermöglicht es uns, zu hören?"
  );
  expect(question3).toBeInTheDocument();
});
