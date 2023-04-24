export default function useGrid(crosswordClues) {
  const grid = [
    [
      {
        id: [1, 1],
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "H" : ""}`,
        sup: 1,
      },
      {
        id: [1, 1],
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "I" : ""}`,
      },
      {
        id: [1, 2],
        letter: `${
          crosswordClues[0].isCorrectlyAnswered ||
          crosswordClues[1].isCorrectlyAnswered
            ? "M"
            : ""
        }`,
        sup: 2,
      },
      {
        id: [1, 1],
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "M" : ""}`,
      },
      {
        id: [1, 1],
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "E" : ""}`,
      },
      {
        id: [1, 1],
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "L" : ""}`,
      },
      -1,
      -1,
    ],
    [
      -1,
      -1,
      {
        id: [2, 2],
        letter: `${crosswordClues[1].isCorrectlyAnswered ? "A" : ""}`,
      },
      -1,
      -1,
      -1,
      -1,
      -1,
    ],
    [
      -1,
      -1,
      {
        id: [2, 2],
        letter: `${crosswordClues[1].isCorrectlyAnswered ? "U" : ""}`,
      },
      -1,
      -1,
      {
        id: [6, 6],
        letter: `${crosswordClues[5].isCorrectlyAnswered ? "F" : ""}`,
        sup: 6,
      },
      -1,
      {
        id: [7, 7],
        letter: `${crosswordClues[6].isCorrectlyAnswered ? "I" : ""}`,
        sup: 7,
      },
    ],
    [
      {
        id: [3, 3],
        letter: `${crosswordClues[2].isCorrectlyAnswered ? "W" : ""}`,
        sup: 3,
      },
      {
        id: [3, 4],
        letter: `${
          crosswordClues[2].isCorrectlyAnswered ||
          crosswordClues[3].isCorrectlyAnswered
            ? "A"
            : ""
        }`,
        sup: 4,
      },
      {
        id: [2, 3],
        letter: `${
          crosswordClues[1].isCorrectlyAnswered ||
          crosswordClues[2].isCorrectlyAnswered
            ? "S"
            : ""
        }`,
      },
      {
        id: [3, 5],
        letter: `${
          crosswordClues[2].isCorrectlyAnswered ||
          crosswordClues[4].isCorrectlyAnswered
            ? "S"
            : ""
        }`,
        sup: 5,
      },
      {
        id: [3, 3],
        letter: `${crosswordClues[2].isCorrectlyAnswered ? "E" : ""}`,
      },
      {
        id: [3, 6],
        letter: `${
          crosswordClues[2].isCorrectlyAnswered ||
          crosswordClues[5].isCorrectlyAnswered
            ? "R"
            : ""
        }`,
      },
      -1,
      {
        id: [7, 7],
        letter: `${crosswordClues[6].isCorrectlyAnswered ? "D" : ""}`,
      },
    ],
    [
      -1,
      {
        id: [4, 4],
        letter: `${crosswordClues[3].isCorrectlyAnswered ? "U" : ""}`,
      },
      -1,
      {
        id: [5, 5],
        letter: `${crosswordClues[4].isCorrectlyAnswered ? "E" : ""}`,
      },
      -1,
      {
        id: [6, 6],
        letter: `${crosswordClues[5].isCorrectlyAnswered ? "O" : ""}`,
      },
      -1,
      {
        id: [7, 7],
        letter: `${crosswordClues[6].isCorrectlyAnswered ? "O" : ""}`,
      },
    ],
    [
      {
        id: [8, 8],
        letter: `${crosswordClues[7].isCorrectlyAnswered ? "S" : ""}`,
        sup: 8,
      },
      {
        id: [4, 8],
        letter: `${
          crosswordClues[3].isCorrectlyAnswered ||
          crosswordClues[7].isCorrectlyAnswered
            ? "T"
            : ""
        }`,
      },
      {
        id: [8, 8],
        letter: `${crosswordClues[7].isCorrectlyAnswered ? "R" : ""}`,
      },
      {
        id: [5, 8],
        letter: `${
          crosswordClues[4].isCorrectlyAnswered ||
          crosswordClues[7].isCorrectlyAnswered
            ? "E"
            : ""
        }`,
      },
      {
        id: [8, 8],
        letter: `${crosswordClues[7].isCorrectlyAnswered ? "U" : ""}`,
      },
      {
        id: [6, 8],
        letter: `${
          crosswordClues[5].isCorrectlyAnswered ||
          crosswordClues[7].isCorrectlyAnswered
            ? "S"
            : ""
        }`,
      },
      {
        id: [8, 8],
        letter: `${crosswordClues[7].isCorrectlyAnswered ? "E" : ""}`,
      },
      {
        id: [7, 8],
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
      {
        id: [4, 4],
        letter: `${crosswordClues[3].isCorrectlyAnswered ? "O" : ""}`,
      },
      -1,
      -1,
      -1,
      {
        id: [6, 6],
        letter: `${crosswordClues[5].isCorrectlyAnswered ? "T" : ""}`,
      },
      -1,
      -1,
    ],
    [
      -1,
      {
        id: [4, 9],
        letter: `${
          crosswordClues[3].isCorrectlyAnswered ||
          crosswordClues[8].isCorrectlyAnswered
            ? "R"
            : ""
        }`,
        sup: 9,
      },
      {
        id: [9, 9],
        letter: `${crosswordClues[8].isCorrectlyAnswered ? "E" : ""}`,
      },
      {
        id: [9, 9],
        letter: `${crosswordClues[8].isCorrectlyAnswered ? "H" : ""}`,
      },
      -1,
      -1,
      -1,
      -1,
    ],
  ];
  return grid;
}
