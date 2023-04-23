export default function useGrid(crosswordClues) {
  const grid = [
    [
      {
        id: 1,
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "H" : ""}`,
        sup: 1,
      },
      { id: 1, letter: `${crosswordClues[0].isCorrectlyAnswered ? "I" : ""}` },
      {
        id: 1,
        letter: `${
          crosswordClues[0].isCorrectlyAnswered ||
          crosswordClues[1].isCorrectlyAnswered
            ? "M"
            : ""
        }`,
        sup: 2,
      },
      { id: 1, letter: `${crosswordClues[0].isCorrectlyAnswered ? "M" : ""}` },
      { id: 1, letter: `${crosswordClues[0].isCorrectlyAnswered ? "E" : ""}` },
      { id: 1, letter: `${crosswordClues[0].isCorrectlyAnswered ? "L" : ""}` },
      -1,
      -1,
    ],
    [
      -1,
      -1,
      { id: 2, letter: `${crosswordClues[1].isCorrectlyAnswered ? "A" : ""}` },
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    [
      -1,
      -1,
      { id: 2, letter: `${crosswordClues[1].isCorrectlyAnswered ? "U" : ""}` },
      -1,
      -1,
      { letter: `${crosswordClues[5].isCorrectlyAnswered ? "F" : ""}`, sup: 6 },
      -1,
      { letter: `${crosswordClues[6].isCorrectlyAnswered ? "I" : ""}`, sup: 7 },
    ],
    [
      { letter: `${crosswordClues[2].isCorrectlyAnswered ? "W" : ""}`, sup: 3 },
      {
        letter: `${
          crosswordClues[2].isCorrectlyAnswered ||
          crosswordClues[3].isCorrectlyAnswered
            ? "A"
            : ""
        }`,
        sup: 4,
      },
      {
        id: 2,
        letter: `${
          crosswordClues[1].isCorrectlyAnswered ||
          crosswordClues[2].isCorrectlyAnswered
            ? "S"
            : ""
        }`,
      },
      {
        letter: `${
          crosswordClues[2].isCorrectlyAnswered ||
          crosswordClues[4].isCorrectlyAnswered
            ? "S"
            : ""
        }`,
        sup: 5,
      },
      { letter: `${crosswordClues[2].isCorrectlyAnswered ? "E" : ""}` },
      {
        letter: `${
          crosswordClues[2].isCorrectlyAnswered ||
          crosswordClues[5].isCorrectlyAnswered
            ? "R"
            : ""
        }`,
      },
      -1,
      { letter: `${crosswordClues[6].isCorrectlyAnswered ? "D" : ""}` },
    ],
    [
      -1,
      { letter: `${crosswordClues[3].isCorrectlyAnswered ? "U" : ""}` },
      -1,
      { letter: `${crosswordClues[4].isCorrectlyAnswered ? "E" : ""}` },
      -1,
      { letter: `${crosswordClues[5].isCorrectlyAnswered ? "O" : ""}` },
      -1,
      { letter: `${crosswordClues[6].isCorrectlyAnswered ? "O" : ""}` },
    ],
    [
      { letter: `${crosswordClues[7].isCorrectlyAnswered ? "S" : ""}`, sup: 8 },
      {
        letter: `${
          crosswordClues[3].isCorrectlyAnswered ||
          crosswordClues[7].isCorrectlyAnswered
            ? "T"
            : ""
        }`,
      },
      { letter: `${crosswordClues[7].isCorrectlyAnswered ? "R" : ""}` },
      {
        letter: `${
          crosswordClues[4].isCorrectlyAnswered ||
          crosswordClues[7].isCorrectlyAnswered
            ? "E"
            : ""
        }`,
      },
      { letter: `${crosswordClues[7].isCorrectlyAnswered ? "U" : ""}` },
      {
        letter: `${
          crosswordClues[5].isCorrectlyAnswered ||
          crosswordClues[7].isCorrectlyAnswered
            ? "S"
            : ""
        }`,
      },
      { letter: `${crosswordClues[7].isCorrectlyAnswered ? "E" : ""}` },
      {
        letter: `${
          crosswordClues[6].isCorrectlyAnswered ||
          crosswordClues[7].isCorrectlyAnswered
            ? "L"
            : ""
        }`,
      },
    ],
    [
      -1,
      { letter: `${crosswordClues[3].isCorrectlyAnswered ? "O" : ""}` },
      -1,
      -1,
      -1,
      { letter: `${crosswordClues[5].isCorrectlyAnswered ? "T" : ""}` },
      -1,
      -1,
    ],
    [
      -1,
      {
        letter: `${
          crosswordClues[3].isCorrectlyAnswered ||
          crosswordClues[8].isCorrectlyAnswered
            ? "R"
            : ""
        }`,
        sup: 9,
      },
      { letter: `${crosswordClues[8].isCorrectlyAnswered ? "E" : ""}` },
      { letter: `${crosswordClues[8].isCorrectlyAnswered ? "H" : ""}` },
      -1,
      -1,
      -1,
      -1,
    ],
  ];
  return grid;
}
