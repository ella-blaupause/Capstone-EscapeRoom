export const colors = [
  "yellow",
  "green",
  "lightblue",
  "hotpink",
  "red",
  "gray",
  "orange",
  "blueviolet",
];

export const symbols = ["△", "☆", "◇", "❀", "☀︎", "✧"];

export const initialPuzzlePieces = [
  {
    id: 0,
    position: { row: 2, column: 10 },
    isCollected: false,
  },
  {
    id: 1,
    position: { row: 4, column: 4 },
    isCollected: false,
  },
  {
    id: 2,
    position: { row: 6, column: 12 },
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
    position: { row: 11, column: 4 },
    isCollected: false,
  },
  {
    id: 6,
    position: { row: 14, column: 6 },
    isCollected: false,
  },
  {
    id: 7,
    position: { row: 16, column: 15 },
    isCollected: false,
  },
  {
    id: 8,
    position: { row: 18, column: 4 },
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
