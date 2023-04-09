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
  { id: 0, position: { row: 1, column: 11 }, isCollected: false },
  { id: 1, position: { row: 3, column: 8 }, isCollected: false },
  { id: 2, position: { row: 4, column: 5 }, isCollected: false },
  { id: 3, position: { row: 7, column: 3 }, isCollected: false },
  { id: 4, position: { row: 9, column: 9 }, isCollected: false },
  { id: 5, position: { row: 10, column: 4 }, isCollected: false },
  { id: 6, position: { row: 13, column: 1 }, isCollected: false },
  { id: 7, position: { row: 16, column: 15 }, isCollected: false },
  { id: 8, position: { row: 18, column: 4 }, isCollected: false },
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
