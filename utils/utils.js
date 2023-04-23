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
    question: "Der Ort, an dem die Seelen der Verstorbenen hingelangen?",
    answer: "Himmel",
    isCorrectlyAnswered: false,
  },
  {
    id: 2,
    question: "Kleines Nagetier.",
    answer: "Maus",
    isCorrectlyAnswered: false,
  },
  {
    id: 3,
    question: "Eines der 4 Elemente.",
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
    question: "Größeres Gewässer.",
    answer: "See",
    isCorrectlyAnswered: false,
  },
  {
    id: 6,
    question: "Eisige Kälte.",
    answer: "Frost",
    isCorrectlyAnswered: false,
  },
  {
    id: 7,
    question: "Bezeichnung für eine Person, die du anhimmelst.",
    answer: "Idol",
    isCorrectlyAnswered: false,
  },
  {
    id: 8,
    question: "Knuspriges Topping auf Kuchen, Muffins oder Eis.",
    answer: "Streusel",
    isCorrectlyAnswered: false,
  },
  {
    id: 9,
    question: "Scheues Huftier mit Geweih.",
    answer: "Reh",
    isCorrectlyAnswered: false,
  },
];
