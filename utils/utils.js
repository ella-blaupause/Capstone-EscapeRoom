export const colors = [
  "#FF009A", // hotpink
  "#009E10", //grün
  "#385CFF", //blau
  "#B55A10", //braun
  "#FF110A", //rot
  "gray",
  "orange",
  "blueviolet",
];

export const symbols = ["△", "☆", "◇", "❀", "☀︎", "✧"];

export const initialPuzzlePieces = [
  {
    id: 0,
    position: { row: 2, column: 3 },
    isCollected: false,
  },
  {
    id: 1,
    position: { row: 3, column: 11 },
    isCollected: false,
  },
  {
    id: 2,
    position: { row: 5, column: 13 },
    isCollected: false,
  },
  {
    id: 3,
    position: { row: 8, column: 3 },
    isCollected: false,
  },
  {
    id: 4,
    position: { row: 9, column: 9 },
    isCollected: false,
  },
  {
    id: 5,
    position: { row: 12, column: 7 },
    isCollected: false,
  },
  {
    id: 6,
    position: { row: 15, column: 1 },
    isCollected: false,
  },
  {
    id: 7,
    position: { row: 18, column: 10 },
    isCollected: false,
  },
  {
    id: 8,
    position: { row: 21, column: 12 },
    isCollected: false,
  },
];

export function getRandomNumbers(arrayLength) {
  const numbers = [];

  // Generiert drei zufällige Zahlen, die nur einmal vorkommen
  while (numbers.length < 3) {
    const random = Math.floor(Math.random() * arrayLength);
    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }

  return numbers;
}

export function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

export const initialCrosswordClues = [
  {
    id: 1,
    question: "Der Ort, an dem die Seelen der Verstorbenen hingelangen",
    answer: "Himmel",
    isCorrectlyAnswered: false,
  },
  {
    id: 2,
    question: "Kleines Nagetier",
    answer: "Maus",
    isCorrectlyAnswered: false,
  },
  {
    id: 3,
    question: "Eines der 4 Elemente",
    answer: "Wasser",
    isCorrectlyAnswered: false,
  },
  {
    id: 4,
    question: "Wie nennt man den Verfasser eines Buches?",
    answer: "Autor",
    isCorrectlyAnswered: false,
  },
  {
    id: 5,
    question: "Größeres Gewässer",
    answer: "See",
    isCorrectlyAnswered: false,
  },
  {
    id: 6,
    question: "Eisige Kälte",
    answer: "Frost",
    isCorrectlyAnswered: false,
  },
  {
    id: 7,
    question: "Bezeichnung für eine Person, die du anhimmelst",
    answer: "Idol",
    isCorrectlyAnswered: false,
  },
  {
    id: 8,
    question: "Knuspriges Topping auf Kuchen, Muffins oder Eis",
    answer: "Streusel",
    isCorrectlyAnswered: false,
  },
  {
    id: 9,
    question: "Scheues Huftier mit Geweih",
    answer: "Reh",
    isCorrectlyAnswered: false,
  },
];

export const rows = [0, 1, 2, 3, 4, 5, 6, 7];
export const columns = [0, 1, 2, 3, 4, 5, 6, 7];

export function getGrid(crosswordClues) {
  return [
    [
      {
        refernceCluesId: [1, 1],
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "H" : ""}`,
        sup: 1,
      },
      {
        refernceCluesId: [1, 1],
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "I" : ""}`,
      },
      {
        refernceCluesId: [1, 2],
        letter: `${
          crosswordClues[0].isCorrectlyAnswered ||
          crosswordClues[1].isCorrectlyAnswered
            ? "M"
            : ""
        }`,
        sup: 2,
      },
      {
        refernceCluesId: [1, 1],
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "M" : ""}`,
      },
      {
        refernceCluesId: [1, 1],
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "E" : ""}`,
      },
      {
        refernceCluesId: [1, 1],
        letter: `${crosswordClues[0].isCorrectlyAnswered ? "L" : ""}`,
      },
      -1,
      -1,
    ],
    [
      -1,
      -1,
      {
        refernceCluesId: [2, 2],
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
        refernceCluesId: [2, 2],
        letter: `${crosswordClues[1].isCorrectlyAnswered ? "U" : ""}`,
      },
      -1,
      -1,
      {
        refernceCluesId: [6, 6],
        letter: `${crosswordClues[5].isCorrectlyAnswered ? "F" : ""}`,
        sup: 6,
      },
      -1,
      {
        refernceCluesId: [7, 7],
        letter: `${crosswordClues[6].isCorrectlyAnswered ? "I" : ""}`,
        sup: 7,
      },
    ],
    [
      {
        refernceCluesId: [3, 3],
        letter: `${crosswordClues[2].isCorrectlyAnswered ? "W" : ""}`,
        sup: 3,
      },
      {
        refernceCluesId: [3, 4],
        letter: `${
          crosswordClues[2].isCorrectlyAnswered ||
          crosswordClues[3].isCorrectlyAnswered
            ? "A"
            : ""
        }`,
        sup: 4,
      },
      {
        refernceCluesId: [2, 3],
        letter: `${
          crosswordClues[1].isCorrectlyAnswered ||
          crosswordClues[2].isCorrectlyAnswered
            ? "S"
            : ""
        }`,
      },
      {
        refernceCluesId: [3, 5],
        letter: `${
          crosswordClues[2].isCorrectlyAnswered ||
          crosswordClues[4].isCorrectlyAnswered
            ? "S"
            : ""
        }`,
        sup: 5,
      },
      {
        refernceCluesId: [3, 3],
        letter: `${crosswordClues[2].isCorrectlyAnswered ? "E" : ""}`,
      },
      {
        refernceCluesId: [3, 6],
        letter: `${
          crosswordClues[2].isCorrectlyAnswered ||
          crosswordClues[5].isCorrectlyAnswered
            ? "R"
            : ""
        }`,
      },
      -1,
      {
        refernceCluesId: [7, 7],
        letter: `${crosswordClues[6].isCorrectlyAnswered ? "D" : ""}`,
      },
    ],
    [
      -1,
      {
        refernceCluesId: [4, 4],
        letter: `${crosswordClues[3].isCorrectlyAnswered ? "U" : ""}`,
      },
      -1,
      {
        refernceCluesId: [5, 5],
        letter: `${crosswordClues[4].isCorrectlyAnswered ? "E" : ""}`,
      },
      -1,
      {
        refernceCluesId: [6, 6],
        letter: `${crosswordClues[5].isCorrectlyAnswered ? "O" : ""}`,
      },
      -1,
      {
        refernceCluesId: [7, 7],
        letter: `${crosswordClues[6].isCorrectlyAnswered ? "O" : ""}`,
      },
    ],
    [
      {
        refernceCluesId: [8, 8],
        letter: `${crosswordClues[7].isCorrectlyAnswered ? "S" : ""}`,
        sup: 8,
      },
      {
        refernceCluesId: [4, 8],
        letter: `${
          crosswordClues[3].isCorrectlyAnswered ||
          crosswordClues[7].isCorrectlyAnswered
            ? "T"
            : ""
        }`,
      },
      {
        refernceCluesId: [8, 8],
        letter: `${crosswordClues[7].isCorrectlyAnswered ? "R" : ""}`,
      },
      {
        refernceCluesId: [5, 8],
        letter: `${
          crosswordClues[4].isCorrectlyAnswered ||
          crosswordClues[7].isCorrectlyAnswered
            ? "E"
            : ""
        }`,
      },
      {
        refernceCluesId: [8, 8],
        letter: `${crosswordClues[7].isCorrectlyAnswered ? "U" : ""}`,
      },
      {
        refernceCluesId: [6, 8],
        letter: `${
          crosswordClues[5].isCorrectlyAnswered ||
          crosswordClues[7].isCorrectlyAnswered
            ? "S"
            : ""
        }`,
      },
      {
        refernceCluesId: [8, 8],
        letter: `${crosswordClues[7].isCorrectlyAnswered ? "E" : ""}`,
      },
      {
        refernceCluesId: [7, 8],
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
        refernceCluesId: [4, 4],
        letter: `${crosswordClues[3].isCorrectlyAnswered ? "O" : ""}`,
      },
      -1,
      -1,
      -1,
      {
        refernceCluesId: [6, 6],
        letter: `${crosswordClues[5].isCorrectlyAnswered ? "T" : ""}`,
      },
      -1,
      -1,
    ],
    [
      -1,
      {
        refernceCluesId: [4, 9],
        letter: `${
          crosswordClues[3].isCorrectlyAnswered ||
          crosswordClues[8].isCorrectlyAnswered
            ? "R"
            : ""
        }`,
        sup: 9,
      },
      {
        refernceCluesId: [9, 9],
        letter: `${crosswordClues[8].isCorrectlyAnswered ? "E" : ""}`,
      },
      {
        refernceCluesId: [9, 9],
        letter: `${crosswordClues[8].isCorrectlyAnswered ? "H" : ""}`,
      },
      -1,
      -1,
      -1,
      -1,
    ],
  ];
}

export const avatars = [
  { id: 1, src: "/avatars/avatar-1.jpg", name: "Avatar 1" },
  { id: 2, src: "/avatars/avatar-2.jpg", name: "Avatar 2" },
  { id: 3, src: "/avatars/avatar-3.jpg", name: "Avatar 3" },
  { id: 4, src: "/avatars/avatar-4.jpg", name: "Avatar 4" },
  { id: 5, src: "/avatars/avatar-5.jpg", name: "Avatar 5" },
  { id: 6, src: "/avatars/avatar-6.jpg", name: "Avatar 6" },
  { id: 7, src: "/avatars/avatar-7.jpg", name: "Avatar 7" },
  { id: 8, src: "/avatars/avatar-8.jpg", name: "Avatar 8" },
];

export const initialSolvedPuzzles = [
  { id: 1, name: "light", isSolved: false },
  { id: 2, name: "puzzle pieces", isSolved: false },
  { id: 3, name: "crossword", isSolved: false },
  { id: 4, name: "color code", isSolved: false },
];
